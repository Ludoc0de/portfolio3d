import Main from "./components/Main"
import Objects from "./components/Objects"
import { Canvas, useFrame } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"
import * as THREE from 'three'

function ScrollAnimation(){
    useFrame(({mouse, camera}) => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    })

    return (
        <ScrollControls pages={3}>
            <Scroll>
                <Objects />
            </Scroll>
            <Scroll html>
                <Main />
            </Scroll>
        </ScrollControls>
    )
}

export default function App(){

    return (
        <>
            <Canvas>
                <ScrollAnimation />
            </Canvas>
        </>
    )
}