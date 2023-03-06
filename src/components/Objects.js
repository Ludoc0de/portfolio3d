import { useThree } from "@react-three/fiber";
import texture from "../textures/3.jpg";
import { useTexture, useScroll } from "@react-three/drei";
import { useCallback, useRef, useState } from "react";
import useRefs from "react-use-refs";
import * as THREE from "three";
// import { NearestFilter } from 'three'
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export default function Objects() {
  //
  const viewport = useThree((state) => state.viewport);

  const {
    size: { width, height },
  } = useThree();
  let ratio = width / height;
  const scale = Math.min(1, ratio);

  let conePosition = -2;
  ratio < 1 ? (conePosition = -0.5) : conePosition;

  // let objectPosition = -2;
  // ratio < 1 ? (conePosition = -0.5) : conePosition;

  //
  //scroll set for animation
  let currentSection = 0;
  const scroll = useScroll();

  const directionalLight = useRef();
  const propsTexture = useTexture({
    map: texture,
  });

  const gradientTexture = propsTexture.map;
  gradientTexture.magFilter = THREE.NearestFilter;

  const objectsDistance = 6;
  const [torusRef, coneRef, toruskRef] = useRefs();
  const objectsRef = [torusRef, coneRef, toruskRef];

  //save in data objectLength
  const [objectLength, setObjectLength] = useState(objectsRef.length);

  useFrame((state, delta) => {
    for (const object of objectsRef) {
      object.current.rotation.y += delta * 0.1;
      object.current.rotation.x += delta * 0.15;
    }

    //animation on the object on scroll
    const section = Number(scroll.offset.toFixed(1));
    const newSection = Math.round(section * 2);
    if (newSection != currentSection) {
      currentSection = newSection;
      gsap.to(objectsRef[currentSection].current.rotation, {
        duration: 2,
        ease: "power2.inOut",
        x: "+=6",
        y: "+=3",
        z: "+=1.5",
      });
    }
  });

  return (
    <>
      <directionalLight
        ref={directionalLight}
        position={[1, 1, 0]}
        color="#ffffff"
        intensity={1}
      />
      <mesh
        scale={[scale, scale, scale]}
        ref={torusRef}
        position-x={0}
        rotation-y={Math.PI * 0.25}
        position-y={[-objectsDistance * -0.25]}
      >
        <torusGeometry args={[1, 0.4, 16, 60]} />
        <meshToonMaterial gradientMap={gradientTexture} />
      </mesh>

      <mesh
        scale={[scale, scale, scale]}
        ref={coneRef}
        position-x={conePosition}
        rotation-y={Math.PI * 0.25}
        position-y={[-objectsDistance * 0.95]}
      >
        <coneGeometry args={[1, 2, 32]} />
        <meshToonMaterial gradientMap={gradientTexture} />
      </mesh>

      <mesh
        scale={[scale, scale, scale]}
        ref={toruskRef}
        position-x={0}
        rotation-y={Math.PI * 0.25}
        position-y={[-objectsDistance * 2.35]}
      >
        <torusKnotGeometry args={[0.8, 0.35, 100, 16]} />
        <meshToonMaterial gradientMap={gradientTexture} />
      </mesh>
    </>
  );
}
