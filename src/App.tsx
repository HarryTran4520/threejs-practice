import { Canvas } from "@react-three/fiber";
import { Text3D, Center, useTexture, OrbitControls } from "@react-three/drei";
import { SRGBColorSpace } from "three";

function Donut() {
  const matcap = useTexture("/textures/matcaps/7.png");
  matcap.colorSpace = SRGBColorSpace;

  return (
    <mesh
      position-x={(Math.random() - 0.5) * 10}
      position-y={(Math.random() - 0.5) * 10}
      position-z={(Math.random() - 0.5) * 10}
      rotation-x={Math.random() * Math.PI}
      rotation-y={Math.random() * Math.PI}
      scale={Math.random()}
    >
      <torusGeometry args={[0.3, 0.2, 32, 64]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
}

function MyText() {
  const matcap = useTexture("/textures/matcaps/7.png");
  matcap.colorSpace = SRGBColorSpace;

  return (
    <Center>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled={true}
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        <meshMatcapMaterial matcap={matcap} />
        Harry Tran
      </Text3D>
    </Center>
  );
}

function App() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <color attach="background" args={["#000000"]} />
        <OrbitControls enableDamping />
        <MyText />
        {new Array(100).fill(0).map(() => (
          <Donut />
        ))}
      </Canvas>
    </div>
  );
}

export default App;
