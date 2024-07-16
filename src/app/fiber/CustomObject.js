import * as Three from 'three'
import { useEffect, useRef, useMemo } from 'react'
import { PivotControls } from '@react-three/drei';

export default function CustomObject() { 
  const geometryRef = useRef()
  const verticesCount = 10 * 3;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3)
  
    for (let i = 0; i < verticesCount; i++) {
      positions[i] = (Math.random() - 0.5) * 3
    }

    return positions
  })
  
  return (
    <PivotControls 
      anchor={ [0, 0, 0] } 
      depthTest={ false } 
      lineWidth={2} 
      axisColors={ ['#ccc', '#666', '#999' ] } 
      scale={ 120 } 
      fixed={ true }
      >
      <mesh>
        <bufferGeometry>
          <bufferAttribute 
            attach="attributes-position"
            count={ verticesCount}
            itemSize={ 3 }
            array={ positions }
          />
        </bufferGeometry>
        <meshStandardMaterial color="yellow" side={ Three.DoubleSide } />
      </mesh>
    </PivotControls>
  )
}