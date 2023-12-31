/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function ByteSymbolFlat3({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/8Byte_Symbol_3D_4c.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Curve009.geometry}
        material={materials["SVGMat.003"]}
      />
    </group>
  );
}

useGLTF.preload("/models/8Byte_Symbol_3D_4c.glb");
