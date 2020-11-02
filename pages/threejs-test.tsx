import React, { DetailedHTMLProps, HTMLAttributes, MutableRefObject, Ref, Suspense, useEffect, useRef } from "react";
import { Canvas, ReactThreeFiber, useFrame } from "react-three-fiber";
import dynamic from 'next/dynamic';
import THREE, { Euler, Quaternion, Vector3 } from "three";
import Footer from "components/footer/footer";
import { Loader } from "@react-three/drei";

type MarsKeyFrame = {
    time: number,
    transform: Transform,
    apply?: (time: number, fracTillNextKeyframe: number, group: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>) => void
};
type Transform = { position: Vector3, rotation: Euler };


const marsKeyframes: MarsKeyFrame[] = [{
    time: 0,
    transform: { position: new Vector3(0, 0, -10), rotation: new Euler(0, 0, 0) }
}, {
    time: 0.3,
    transform: { position: new Vector3(0, -4, 4), rotation: new Euler(0, 0, 0) }
},
{
    time: 0.575,
    transform: { position: new Vector3(0, -4, 4), rotation: new Euler(Math.PI, 0, 0) }
},
{
    time: 0.9,
    transform: { position: new Vector3(0, -4, 4), rotation: new Euler(2 * Math.PI, 0, 0) }
},
{
    time: 0.95,
    transform: { position: new Vector3(0, 0, 0), rotation: new Euler(2 * Math.PI, 0, 0) }
},
{
    time: 1,
    transform: { position: new Vector3(0, 4, -10), rotation: new Euler(3 * Math.PI, 0, 0) }
}];

if (!marsKeyframes.every((v, i) => i === 0 || marsKeyframes[i - 1].time <= marsKeyframes[i].time)) {
    throw new Error('Mars Keyframes are not correctly ordered');
}


type ContentKeyFrame = {
    time: number,
    fullOpacity: number,
    fullOpacityDuration?: number,
    zeroOpacity: number
};

const contentKeyFrames: ContentKeyFrame[] = [
    { time: 0, fullOpacity: 0.0, fullOpacityDuration: 0.2, zeroOpacity: 0.5 },
    { time: 0.3, fullOpacity: 0.4, fullOpacityDuration: 0.4, zeroOpacity: 0.95 },
    { time: 0.5, fullOpacity: 0.4, fullOpacityDuration: 0.4, zeroOpacity: 0.95 },
    { time: 0.7, fullOpacity: 0.4, fullOpacityDuration: 0.4, zeroOpacity: 0.9 },
    { time: 0.95, fullOpacity: 0.25, fullOpacityDuration: 0.75, zeroOpacity: 1.1 }
];

if (!contentKeyFrames.every((v, i) => i === 0 || contentKeyFrames[i - 1].time <= contentKeyFrames[i].time)) {
    throw new Error('Content Keyframes are not correctly ordered');
}


const currentQuat = new Quaternion();
const nextQuat = new Quaternion();

function interpolateTransform(current: Transform, next: Transform, time: number): Transform {
    const rotation = current.rotation.clone();
    const position = current.position.clone();
    position.lerp(next.position, time);

    currentQuat.setFromEuler(current.rotation);
    nextQuat.setFromEuler(next.rotation);

    rotation.setFromQuaternion(currentQuat.slerp(nextQuat, time));

    return { position, rotation: rotation };
}

function getCurrentAndNextKeyFrame<Keyframe extends { time: number }>(keyframes: Keyframe[], time: number): [Keyframe] | [Keyframe, Keyframe] {
    for (let i = 0; i < keyframes.length; ++i) {
        let keyframe = keyframes[i];
        if (keyframe.time > time) {
            let next = keyframe;
            let current = keyframes[i - 1] ?? null;
            return next ? [current, next] : [current];
        }
    }
    return [keyframes[keyframes.length - 1]];
}


function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function getTime() {
    const scrollY = window.scrollY;
    const height = getDocumentHeight() - window.innerHeight;
    return scrollY / height;
}




const MarsScene = dynamic(
    () => import('../components/threeD/mars-scene'),
    { ssr: false }
);

function MarsCanvasContent() {
    const group = useRef<ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>>();

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        let maybeGroup = group.current;
        if (maybeGroup) {
            const thisGroup = maybeGroup;
            const time = getTime();
            const thisKeyframes = getCurrentAndNextKeyFrame(marsKeyframes, time);
            if (thisKeyframes.length > 1) {
                const keyframeTime = (time - thisKeyframes[0].time) / (thisKeyframes[1]!.time - thisKeyframes[0].time);
                const finalTransform = interpolateTransform(thisKeyframes[0].transform, thisKeyframes[1]!.transform, keyframeTime);
                (thisGroup.rotation as Euler).copy(finalTransform.rotation);
                (thisGroup.position as Vector3).copy(finalTransform.position);
            } else {
                (thisGroup.rotation as Euler).copy(thisKeyframes[0].transform.rotation);
                (thisGroup.position as Vector3).copy(thisKeyframes[0].transform.position);
            }
        }
    });

    return <> <perspectiveCamera fov={100} />

        <ambientLight color={'#efefef'} />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, -4, 4]} ref={group}>
            <Suspense fallback={null}>
                <MarsScene />
            </Suspense>
        </group>
    </>;
}


function calculateOpacity(keyframe: ContentKeyFrame, time: number) {
    const start = keyframe.fullOpacity;
    const end = keyframe.zeroOpacity;
    const fullOpacityDuration = keyframe.fullOpacityDuration ?? 0;
    const fadeStart = start + fullOpacityDuration;
    if (time < start) {
        return (time / start);
    } else if (time >= start && time < fadeStart) {
        return 1;
    } else if (time < end) {
        return (end - time) / (end - fadeStart);
    } else {
        return 0;
    }
}

function applyContentKeyframes(refs: MutableRefObject<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> | undefined>[], time: number) {
    const [current, maybeNext] = getCurrentAndNextKeyFrame(contentKeyFrames, time);
    for (let i = 0; i < contentKeyFrames.length; ++i) {
        let keyframe = contentKeyFrames[i];
        let ref = refs[i];
        if (keyframe && ref && ref.current) {
            const refVal = ref.current;
            if (!refVal.style) {
                refVal.style = {};
            }
            if (current === keyframe) {
                let internalTime = 0;
                if (maybeNext) {
                    let next = maybeNext;
                    internalTime = (time - current.time) / (next.time - current.time);
                } else {
                    internalTime = (time - current.time) / (1 - current.time);
                }
                const opacityValue = calculateOpacity(keyframe, internalTime)
                const opacity = `${opacityValue}`;
                if (opacityValue <= 0.0001) {
                    refVal.style.visibility = 'hidden';
                } else {
                    refVal.style.visibility = 'unset';
                }

                refVal.style.opacity = opacity;
            } else {
                refVal.style.opacity = '0';
            }
        }
    }
}

export default function ThreeJsTest() {
    const page1Ref = useRef();
    const page2Ref = useRef();
    const page3Ref = useRef();
    const page4Ref = useRef();
    const page5Ref = useRef();

    useEffect(() => {
        if (window && window.addEventListener) {
            const f = () => {
                const time = getTime();
                applyContentKeyframes([page1Ref, page2Ref, page3Ref, page4Ref, page5Ref], time);
            };
            f();
            window.addEventListener('scroll', f, { passive: true });
            return () => { window.removeEventListener('scroll', f) };
        }
    }, [page1Ref, page2Ref, page3Ref, page4Ref, page5Ref]);


    return <div className='marsbackground' >
        <div style={{ width: '100vw', height: '100%', display: 'flex', position: 'absolute' }} >
            <span style={{ width: '100%', height: '100%' }}>&nbsp;</span>
        </ div>
        <Canvas style={{ width: '100vw', height: '100vh', position: 'fixed' }} >
            <MarsCanvasContent />
        </Canvas>

        <div style={{ height: '100%', width: '100%', position: 'absolute' }} className='three-landing-content'>
            <div className='marspage' style={{ height: '150vh' }} ref={page1Ref as any} id='page1'>
                <a href="https://github.com/Stitch-Money/martian-money" className="github-corner" aria-label="View source on GitHub">
                    <svg width="80" height="80" viewBox="0 0 250 250" style={{
                        fill: '#8733ff', color: '#fff', position: 'fixed', top: 0, border: 0, right: 0
                    }} aria-hidden="true">
                        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                        <path
                            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                            fill="currentColor"
                            style={{ transformOrigin: '130px 106px' }} className="octo-arm">
                        </path>
                        <path
                            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                            fill="currentColor" className="octo-body">
                        </path></svg></a>
                <div style={{ position: 'sticky', top: '5vh', height: '90vh' }}>
                    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <img width={'250px'} alt='Martian Money' src='/images/martianmoneylogo.svg' />
                    </div>
                    <h2 style={{ position: 'absolute', color: '#ff5353', bottom: '20px' }}>“Finance for when one world is not enough”</h2>
                </div>
            </div>
            <div style={{ height: '120vh' }} className='marspage' id='page2' ref={page2Ref as any}>
                <div className="section" style={{ position: 'sticky', width: '100%', top: '5vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">
                        <h2 style={{ fontWeight: 600, fontSize: '2em', color: '#27fcc9' }}>Rocket Advice</h2>
                        <h3>A ticket to another world is not cheap</h3>
                        <p>Rocket Advice provides smart, tailored financial planning
                        that blends human versatility and advanced robo-advisors into a mix that will propel your finances to another world.</p>
                        <div>
                            <button style={{ backgroundColor: '#27fcc9', marginTop: '1.6em', color: '#000' }} className='button is-primary'>Start Saving</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '120vh' }} ref={page3Ref as any} className='marspage' id='page3'>
                <div className="section" style={{ position: 'sticky', width: '100%', top: '5vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">
                        <h2 style={{ fontWeight: 600, fontSize: '2em', color: '#fffdbd' }}>Dome Loans</h2>
                        <h3>Live, Breath Mars Stylishly</h3>
                        <p>Landing on mars is one small step for you and your family. Take the next giant leap with our competitive dome loans. Martian Money has the exclusive rights to home financing in the Muskian colonies,
                            and every dome comes with a 2 year supply of Apple Air and Amazon H<sub>2</sub>O.</p>
                        <div>
                            <button style={{ backgroundColor: '#fffdbd', marginTop: '1.6em', color: '#000' }} className='button is-primary'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '120vh' }} className='marspage' id='page4' ref={page4Ref as any}>
                <div className="section" style={{ position: 'sticky', width: '100%', top: '5vh', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className="container">
                        <h2 style={{ fontWeight: 600, fontSize: '2em', color: 'pink' }}>Elevator Investments</h2>
                        <h3>Martian Derivatives, Stocks and FX</h3>
                        <p>Our industry leading trading platform gives retail investors the power of the pros. 0% trading fees, and capped wallet funding mean a bigger piece of the pie. Our smart onboarding can get you trading in minutes.</p>
                        <div>
                            <button style={{ backgroundColor: 'pink', marginTop: '1.6em', color: '#000' }} className='button is-primary'>Start Trading</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh' }} className='marspage' id='page5' ref={page5Ref as any}>
                <div className='footer'>
                    <p>A demo by&nbsp;<a target='#' href="https://stitch.money" ><img style={{ display: 'inline', height: '0.8em' }} alt='Stitch' src='/images/stitch-logo.svg' /></a>.
                    The source code is <a href="https://opensource.org/licenses/mit-license.php">MIT</a> licensed, while the website content is licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.</p>
                    <p>Copyright © 2020 Stitch Money. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </div >;
}
