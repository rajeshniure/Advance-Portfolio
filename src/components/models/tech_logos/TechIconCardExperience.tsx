import React, { useMemo, memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface ModelProps {
  modelPath: string;
  name: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];
  imagePath?: string;
}

interface TechIconCardExperienceProps {
  model: ModelProps;
}

const Model: React.FC<{ model: ModelProps }> = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));



  const scale = useMemo(() => {
    return isMobile && model.scale
      ? model.scale.map((v) => v * 0.7) as [number, number, number]
      : model.scale;
  }, [isMobile, model.scale]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group scale={scale} rotation={model.rotation}>
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

const ErrorFallback: React.FC<{ modelName: string }> = ({ modelName }) => (
  <Box display="flex" justifyContent="center" alignItems="center" height="100%" flexDirection="column">
    <Typography variant="caption" color="text.secondary">
      {modelName}
    </Typography>
  </Box>
);

class ModelErrorBoundary extends React.Component<
  { children: React.ReactNode; modelName: string },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; modelName: string }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback modelName={this.props.modelName} />;
    }
    return this.props.children;
  }
}

const TechIconCardExperience: React.FC<TechIconCardExperienceProps> = memo(({ model }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  return (
    <Box sx={{ 
      width: "100%", 
      height: { xs: "100%", lg: "150px" },
      position: "relative"
    }}>
      {isMobile && model.imagePath ? (
        <Box sx={{aspectRatio: '1 / 1', mx: 'auto', borderRadius: '23%', overflow: 'hidden' }}>
          <Box
            component="img"
            src={model.imagePath}
            alt={model.name}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              borderRadius: 0
            }}
          />
        </Box>
      ) : (
        <ModelErrorBoundary modelName={model.name}>
          <Canvas
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <ambientLight intensity={1} color={0xffffff} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color={0xffffff} />
            <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={3} color={0xffffff} />
            <Environment preset="city" />

            <Suspense fallback={null}>
              <Model model={model} />
            </Suspense>

            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate={false}
              enableDamping={true}
              dampingFactor={0.05}
            />
          </Canvas>
        </ModelErrorBoundary>
      )}
    </Box>
  );
});

useGLTF.preload("/models/react_logo-transformed.glb");
useGLTF.preload("/models/python-transformed.glb");
useGLTF.preload("/models/javascript.glb");
useGLTF.preload("/models/django.glb");
useGLTF.preload("/models/typescript.glb");
useGLTF.preload("/models/git-svg-transformed.glb");
useGLTF.preload("/models/mysql.glb");
useGLTF.preload("/models/tailwind.glb");
useGLTF.preload("/models/mui.glb");


export default TechIconCardExperience;
