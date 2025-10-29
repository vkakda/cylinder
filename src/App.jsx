import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import Scene from "./Scene";
import Loco from "./Loco";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen relative bg-black overflow-hidden">
        <Canvas
          flat
          dpr={[1, 2]} // HD sharpness
          camera={{ fov: 30, position: [0, 0, 1] }} // Move camera a bit back
        >
          {/* Orbit controls */}
          <OrbitControls enableZoom={false} enableDamping dampingFactor={0.05} />

          {/* Lights */}
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={0.2} />

          {/* 3D Model - adjusted scale & position */}
          <group position={[0, 0.025, 0]} scale={[.25, .25, .25]}>
            <Scene />
          </group>

          {/* Bloom & Tone Mapping */}
          <EffectComposer>
            <Bloom
              // mipmapBlur
              intensity={35.0}
              luminanceThreshold={0.35}
              luminanceSmoothing={0.25}
            />
            <ToneMapping adaptive />
          </EffectComposer>
        </Canvas>

        {/* Moving Text */}
        <div className="">
          <Loco />
          </div>
        
      </div>
    </>
  );
};

export default App;
