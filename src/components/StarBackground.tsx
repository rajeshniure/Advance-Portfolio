import type React from "react";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { Box } from "@mui/material";
import type * as THREE from "three";
import { inSphere } from "maath/random/dist/maath-random.esm";


const StarBackground: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => inSphere(new Float32Array(2000), { radius: 1.2 }));

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="white"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


const StarsCanvas: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      height: "auto",
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
    }}
  >
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
        <Preload all />
      </Suspense>
    </Canvas>
  </Box>
);

export default StarsCanvas;
