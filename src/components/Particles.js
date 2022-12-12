import { useRef } from "react"
import { Sparkles, Stars, Points, Point } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'

export default function Particles({data}){
    //replace 3 / data not working !
    //data = number of mesh from object
    console.log(data)

    const particlesCount = 1000
    const positions = new Float32Array(particlesCount * 3)
    const pointArray= [...Array(particlesCount)]
    //get screen viewport dimension
    const { width, height } = useThree((state) => state.viewport)
    const particlesColor = ['beige', 'pink', 'orange', 'yellow', 'red']

    // for(let i = 0; i < particlesCount; i++){
    //     positions[i*3+0] = (Math.random() - 0.5)* width
    //     //3 = number of mesh from object
    //     positions[i*3+1] = 0.5 * height - Math.random()  * height * 3
    //     positions[i*3+2] = (Math.random() - 0.5)* width
    //     //
    //     colors[i*3]= particlesColor[Math.floor(Math.random() * (particlesColor.length - 1))]

    // }

    const test = useRef()
    useFrame((state, delta) =>{
        test.current.rotation.y += delta*0.001
    })

    return(
        // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} /> 
        //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />

        <Points limit={particlesCount} ref={test}>
            <pointsMaterial size={0.02} vertexColors />
            {pointArray.map((value, index) => (
                <Point
                key={index}
                position={[
                    (Math.random() - 0.5)* width,
                    0.5 * height - Math.random()  * height * 3,
                    (Math.random() - 0.5)* width
                ]}
                color={particlesColor[Math.floor(Math.random() * (particlesColor.length - 1))]}
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
