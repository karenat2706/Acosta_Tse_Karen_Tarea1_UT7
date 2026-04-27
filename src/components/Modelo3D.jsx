import { useLoader } from '@react-three/fiber';
// Importamos GLTFLoader que es el cargador para archivos .glb y .gltf
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function Modelo3D() {
  //cargamos el modelo 3D
  const gltf = useLoader(GLTFLoader, '/models/dog.glb');
  //componente que renderiza el modelo cargado
  return (
    <primitive 
      object={gltf.scene} 
      scale={0.6}                   // hacemos que tenga una escala mayor para visualizarlo mejor
      position={[0, 1.2, -1.5]}     //con esto centramos el modelo para que se visualice mejor
      rotation={[0, Math.PI, 0]}    // para que mire de frente el perro
    />
  );
}

export default Modelo3D;