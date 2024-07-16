"use client"

import styles from "./scene.module.css"
import { Suspense } from "react"
import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"

export default function Scene() {
  return (
    <div className={styles.threecanvaswrapper}>
      <Canvas>
        <Suspense fallback={null}>
          <directionalLight position={[-20, 10, -10]} intensity={2} />
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}