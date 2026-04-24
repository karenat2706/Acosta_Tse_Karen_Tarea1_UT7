import { Canvas } from "@react-three/fiber"; 
// Importamos OrbitControls para mover la cámara con el ratón y Environment para el fondo
import { OrbitControls, Environment } from "@react-three/drei"; 

function EjAR(){
    return(
        // Contenedor para el cono que ocupe toda la pantalla
        <div style={{ height: '100vh', width: '100%' }}>
             {/*el lienzo donde se dibuja todo el 3D */}
            <Canvas camera={{ position: [0, 0, 5] }}>
                {/* Luces para iluminar el cono */}
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <pointLight position={[0, 2, 0]} intensity={0.5} />
                {/* Cono lila */}
                <mesh position={[0, 0, 0]}>
                    <coneGeometry args={[1, 2, 32]} />
                    <meshStandardMaterial color="lilac" />
                </mesh>
                {/* Controles para mover la cámara con el ratón */}
                <OrbitControls 
                    enableZoom={true}      // Acercar/alejar
                    enablePan={true}       // Mover cámara
                    enableRotate={true}    // Rotar 360° 
                />
                
                {/* Fondo ambiental */}
                <Environment preset="city" />
            </Canvas>
        </div>
    )
}
export default EjAR;