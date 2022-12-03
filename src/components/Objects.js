// import { Canvas } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

export default function Objects(){

    const directionalLight = useRef()
    
    const props = useTexture({ 
        map: '/static/textures/3.jpg',
        // displacementMap: '/static/textures/3.jpg',
        // normalMap: '/static/textures/3.jpg',
        // roughnessMap: '/static/textures/3.jpg',
        // aoMap: '/static/textures/3.jpg',
    })
     
    // console.log(props)
    
    return (
        <>
            <directionalLight 
                ref={ directionalLight } 
                position={[1, 1, 0]} 
                color="#ffffff" 
                intensity={ 1 } 
            />
            <mesh>
                <torusGeometry args={[1, 0.4, 16, 60]} />
                <meshToonMaterial />
            </mesh>
            
            <mesh>
                <coneGeometry args={[1, 2, 32]} />
                <meshToonMaterial />
            </mesh>

            <mesh>
                <torusKnotGeometry args={[0.8, 0.35, 100, 16]}/>
                <meshToonMaterial />
                {/* <texture attach='map' image={props.map} magFilter={THREE.NearestFilter} /> */}
            </mesh>

        </>
    )
}