import Main from "./Main";
import Objects from "./Objects";
import Particles from "./Particles";
import { useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function ScrollAnimation() {
  //get particle object.length
  //const [childData, setChildData] = useState()

  //define pages
  const [pages, setPages] = useState(5);

  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.5,
      0.03
    );
    // camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(
      camera.rotation.y,
      mouse.x * -Math.PI * 0.025,
      0.005
    );
  });

  return (
    <ScrollControls pages={pages}>
      <Scroll>
        <Objects />
        <Particles pages={pages} />
      </Scroll>
      <Scroll html>
        <Main />
      </Scroll>
    </ScrollControls>
  );
}
