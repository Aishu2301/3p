import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room.jsx";
import HeroLights from "./HeroLights.jsx";
import Particles from "./Particles.jsx";
import { Suspense } from "react";

const HeroExperience = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

    return (
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
            {/* deep blue ambient */}
            <ambientLight intensity={0.2} color="#1a1a40" />
            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <Suspense fallback={null}>
                <HeroLights />
                <Particles count={100} />
                <group
                    scale={isMobile ? 0.9 : 1.3}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                >
                    <Room />
                </group>
            </Suspense>
        </Canvas>
    );
};

export default HeroExperience;