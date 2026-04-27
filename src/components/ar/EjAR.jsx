import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { OrbitControls } from "@react-three/drei";

function EjAR() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <ARButton />
            <Canvas style={{ height: '100%', width: '100%' }}>
                <XR>
                    {/* Luces para que se vea bien el modelo 3D */}
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 5, 5]} intensity={1.2} />
                    <pointLight position={[0, 2, 0]} intensity={0.5} />
                    
                    {/* donut lila */}
                    <mesh position={[0, 1, -1.5]} rotation={[0.5, 0.5, 0]}>
                        <torusGeometry args={[0.8, 0.2, 64, 100]} />
                        <meshStandardMaterial 
                            color="#C8A2C8"
                            metalness={0.3} 
                            roughness={0.2}
                        />
                    </mesh>
                    
                    {/* Controles para mover el donut*/}
                    <OrbitControls 
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                        autoRotate={true}      // Rota automáticamente
                        autoRotateSpeed={1.5}  // Velocidad de rotación
                    />
                </XR>
            </Canvas>
        </div>
    );
}

export default EjAR;