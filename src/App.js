import ScrollAnimation from "./components/ScrollAnimation"
import { Canvas } from "@react-three/fiber"

export default function App(){

    return (
        <>
            <Canvas>
                <ScrollAnimation />
            </Canvas>
        </>
    )
}