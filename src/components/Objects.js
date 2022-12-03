// import { Canvas } from "@react-three/fiber"
import texture from '../textures/3.jpg'
import { useTexture } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { NearestFilter } from 'three'
import { useFrame } from '@react-three/fiber'

export default function Objects(){

    const directionalLight = useRef()
    const props = useTexture({ 
        map: texture
    })
     
    const gradientTexture = props.map
    gradientTexture.magFilter = THREE.NearestFilter
    
    const objectsDistance = 4

    const torusRef=useRef()
    const coneRef=useRef()
    const toruskRef=useRef()

    const objectsRef = [torusRef, coneRef, toruskRef]

    useFrame((state, delta) =>{
        for(const object of objectsRef){
            object.current.rotation.y += delta*0.1
            object.current.rotation.x += delta*0.15
        }
    })

    let scrollY = window.scrollY

    useFrame((mouse, camera) =>{
        // Animate camera
        camera.position.y = scrollY
    })

    window.addEventListener('scroll', () =>
    {
        scrollY = window.scrollY

    })



    return (
        <>
            <directionalLight 
                ref={ directionalLight } 
                position={[1, 1, 0]} 
                color="#ffffff" 
                intensity={ 1 } 
            />

            <mesh ref={torusRef} rotation-y={ Math.PI * 0.25 } position-y={[- objectsDistance * 0]}>
                <torusGeometry args={[1, 0.4, 16, 60]} />
                <meshToonMaterial gradientMap={gradientTexture}  />
            </mesh>
            
            <mesh ref={coneRef} rotation-y={ Math.PI * 0.25 } position-y={[- objectsDistance * 1]}>
                <coneGeometry args={[1, 2, 32]} />
                <meshToonMaterial gradientMap={gradientTexture} />
            </mesh>

            <mesh ref={toruskRef} rotation-y={ Math.PI * 0.25 } position-y={[- objectsDistance * 2]}>
                <torusKnotGeometry args={[0.8, 0.35, 100, 16]}/>
                <meshToonMaterial gradientMap={gradientTexture}  />
            </mesh>

        </>
    )
}