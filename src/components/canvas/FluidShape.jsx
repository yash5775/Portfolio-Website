'use client';

import { MeshDistortMaterial } from '@react-three/drei';

export default function FluidShape() {
    return (
        <mesh position={[0, 0, 0]} scale={2.0}>
            <sphereGeometry args={[1, 64, 64]} />
            <MeshDistortMaterial
                color="#ffffff" // White base for high-key look
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1} // Glossy
                metalness={0.1} // Plastic/Glass feel
                reflectivity={1}
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </mesh>
    );
}
