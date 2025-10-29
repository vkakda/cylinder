import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as Three from 'three'

const Scene = () => {
    
      let tex = useTexture('./image/3d.png');
      let cyl = useRef(null)

      useFrame((state,delta) =>{
        cyl.current.rotation.y += delta * 0.3;
      })


  return (
    <group rotation={[0,1.4,-0.15]}>
    <mesh ref={cyl} >
           <cylinderGeometry args={[1,1,1,80,30,true]} />
            <meshStandardMaterial map={tex} transparent side={Three.DoubleSide} />
          </mesh>
 </group> 
 )
}

export default Scene