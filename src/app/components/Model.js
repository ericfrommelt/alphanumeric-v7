import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Sculpture-001.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[-3.129, -0.763, 0]}>
        <group position={[3.129, 0.763, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SS.geometry}
            material={nodes.SS.material}
            rotation={[-Math.PI, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.SS_1.geometry}
            material={nodes.SS_1.material}
          />
        </group>
        <group position={[-1.371, -0.313, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HighlightCylinder2.geometry}
            material={nodes.HighlightCylinder2.material}
            position={[0, 1.217, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HighlightCylinder1.geometry}
            material={nodes.HighlightCylinder1.material}
            position={[0, 1.156, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.HighlightCylinder.geometry}
            material={nodes.HighlightCylinder.material}
            position={[0, 1.076, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.BaseCylinder.geometry}
            material={nodes.BaseCylinder.material}
            position={[0, -2.474, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={nodes.Cylinder.material}
            position={[0, -0.974, 0]}
          />
        </group>
        <group position={[-1.848, -3.18, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder1.geometry}
            material={nodes.Cylinder1.material}
            position={[0.332, -2.147, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder_1.geometry}
            material={nodes.Cylinder_1.material}
            position={[0.341, 2.253, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Subdivision_Surface.geometry}
            material={nodes.Subdivision_Surface.material}
            position={[-0.673, -0.107, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={nodes.Cylinder_2.material}
          position={[0.089, 2.73, 0]}
          rotation={[0, 0, -0.698]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-0.905, -4.827, 0]}
        />
      </group>
      <PerspectiveCamera
        makeDefault={false}
        far={10000000000}
        near={0.01}
        fov={14.426}
        position={[35.901, 23.218, 37.806]}
        rotation={[-0.586, 0.743, 0.422]}
      />
    </group>
  )
}

useGLTF.preload('/Sculpture-001.gltf')

