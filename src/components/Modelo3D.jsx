import { useLoader } from '@react-three/fiber';
// Importamos GLTFLoader que es el cargador para archivos .glb y .gltf
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Modelo3D() {
  //cargamos el modelo 3D
  const gltf = useLoader(GLTFLoader, '/models/dog.glb');
  //componente que renderiza el modelo cargado
  return <primitive object={gltf.scene} scale={0.5} position={[0, 0, -3]} />;
}

export default Modelo3D;