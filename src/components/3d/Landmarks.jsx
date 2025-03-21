import React from 'react';
import { Text } from '@react-three/drei';

export const Landmarks = () => {
  const landmarks = [
    { name: 'Tanah Lot Temple', position: [20, 10, 30] },
    { name: 'Nusa Dua Beach', position: [-40, 5, -20] },
    { name: 'Ubud Market', position: [60, 8, 40] },
  ];

  return (
    <group>
      {landmarks.map((landmark, index) => (
        <Landmark
          key={index}
          name={landmark.name}
          position={landmark.position}
        />
      ))}
    </group>
  );
};

const Landmark = ({ name, position }) => {
  return (
    <group position={position}>
      {/* Landmark marker */}
      <mesh castShadow>
        <cylinderGeometry args={[0.5, 0.5, 10, 16]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* Landmark label */}
      <Text
        position={[0, 12, 0]}
        fontSize={3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
};