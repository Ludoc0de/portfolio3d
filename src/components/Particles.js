import { Sparkles, Stars, Shadow, ContactShadows, Points, Point, PointMaterial, pointsMaterial } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { SphereGeometry } from 'three'
import * as THREE from 'three'

export default function Particles(){
    const particlesCount = 10 * 4
    const positions = new Float32Array(particlesCount * 3)

    for(let i = 0; i < particlesCount * 3; i++){
        positions[i] = (Math.random() - 0.5) * 10
    }
    console.log(positions)
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
          <sphereGeometry args={[1, 32, 32]} />
          <pointsMaterial size={.02} sizeAttenuation={true} color="red" />
        </points>
    )
}
