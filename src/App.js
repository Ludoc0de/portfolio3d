import ScrollAnimation from "./components/ScrollAnimation"
import { Canvas } from "@react-three/fiber"

export default function App(){
    
    const demo = () => {
        console.log('ok')
        console.log(window.scrollY)
    };

    return (
        <>
            <Canvas onClick={demo}>
                <ScrollAnimation />
            </Canvas>
        </>
    )
}