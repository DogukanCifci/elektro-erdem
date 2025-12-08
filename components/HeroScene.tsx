import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// --- Electric Web Component ---
const ElectricWeb = () => {
    const count = 100;
    const connectionDistance = 3.5;
    const mouseConnectionDistance = 5;

    // Use a reference to track mouse position in 3D space
    const mousePos = useRef(new THREE.Vector3(0, 0, 0));
    
    // Nodes data
    const nodes = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            temp.push({
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 10
                ),
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02,
                    (Math.random() - 0.5) * 0.02
                )
            });
        }
        return temp;
    }, []);

    // Refs for visual elements
    const pointsRef = useRef<THREE.InstancedMesh>(null);
    const linesGeometryRef = useRef<THREE.BufferGeometry>(null);
    
    // Track mouse movement
    const { viewport } = useThree();
    useFrame((state) => {
        // Convert mouse ndc to world coordinates approximately
        const x = (state.pointer.x * viewport.width) / 2;
        const y = (state.pointer.y * viewport.height) / 2;
        mousePos.current.set(x, y, 0);

        // Update Nodes
        if (pointsRef.current) {
            const dummy = new THREE.Object3D();
            nodes.forEach((node, i) => {
                // Move
                node.position.add(node.velocity);
                
                // Bounce
                if (node.position.x > 10 || node.position.x < -10) node.velocity.x *= -1;
                if (node.position.y > 6 || node.position.y < -6) node.velocity.y *= -1;
                if (node.position.z > 5 || node.position.z < -5) node.velocity.z *= -1;

                dummy.position.copy(node.position);
                dummy.scale.set(0.1, 0.1, 0.1);
                dummy.updateMatrix();
                pointsRef.current!.setMatrixAt(i, dummy.matrix);
            });
            pointsRef.current.instanceMatrix.needsUpdate = true;
        }

        // Update Lines
        if (linesGeometryRef.current) {
            const positions: number[] = [];
            const colors: number[] = [];
            const color = new THREE.Color();
            
            // Connect to mouse
            nodes.forEach((node) => {
                const distToMouse = node.position.distanceTo(mousePos.current);
                if (distToMouse < mouseConnectionDistance) {
                    positions.push(node.position.x, node.position.y, node.position.z);
                    positions.push(mousePos.current.x, mousePos.current.y, mousePos.current.z);
                    
                    // Electric Blue with opacity based on distance
                    const alpha = 1 - (distToMouse / mouseConnectionDistance);
                    color.setHSL(0.6, 1, 0.5); // Blue
                    colors.push(color.r, color.g, color.b);
                    colors.push(color.r, color.g, color.b);
                }
            });

            // Connect nodes to nodes
             for (let i = 0; i < count; i++) {
                for (let j = i + 1; j < count; j++) {
                    const dist = nodes[i].position.distanceTo(nodes[j].position);
                    if (dist < connectionDistance) {
                        positions.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
                        positions.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);

                         const alpha = 1 - (dist / connectionDistance);
                         // Lighter blue for inter-node connections
                         color.setHSL(0.6, 0.8, 0.8); 
                         colors.push(color.r, color.g, color.b);
                         colors.push(color.r, color.g, color.b);
                    }
                }
             }

            linesGeometryRef.current.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            // @ts-ignore
            linesGeometryRef.current.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            linesGeometryRef.current.attributes.position.needsUpdate = true;
            // @ts-ignore
            linesGeometryRef.current.attributes.color.needsUpdate = true;
        }
    });

    return (
        // @ts-ignore
        <group>
             {/* Nodes */}
             {/* @ts-ignore */}
            <instancedMesh ref={pointsRef} args={[undefined, undefined, count]}>
                {/* @ts-ignore */}
                <sphereGeometry args={[1, 16, 16]} />
                {/* @ts-ignore */}
                <meshBasicMaterial color="#334155" /> 
            </instancedMesh>

            {/* Lines */}
            {/* @ts-ignore */}
            <lineSegments>
                {/* @ts-ignore */}
                <bufferGeometry ref={linesGeometryRef} />
                {/* @ts-ignore */}
                <lineBasicMaterial vertexColors={true} blending={THREE.AdditiveBlending} transparent opacity={0.6} />
            </lineSegments>
        </group>
    );
};

const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-slate-50">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={60} />
        {/* @ts-ignore */}
        <color attach="background" args={['#f8fafc']} />
        {/* @ts-ignore */}
        <fog attach="fog" args={['#f8fafc', 10, 25]} />
        
        <ElectricWeb />

        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default HeroScene;