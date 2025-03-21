import React from 'react';
import { useTexture } from '@react-three/drei';

export const Terrain = () => {
  const heightMap = useTexture('/textures/bali-height.jpg');
  const terrainTexture = useTexture('/textures/bali-terrain.jpg');

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[500, 500, 128, 128]} />
      <meshStandardMaterial
        map={terrainTexture}
        displacementMap={heightMap}
        displacementScale={50}
        roughness={0.8}
      />
    </mesh>
  );
};