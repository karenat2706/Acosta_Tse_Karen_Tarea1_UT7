import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";
import Modelo3D from "../Modelo3D";

function ARKaren() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <ARButton />
            <Canvas style={{ height: '100%', width: '100%' }}>
                <XR>
                    {/* Luces para iluminar el modelo */}
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 5, 5]} intensity={1.2} />
                    <pointLight position={[0, 2, 0]} intensity={0.5} />
                    
                    {/* mi modelo 3D q es el perro*/}
                    <Modelo3D />
                    
                    {/* Controles para mover el modelo con el ratón */}
                    <OrbitControls 
                        enableZoom={true}      // Acercar/alejar
                        enablePan={true}       // Mover cámara
                        enableRotate={true}    // Rotar 360°
                    />
                </XR>
            </Canvas>
        </div>
    );
}

export default ARKaren;