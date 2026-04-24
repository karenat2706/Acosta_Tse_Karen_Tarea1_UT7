import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Modelo3D from "../Modelo3D";

function ARKaren() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* Luces para iluminar el modelo */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[0, 2, 0]} intensity={0.5} />
                
                {/* mi modelo 3D del perro */}
                <Modelo3D />
                
                {/* Controles para mover la el modelo 3D con el ratón */}
                <OrbitControls 
                    enableZoom={true}      // Acercar/alejar
                    enablePan={true}       // Mover cámara
                    enableRotate={true}    // Rotar 360°
                />
                
                {/* Un fondo sencillo y atractivo */}
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}

export default ARKaren;