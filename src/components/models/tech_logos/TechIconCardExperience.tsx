import React, { useMemo, memo, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface ModelProps {
  modelPath: string;
  name: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];
}

interface TechIconCardExperienceProps {
  model: ModelProps;
}

const Model: React.FC<{ model: ModelProps; isMobile: boolean }> = ({ model, isMobile }) => {
  const scene = useGLTF(model.modelPath);
  const scale = useMemo(() => {
    return isMobile && model.scale
      ? model.scale.map((v) => v * 0.7) as [number, number, number]
      : model.scale;
  }, [isMobile, model.scale]);

  const content = (
    <group scale={scale} rotation={model.rotation}>
      <primitive object={scene.scene} />
    </group>
  );

  return isMobile ? content : (
    <Float speed={5.0} rotationIntensity={0.4} floatIntensity={0.8}>
      {content}
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
      height: { xs: "100px", lg: "150px" },
      position: "relative"
    }}>
      <ModelErrorBoundary modelName={model.name}>
        <Canvas
          style={{
            width: "100%",
            height: "100%"
          }}
          dpr={isMobile ? [1, 1.25] : [1, 1.75]}
          shadows={false}
          gl={{ antialias: false, powerPreference: 'low-power' }}
          frameloop={isMobile ? 'demand' : 'always'}
        >
          <ambientLight intensity={1} color={0xffffff} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} color={0xffffff} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={3} color={0xffffff} />
          <Environment preset="city" />

          <Suspense fallback={null}>
            <Model model={model} isMobile={isMobile} />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={false}
            enableDamping={true}
            dampingFactor={isMobile ? 0.03 : 0.05}
          />
        </Canvas>
      </ModelErrorBoundary>
    </Box>
  );
});




export default TechIconCardExperience;
