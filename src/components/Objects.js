// import { Canvas } from "@react-three/fiber"

import { useRef } from "react"

export default function Objects(){

    const directionalLight = useRef()

    return (
        <>
            <directionalLight 
                ref={ directionalLight } 
                position={[1, 1, 0]} 
                color="#ffffff" 
                intensity={ 1 } 
            />
            <mesh position-x={1} scale={1}>
                <boxGeometry />
                <meshToonMaterial/>
            </mesh>
            <mesh>
                <sphereGeometry />
                <meshBasicMaterial />
            </mesh>
        </>
    )
}