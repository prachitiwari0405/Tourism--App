import React from 'react';
import { useGLTF } from '@react-three/drei';

export const Buildings = () => {
  // Example building placement
  const buildings = [
    { position: [10, 0, 20], scale: 1, type: 'hotel' },
    { position: [-30, 0, 40], scale: 0.8, type: 'temple' },
    { position: [50, 0, -10], scale: 1.2, type: 'resort' },
  ];

  return (
    <group>
      {buildings.map((building, index) => (
        <Building
          key={index}
          position={building.position}
          scale={building.scale}
          type={building.type}
        />
      ))}
    </group>
  );
};

const Building = ({ position, scale, type }) => {
  const { scene } = useGLTF(`/models/${type}.glb`);
  
  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={[scale, scale, scale]}
      castShadow
    />
  );
};