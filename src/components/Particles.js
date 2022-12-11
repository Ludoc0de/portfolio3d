import { useState, useEffect, Suspense } from "react"
import { Sparkles, Stars, Shadow, ContactShadows, Points, Point, PointMaterial, pointsMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { SphereGeometry, bufferAttribute, bufferGeometry } from 'three'
import * as THREE from 'three'

export default function Particles({test}){
    //
    const [demo, setDemo]=useState()
    console.log(test)
    // useEffect(()=>{
    //     if(test > 0){
    //         setDemo(test)
    //     }
    // }, [test])
    // console.log(demo)
    
    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    const { width, height } = useThree((state) => state.viewport)
  
    for(let i = 0; i < particlesCount; i++){
        positions[i*3+0] = (Math.random() - 0.5)* width
        //data = number of mesh from object
        positions[i*3+1] = 0.5 * height - Math.random()  * height * test
        console.log(test)
        positions[i*3+2] = (Math.random() - 0.5)* width

    }
    // const { width, height } = useThree((state) => state.viewport)
    // console.log( 
    //     width,
    //     height,
    //     Math.random() * width,
    //     Math.random() * height,
    // )

    return(
        // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} /> 
        //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />
       
        // <Points
        //     limit={particlesCount} 
        //     // range={10}
        // >
        //     <pointsMaterial size={0.04} vertexColors />
            
        //     {Array.from({ length: particlesCount }).map((_, i) => (
        //         <Point
        //             key={i}
        //             position={[
        //                 Math.random() * width,
        //                 Math.random() * height,
        //                 Math.random()
        //                 // (0.5 - Math.random()) * width * 2,
        //                 // 0.5 * height + Math.random() ** 0.25 * height * -3,
        //                 // (0.5 - Math.random()) * 25,
        //             ]}
        //             color={"red"}
        //         />
        //     ))}

        // </Points>

        //exo
        <points>
            <bufferGeometry>
                <bufferAttribute 
                    attach="attributes-position"
                    count={particlesCount}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
          {/* <sphereGeometry args={[1, 32, 32]} /> */}
          {/* <meshBasicMaterial color="red"/> */}
          <pointsMaterial size={0.02} sizeAttenuation={true} color={"red"} />
        </points>
    )
}
