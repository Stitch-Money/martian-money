import React from 'react';
import { ReactThreeFiber } from 'react-three-fiber';
import THREE from 'three';
import { Mars } from './mars';


export default function MarsScene(props: ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group>) {
  // This reference will give us direct access to the mesh

  return <Mars />;
}
