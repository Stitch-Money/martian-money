import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, ReactThreeFiber, useFrame } from "react-three-fiber";
import dynamic from 'next/dynamic';
import THREE, { Euler, InterpolateSmooth, Quaternion, Vector3 } from "three";

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
    time: 1,
    transform: { position: new Vector3(0, 4, 4), rotation: new Euler(2 * Math.PI, 0, 0) }
}];

if (!marsKeyframes.every((v, i) => i === 0 || marsKeyframes[i - 1].time <= marsKeyframes[i].time)) {
    throw new Error('Keyframes are not correctly ordered');
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
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, -4, 4]} ref={group}>
            <Suspense fallback={null}>
                <MarsScene />
            </Suspense>
        </group>
    </>;
}

export default function ThreeJsTest() {
    return <div style={{ width: '100vw', height: '500vh', position: 'absolute', padding: 0, margin: 0 }}>
        <div style={{ width: '100vw', height: '500vh', display: 'flex', position: 'absolute' }}>
            <span style={{ width: '100%', height: '100%' }}>&nbsp;</span>
        </div>
        <Canvas style={{ width: '100vw', minHeight: '100vh', position: 'fixed' }} >
            <MarsCanvasContent />
        </Canvas>
    </div>;
}
