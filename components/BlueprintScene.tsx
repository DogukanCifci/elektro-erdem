import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Grid, Center, Box, Line, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CircuitBoard = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation to show 3D depth
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  // Mock wiring paths
  const points1 = [[-2, 0, 0], [-2, 1, 0], [0, 1, 0], [0, 2, 0]] as [number, number, number][];
  const points2 = [[2, 0, 0], [2, 1, 0], [0, 1, 0]] as [number, number, number][];
  const points3 = [[0, -2, 0], [0, -1, 0], [-1, -1, 0], [-1, 0, 0]] as [number, number, number][];

  return (
    // @ts-ignore
    <group ref={groupRef} rotation={[0.3, 0, 0]}>
      {/* Main Panel Box */}
      <Box args={[3, 4, 0.2]} position={[0, 0, -0.2]}>
        {/* @ts-ignore */}
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* Components on the panel (Breakers/Relays) */}
      <Box args={[0.8, 1.2, 0.3]} position={[-0.8, 0.5, 0.1]}>
        {/* @ts-ignore */}
        <meshStandardMaterial color="#334155" />
      </Box>
      <Box args={[0.8, 1.2, 0.3]} position={[0.8, 0.5, 0.1]}>
        {/* @ts-ignore */}
        <meshStandardMaterial color="#334155" />
      </Box>
      
      {/* Lower modules */}
      <Box args={[2.6, 1, 0.3]} position={[0, -1, 0.1]}>
        {/* @ts-ignore */}
        <meshStandardMaterial color="#475569" />
      </Box>

      {/* Connection Nodes (Glowing) */}
      {[[-0.8, 1.2, 0.1], [0.8, 1.2, 0.1], [0, -0.4, 0.1], [-1, -1, 0.3], [1, -1, 0.3]].map((pos, i) => {
        return (
          // @ts-ignore
          <mesh key={i} position={pos as [number, number, number]}>
            {/* @ts-ignore */}
            <sphereGeometry args={[0.1, 16, 16]} />
            {/* @ts-ignore */}
            <meshBasicMaterial color={i % 2 === 0 ? "#ef4444" : "#22c55e"} />
          </mesh>
        );
      })}

      {/* Wires */}
      <Line points={points1} color="#f59e0b" lineWidth={3} />
      <Line points={points2} color="#3b82f6" lineWidth={3} />
      <Line points={points3} color="#f59e0b" lineWidth={3} />

    </group>
  );
};

const BlueprintScene: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-900 rounded-lg overflow-hidden relative border border-slate-700">
        <div className="absolute top-4 left-4 z-10 bg-slate-800/80 backdrop-blur px-3 py-1 rounded text-xs text-amber-500 font-mono border border-amber-500/30">
            TEKNİK ŞEMA GÖRÜNÜMÜ
        </div>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* @ts-ignore */}
        <color attach="background" args={['#0f172a']} />
        {/* @ts-ignore */}
        <ambientLight intensity={0.5} />
        {/* @ts-ignore */}
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Center>
          <CircuitBoard />
        </Center>
        <Grid 
            infiniteGrid 
            fadeDistance={30} 
            sectionColor="#1e293b" 
            cellColor="#334155" 
            position={[0, -3, 0]} 
        />
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default BlueprintScene;