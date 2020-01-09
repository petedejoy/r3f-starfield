import React from "react";
import logo from "../../logo.svg";
import Img from 'react-image'

export default () => {
  const FakeSphere = () => {
    return (
      <mesh>
        <sphereBufferGeometry args={[0.7, 30, 30]} attach="geometry" />
        <meshBasicMaterial color='#fffff' attach="material" visible="false" />
      </mesh>
    );
  };
  

  return (
    <group>
      <FakeSphere />
      <ambientLight intensity={0.9} />
      <pointLight intensity={1.12} position={[0, 0, 0]} />
    </group>
  );
};
