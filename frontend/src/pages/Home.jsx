/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../../public/Scene";
import bgHome from "../assets/3D/bghome.jpg"

const Home = () => {
  return (
    <div
      id='home' 
      className='h-screen flex items-center justify-center'
      style={{ 
        backgroundImage: `url(${bgHome})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        zIndex: 100
      }}
    >
      <Canvas className='h-screen'>
        <ambientLight intensity={1} />
        <OrbitControls enableZoom={false} autoRotate={true}/>
        <Suspense fallback={null}>
          <Scene 
            scale={[2.5, 2.5, 2.5]}
            position={[0, -0.4, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Home;