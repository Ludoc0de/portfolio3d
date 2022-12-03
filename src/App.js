import Main from "./components/Main"
import Objects from "./components/Objects"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"


export default function App(){

    return (
        <>
            <Canvas>
                <ScrollControls pages={3}>
                    <Scroll>
                        <Objects />
                    </Scroll>
                    <Scroll html>
                        <Main />
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </>
    )
}