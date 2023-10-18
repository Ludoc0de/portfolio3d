import { useRef } from "react";
import { Sparkles, Stars, Points, Point, Circle } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";

export default function Particles() {
  //replace 3 / data not working !
  //data = number of mesh from object

  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  const pointArray = [...Array(particlesCount)];
  //get screen viewport dimension
  const { width, height } = useThree((state) => state.viewport);
  const particlesColor = ["beige", "pink", "orange", "yellow", "red"];
  const particles = useRef();
  useFrame((state, delta) => {
    particles.current.rotation.y += delta * 0.002;
  });

  return (
    // <Stars  radius={10} depth={50} count={2000} factor={5} saturation={0} fade speed={2} />
    //<Sparkles color={'yellow'} count={1000} scale={1} size={1} speed={0.4} />

    //square particles
    // <Points limit={particlesCount} ref={particles}>
    //   <pointsMaterial size={0.02} vertexColors />
    //   {pointArray.map((value, index) => (
    //     <Point
    //       key={index}
    //       position={[
    //         (Math.random() - 0.5) * width,
    //         0.5 * height - Math.random() * height * 4,
    //         (Math.random() - 0.5) * width,
    //       ]}
    //       color={
    //         particlesColor[
    //           Math.floor(Math.random() * (particlesColor.length - 1))
    //         ]
    //       }
    //     />
    //   ))}
    // </Points>

    //circle particles
    <group ref={particles}>
      {pointArray.map((value, index) => (
        <Circle
          key={index}
          args={[0.02, 32]}
          position={[
            (Math.random() - 0.5) * width,
            0.5 * height - Math.random() * height * 4,
            (Math.random() - 0.5) * width,
          ]}
        >
          <meshBasicMaterial
            color={
              particlesColor[Math.floor(Math.random() * particlesColor.length)]
            }
          />
        </Circle>
      ))}
    </group>
  );
}
