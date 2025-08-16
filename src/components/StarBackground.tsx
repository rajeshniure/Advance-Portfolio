import type React from "react";
import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { Box, useMediaQuery } from "@mui/material";
import type * as THREE from "three";
import { inSphere } from "maath/random/dist/maath-random.esm";


const StarBackground: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  const isMobile = useMediaQuery('(max-width:600px)');

  const positions = useMemo(() => {
    const count = isMobile ? 1200 : 2000;
    return inSphere(new Float32Array(count), { radius: 1.2 });
  }, [isMobile]);

  const isActiveRef = useRef<boolean>(true);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const onVisibility = () => {
      isActiveRef.current = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useFrame((_, delta) => {
    if (!isActiveRef.current || !ref.current) return;
    frameRef.current = (frameRef.current + 1) % 2;
    if (frameRef.current !== 0) return;
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled
      >
        <PointMaterial
          transparent
          color="white"
          size={isMobile ? 0.0025 : 0.003}
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
      zIndex: 0,
    }}
  >
    <Canvas
      camera={{ position: [0, 0, 1] }}
      dpr={[1, 1.5]}
      shadows={false}
      gl={{ antialias: false, powerPreference: 'low-power', alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <StarBackground />
    </Canvas>
  </Box>
);

export default StarsCanvas;
