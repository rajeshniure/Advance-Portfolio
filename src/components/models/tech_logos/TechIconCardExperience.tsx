import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Box, useMediaQuery, useTheme } from "@mui/material";

interface ModelProps {
  modelPath: string;
  name: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

interface TechIconCardExperienceProps {
  model: ModelProps;
}

const TechIconCardExperience: React.FC<TechIconCardExperienceProps> = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (model.name === "Three_js") {
      scene.scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh && child.name === "Object_5") {
          (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, [scene, model.name]);

  // Responsive scale
  const scale = isMobile && model.scale
    ? model.scale.map((v) => v * 0.7) as [number, number, number]
    : model.scale;

  return (
    <Box sx={{ width: "100%", height: { xs: "100px", sm: "100px", md: "100px", lg: "150px" } }}>
      <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} />
        <Environment preset="city" />

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
          <group scale={scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
          </group>
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </Box>
  );
};

export default TechIconCardExperience;
