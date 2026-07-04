import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import App from './App.jsx'
import 'lenis/dist/lenis.css'
import './index.css'

// disable smooth wheel for users who prefer reduced motion
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis root options={{ anchors: true, smoothWheel: !reduce }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
)
