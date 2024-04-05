import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useWheels } from "./useWheel";
import { WheelDebug } from "./wheelDebug";

const Car = () => {
  const carModel = useGLTF("/models/car.glb");

  const _position = [-1.5, 0.5, 3];
  const _width = 0.15;
  const _height = 0.07;
  const _front = 0.15;
  const _wheelRadius = 0.05;

  const chassisBodyArgs = [_width, _height, _front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      mass: 150,
      position: _position,
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(_width, _height, _front, _wheelRadius);

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  );

  // const scale = [0.0012, 0.0012, 0.0012];

  useEffect(() => {
    carModel.scene.children[0].position.set(-365, -1, -67);
  }, [carModel]);

  return (
    <group ref={vehicle} name="vehicle">
      {/* <primitive scale={scale} rotation-y={Math.PI} object={carModel.scene} /> */}
      <mesh ref={chassisBody}>
        <boxGeometry args={chassisBodyArgs} />
        <meshStandardMaterial transparent={true} opacity={0.3} />
      </mesh>

      <WheelDebug wheelRef={wheels[0]} radius={_wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={_wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={_wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={_wheelRadius} />
    </group>
  );
};

export default Car;
