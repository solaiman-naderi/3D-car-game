import { useGLTF, useTexture } from "@react-three/drei";
import { useEffect } from "react";

const Track = () => {
  const trackModel = useGLTF("/models/track.glb");
  const trackModelTexture = useTexture("/textures/track.png");

  useEffect(() => {
    trackModelTexture.anisotropy = 16;
  }, [trackModelTexture]);

  const modelToGeometry = trackModel.scene.children[0].geometry;

  return (
    <mesh>
      <primitive object={modelToGeometry} attach={"geometry"} />
      <meshBasicMaterial map={trackModelTexture} toneMapped={false} />
    </mesh>
  );
};
export default Track;
