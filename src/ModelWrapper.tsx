//Write a default export function that returns a function that returns a component
//that renders the model and the text
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model } from './Model'; /* highlight-line */

export default function ModelWrapper() {

   const [rotate, setRotate] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
        setRotate(prevRotate => prevRotate + 0.01);
      }, 5);
      return () => clearInterval(interval);
    }, []);

   return (
      <Canvas
         camera={{ position: [-23, 0, 30], fov: 3 }}
         style={{
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '100vw',
            height: '100vh',
         }}
      >
         <ambientLight intensity={1} />
         <ambientLight intensity={0.1} />
         <directionalLight intensity={0.4} />
         <Suspense fallback={null}>
         <Model position={[0.025, -1.5, 0]} rotation={[0,rotate,0]} />
         </Suspense>
         <OrbitControls />
      </Canvas>
   );
}