import { Sparkles, Stars, Shadow, ContactShadows, Points, Point } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export default function Particles(){
    const particlesCount = 200
    const { width, height } = useThree((state) => state.viewport)
    console.log( 
        width,
        height
    )

    return(
        // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} /> 
        //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />
       
        <Points
            limit={particlesCount} 
            // range={10}
        >
            <pointsMaterial size={0.05} vertexColors />
            
            {/* <Point  
                position={[
                    0,
                    1,
                    3
                ]}
                color="red" 
            
            /> */}

            {Array.from({ length: particlesCount }).map((_, i) => (
                <Point
                    key={i}
                    position={[
                        Math.random(),
                        Math.random(),
                        Math.random()
                        // (0.5 - Math.random()) * width * 2,
                        // 0.5 * height + Math.random() ** 0.25 * height * -3,
                        // (0.5 - Math.random()) * 25,
                    ]}
                    color={"red"}
                />
            ))}

            {/* <Point  
                position={[0,1,1]}
            
                color="yellow" 
            
            /> */}

        </Points>
    )
}
