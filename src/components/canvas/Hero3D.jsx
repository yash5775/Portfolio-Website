'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, useScroll, ScrollControls } from '@react-three/drei';
import FluidShape from './FluidShape';

function HeroMesh() {
    const meshRef = useRef(null);
    const scroll = useScroll();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Auto rotation
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;

            // Scroll based rotation/position (Parallax)
            const scrollOffset = scroll.offset;
            meshRef.current.rotation.x += scrollOffset * 2;
            meshRef.current.position.y = -scrollOffset * 3; // Move down as we scroll
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} scale={1.5} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color="#4338ca"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
}

export default function Hero3D() {
    return (
        <ScrollControls pages={4} damping={0.2}>
            {/* Ambient Lights remain static/outside scroll effects if desired, or inside */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <FluidShape />
            {/* <Environment preset="city" /> - Optional for more reflections */}
        </ScrollControls>
    );
}
