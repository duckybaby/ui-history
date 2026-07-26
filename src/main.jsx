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
      {/* autoRaf off: App drives Lenis from gsap.ticker so scroll and scrubbed
          tweens update in the same frame, in order — two free-running rAF loops
          made scroll-linked elements land a frame late at random (= jitter) */}
      <ReactLenis root options={{ anchors: true, smoothWheel: !reduce, autoRaf: false }}>
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
)
