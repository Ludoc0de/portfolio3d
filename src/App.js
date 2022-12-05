import Main from "./components/Main"
import Objects from "./components/Objects"
import { Canvas, useFrame } from "@react-three/fiber"
import { ScrollControls, Scroll } from "@react-three/drei"
import * as THREE from 'three'

function ScrollAnimation(){
    useFrame(({mouse, camera}) => {
        camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
        camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.5, 0.03)
        //camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
        //camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
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