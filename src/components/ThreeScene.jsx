import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Track from "./Track";
import Ground from "./Ground";
import Car from "./Car";

const ThreeScene = () => {
  return (
    <Suspense>
      <Environment background="both" files={["/textures/envmap.hdr"]} />
      <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} />
      <OrbitControls target={[-2.64, -0.71, 0.03]} />

      <Track />
      <Ground />
      <Car />
    </Suspense>
  );
};
export default ThreeScene;
