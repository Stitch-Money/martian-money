import React, { Suspense, useRef, useState } from 'react'
import { ReactThreeFiber, useFrame } from 'react-three-fiber'
import THREE, { Euler } from 'three';
import { Mars } from './mars';


export default function MarsScene(props: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>) {
  // This reference will give us direct access to the mesh

  return <Mars />;
}