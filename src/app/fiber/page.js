"use client"
import { Canvas } from "@react-three/fiber"
import styles from "./page.module.css"
import Experience from "./Experience";

export default function Fiber() {

  return (
    <div id={styles.canvasWrapper}>
      <Canvas
        shadows
        camera={{
          fov: 120,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5]
        }}
      >
        <Experience />
      </Canvas>
    </div>
  );
}
