import { OrbitControls } from '@react-three/drei'

const Scene = () => {
    return (
        <>
            <OrbitControls />
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="yellow" />
            </mesh>
            <mesh position-z={-10}>
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    )
}

export default Scene
