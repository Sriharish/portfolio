import { extend } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import * as THREE from 'three'

import App from './App'
import './index.css'

// register THREE namespace as native JSX elements
extend(THREE)

const root = ReactDOM.createRoot(document.getElementById('root'))

// create geometry, material, mesh, camera, camera position, renderer, render
root.render(<App />)
