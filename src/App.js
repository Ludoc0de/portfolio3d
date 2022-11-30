import Objects from "./components/Objects"
import Main from "./components/Main"
import { Canvas } from "@react-three/fiber"
import { Html } from "@react-three/drei"

export default function App(){

    return (
        <Canvas 
            camera={{ 
                fov: 70, 
                near: 0.1, 
                far: 200,
                position: [ 0, 0, 120 ]
            }}
        >
            <Main />
            {/* <Objects /> */}
        </Canvas>
    )
}