import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

const Car = () => {
  const carModel = useGLTF("/models/car.glb");

  const scale = [0.0012, 0.0012, 0.0012];
  useEffect(() => {
    carModel.scene.children[0].position.set(-365, -1, -67);
  }, [carModel]);
  return (
    <primitive scale={scale} rotation-y={Math.PI} object={carModel.scene} />
  );
};

export default Car;
