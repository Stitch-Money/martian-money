import React, { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas, ReactThreeFiber, useFrame } from "react-three-fiber";
import dynamic from 'next/dynamic';
import THREE from "three";

type Keyframe = {
    start: number,
    domContent: (time: number, fracTillNextKeyframe: number) => JSX.Element,
    threejs: (time: number, fracTillNextKeyframe: number) => void
};

const keyframes: Keyframe[] = [{
    start: 0,
    domContent: (time: number, fracTillNextKeyframe: number) => <div>Frog</div>,
    threejs: (time: number, fracTillNextKeyframe: number) => { }
}];


function getDocumentHeight() {
    const body = document.body;
    const html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

const MarsScene = dynamic(
    () => import('../components/threeD/mars-scene'),
    { ssr: false }
);

function ThreeJsLanding() {
    const group = useRef<ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>>();

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        let maybeGroup = group.current;
        if (maybeGroup) {
            const thisGroup = maybeGroup;
            const scrollY = window.scrollY;
            const height = getDocumentHeight() - window.innerHeight;
            const frac = scrollY / height;
            (thisGroup.rotation as any).x = Math.PI * 2 * frac;
        }
    })
    return <> <perspectiveCamera fov={100} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, -4, 4]} ref={group}>
            <Suspense fallback={null}>
                <MarsScene />
            </Suspense>
        </group></>;
}

export default function ThreeJsTest() {


    return <div style={{ width: '100vw', height: '500vh', position: 'absolute', padding: 0, margin: 0 }}>
        <div style={{ width: '100vw', height: '500vh', display: 'flex', position: 'absolute' }}>
            <span style={{ width: '100%', height: '100%' }}>&nbsp;</span>
        </div>
        <Canvas style={{ width: '100vw', minHeight: '100vh', position: 'fixed' }} >
            <ThreeJsLanding />
        </Canvas>
    </div>;
}
