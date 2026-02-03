'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { TorusKnot, Float } from '@react-three/drei';

function AbstractShape() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot ref={meshRef} args={[10, 3, 100, 16]} scale={0.8}>
        <meshStandardMaterial 
          color="#5d3fd3" 
          wireframe 
          transparent 
          opacity={0.1} 
        />
      </TorusKnot>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden'
    }}>
      <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AbstractShape />
      </Canvas>
    </div>
  );
}
