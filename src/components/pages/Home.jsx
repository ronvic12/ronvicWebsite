import {Suspense,React} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader'
import WoodlandShire from '../models/WoodlandShire'

const Home = () => {
  return (
    <section className ="w-full h-screen relative">
        <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{near:0.1,far:1000}}
        >
            <Suspense fallback ={<Loader />}>
            <directionalLight/>
            <ambientLight/>
            <pointLight/>
            <spotLight/>
            <hemisphereLight/>
            <WoodlandShire/>
            </Suspense>

        </Canvas>

    </section>
  )
}

export default Home