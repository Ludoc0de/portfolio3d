import Main from "./components/Main"
import Objects from "./components/Objects"
import { Canvas } from "@react-three/fiber"


export default function App(){

    return (
        <>
            <Main />
            <Canvas>
                <Objects />
            </Canvas>
        </>
    )
}