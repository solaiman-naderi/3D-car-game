import { MeshReflectorMaterial, useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { BufferAttribute } from "three";

const Ground = () => {
  const meshRef = useRef();
  const meshRef2 = useRef();

  const gridMap = useTexture("/textures/grid.png");
  const aoMap = useTexture("/textures/ground-ao.png");
  const alphMap = useTexture("/textures/alpha-map.png");

  useEffect(() => {
    gridMap.anisotropy = 16;
  }, [gridMap]);

  useEffect(() => {
    const uvs = meshRef.current.geometry.attributes.uv.array;
    meshRef.current.geometry.setAttribute("uv2", new BufferAttribute(uvs, 2));

    const uvs2 = meshRef.current.geometry.attributes.uv.array;
    meshRef2.current.geometry.setAttribute("uv2", new BufferAttribute(uvs2, 2));
  }, [meshRef]);

  return (
    <>
      <mesh
        ref={meshRef2}
        rotation-x={-Math.PI * 0.5}
        position={[-2.285, -0.01, -1.325]}
      >
        <planeGeometry args={[12, 12]} />
        <meshBasicMaterial
          opacity={0.325}
          alphaMap={gridMap}
          transparent={true}
          color={"#fff"}
        />
      </mesh>
      <mesh
        ref={meshRef}
        position={[-2.285, -0.015, -1.325]}
        rotation-x={-Math.PI * 0.5}
      >
        <circleGeometry args={[6.15, 50]} />
        <MeshReflectorMaterial
          aoMap={aoMap}
          alphaMap={alphMap}
          transparent={true}
          color={[0.5, 0.5, 0.5]}
          envMapIntensity={0.35}
          metalness={0.05}
          roughness={0.4}
          dithering={true}
          blur={[1024, 512]}
          mixBlur={3}
          mixStrength={30}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          reflectorOffset={0.02}
        />
      </mesh>
    </>
  );
};
export default Ground;
