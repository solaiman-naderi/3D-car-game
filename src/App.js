import ThreeScene from "./components/ThreeScene";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas className="canvas">
      <ThreeScene />
    </Canvas>
  );
}

export default App;
