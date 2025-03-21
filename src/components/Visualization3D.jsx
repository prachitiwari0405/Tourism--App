import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text, Html } from '@react-three/drei';
import { Terrain } from './3d/Terrain';
import { Buildings } from './3d/Buildings';
import { Landmarks } from './3d/Landmarks';
import { LoadingSpinner } from './LoadingSpinner';

const Visualization3D = ({ destination }) => {
  return (
    <div className="visualization-container">
      <Canvas
        camera={{ position: [100, 100, 100], fov: 50 }}
        style={{ height: '70vh' }}
      >
        <Suspense fallback={<Html center><LoadingSpinner /></Html>}>
          {/* Ambient and directional lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
          />

          {/* Environment map for realistic reflections */}
          <Environment preset="sunset" />

          {/* Terrain */}
          <Terrain />

          {/* Buildings */}
          <Buildings />

          {/* Landmarks with labels */}
          <Landmarks />

          {/* Distance markers */}
          <DistanceMarkers />

          {/* Camera controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            maxDistance={200}
            minDistance={20}
          />
        </Suspense>
      </Canvas>

      {/* Legend and controls */}
      <div className="visualization-controls">
        <div className="legend">
          <h3>Points of Interest</h3>
          <ul>
            <li><span className="legend-dot temple"></span> Temples</li>
            <li><span className="legend-dot beach"></span> Beaches</li>
            <li><span className="legend-dot hotel"></span> Hotels</li>
          </ul>
        </div>
        <div className="scale-reference">
          <p>Scale: 1 unit = 10 meters</p>
        </div>
      </div>
    </div>
  );
};

const DistanceMarkers = () => {
  return (
    <group>
      {/* Scale markers every 100 meters */}
      {[0, 100, 200, 300].map((position) => (
        <group key={position} position={[position, 0, 0]}>
          <Text
            position={[0, 5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            fontSize={5}
          >
            {position}m
          </Text>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 10, 1]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      ))}
    </group>
  );
};

export default Visualization3D;