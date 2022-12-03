// import { Canvas } from "@react-three/fiber"
import texture from '../textures/3.jpg'
import { useTexture } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'
import { NearestFilter } from 'three'

export default function Objects(){

    const directionalLight = useRef()
    const props = useTexture({ 
        map: texture
    })
     
    const gradientTexture = props.map
    gradientTexture.magFilter = THREE.NearestFilter
    
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
                <meshToonMaterial gradientMap={gradientTexture}  />
            </mesh>
            
            <mesh>
                <coneGeometry args={[1, 2, 32]} />
                <meshToonMaterial gradientMap={gradientTexture} />
            </mesh>

            <mesh>
                <torusKnotGeometry args={[0.8, 0.35, 100, 16]}/>
                <meshToonMaterial gradientMap={gradientTexture}  />
                {/* <texture attach='map' image={props.map} magFilter={THREE.NearestFilter} /> */}
            </mesh>

        </>
    )
}