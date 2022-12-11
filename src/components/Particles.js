import { useState, useEffect, Suspense } from "react"
import { Sparkles, Stars, Shadow, ContactShadows, Points, Point, PointMaterial, pointsMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { SphereGeometry, bufferAttribute, bufferGeometry } from 'three'
import * as THREE from 'three'

export default function Particles({data}){
    //replace 3 / data not working !
    //data = number of mesh from object
    console.log(data)

    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    const { width, height } = useThree((state) => state.viewport)
  
    for(let i = 0; i < particlesCount; i++){
        positions[i*3+0] = (Math.random() - 0.5)* width
        //3 = number of mesh from object
        positions[i*3+1] = 0.5 * height - Math.random()  * height * 3
        positions[i*3+2] = (Math.random() - 0.5)* width

    }

    return(
        // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} /> 
        //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />
       
        <points>
            <bufferGeometry>
                <bufferAttribute 
                    attach="attributes-position"
                    count={particlesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial size={0.02} sizeAttenuation={true} color={"red"} />
        </points>
    )
}
