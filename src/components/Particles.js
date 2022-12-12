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
    //
    const pointArray= [...Array(particlesCount)]
    // pointArray.map(()=>{
    //     console.log('1')
    // })
    const colors = new Float32Array(particlesCount * 3)
    // console.log(colors[Math.floor(Math.random() * (colors.length - 1))])
    //color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
    //
    const { width, height } = useThree((state) => state.viewport)
    const particleColors = ['green', 'pink', 'orange', 'blue', 'red']

    for(let i = 0; i < particlesCount; i++){
        positions[i*3+0] = (Math.random() - 0.5)* width
        //3 = number of mesh from object
        positions[i*3+1] = 0.5 * height - Math.random()  * height * 3
        positions[i*3+2] = (Math.random() - 0.5)* width
        //
        colors[i*3]= particleColors[Math.floor(Math.random() * (particleColors.length - 1))]

    }

    return(
        // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} /> 
        //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />

        <Points limit={particlesCount}>
            <pointsMaterial size={0.05} vertexColors />
            {pointArray.map((value, index) => (
                <Point
                key={index}
                position={[
                    (Math.random() - 0.5)* width,
                    0.5 * height - Math.random()  * height * 3,
                    (Math.random() - 0.5)* width
                    // (0.5 - Math.random()) * width * 2,
                    // 0.5 * height + Math.random() ** 0.25 * height * -3,
                    // (0.5 - Math.random()) * 25,
                ]}
                // color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
                />
            ))}
        </Points>


        //work one
        // <points>
        //     <pointsMaterial size={0.02} sizeAttenuation={true} color={'red'}/>
        //     <bufferGeometry>
        //         <bufferAttribute 
        //             attach="attributes-position"
        //             count={particlesCount}
        //             itemSize={3}
        //             array={positions}
        //         />
        //     </bufferGeometry>
        // </points>
    )
}
