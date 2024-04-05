import ThreeScene from "./components/ThreeScene";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
function App() {
  return (
    <Canvas className="canvas">
      <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
        <ThreeScene />
      </Physics>
    </Canvas>
  );
}

export default App;
