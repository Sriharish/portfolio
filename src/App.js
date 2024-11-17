import { Canvas } from '@react-three/fiber'
import { useErrorBoundary } from 'use-error-boundary'

import Scene from './components/Scene'

const App = () => {
    const { ErrorBoundary, didCatch, error } = useErrorBoundary()

    return didCatch ? (
        <div>{error.message}</div>
    ) : (
        <ErrorBoundary>
            <Canvas onCreated={createCanvasHandler}>
                <Scene />
            </Canvas>
        </ErrorBoundary>
    )
}

export default Scene
