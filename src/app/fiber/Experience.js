import { use, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import CustomObject from './CustomObject'
import { useHelper, MeshReflectorMaterial, Float, Text, Html, TransformControls, OrbitControls } from '@react-three/drei'
import styles from './experience.module.css'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import * as Three from 'three'

export default function Experience() 
{
  const { perfVisible } = useControls({
    perfVisible: true 
  })

  const { position, visible } = useControls({
    position: {
      value: { x: 0, y: 0, z: 0},
      step: 0.01
    },
    visible: {
      value: true,
      label: 'Visible'
    }
  })
  console.log(position)

  const sphereRef = useRef()
  const sphereRefGrn = useRef()
  const planeRef = useRef()
  const directionalLightRef = useRef()
  useHelper(directionalLightRef, Three.DirectionalLightHelper, 1.5)

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta
  })

  return <>
    { perfVisible ? <Perf position="top-left" /> : null }

    <OrbitControls makeDefault enableDamping={ true } />
    <directionalLight position={ [1, 4, 3] } intensity={8.5} ref={ directionalLightRef } castShadow />
    <ambientLight intensity={ 1.5 } />

    <color args={ ['lightblue'] } attach="background" />

    <group ref={ sphereRef } position={ [position.x, position.y, position.z]} visible={visible}>

      <mesh castShadow rotation-y={ Math.PI * 0.33 } position={ [0, 0, 0] } scale={ 1 }>
        <Html 
          position={ [0.2, 0, 1] }
          wrapperClass={ styles.label }
          center
          distanceFactor={ 10 }
          // occlude={ sphereRefGrn }
        >
          Hello, world!
        </Html>
        <sphereGeometry args={ [1.5, 32, 32] } />
        {/* <meshBasicMaterial args={ [{ color: 'blue', wireframe: true }] } /> */}
        <meshStandardMaterial args={ [{ color: 'blue', wireframe: false }] } />
      </mesh>

{/* Green Sphere */}
      <mesh ref={ sphereRefGrn } rotation-y={ Math.PI * 0.33 } position={ [0, 0, 0] } scale={ 1 }>
        <sphereGeometry args={ [1.5, 32, 32] } />
        <meshBasicMaterial args={ [{ color: 'green', wireframe: true }] } />
      </mesh>

    </group>


{/* Floor */}
      <mesh receiveShadow ref={ planeRef } position-y={-1} rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        {/* <meshBasicMaterial args={ [{ color: 'red' }] } /> */}
        {/* <meshStandardMaterial args={ [{ color: 'red' }] } /> */}
        <MeshReflectorMaterial 
          resolution={ 512 }
          blur={ [1000, 1000] }
          mixBlur={ 0.5 }
          mirror={ 0.5 } 
          color='red'
        />
      </mesh>
    <TransformControls object={ planeRef } mode='translate' />

    <CustomObject />
    <Float speed={4}>
      <Text
        font='./IBMPlexSans-Regular.ttf'
        fontSize={ 0.5 }
        color='white'
        position-y={ 2 }
      >
        Journal Square
        <meshNormalMaterial />
        </Text>
    </Float>
  </>
}