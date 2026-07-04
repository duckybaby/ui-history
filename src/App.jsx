import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import Home from './Home.jsx'
import EraPage from './EraPage.jsx'

function Footer() {
  return (
    <footer className="foot">
      <div className="foot-top">
        <div className="foot-l">
          <h2 className="foot-talk">Let’s talk<span className="foot-dot">.</span></h2>
          <div className="foot-id">
            <p className="foot-name">Ravi Shankar</p>
            <p className="foot-meta">Product Design Lead<br />Bangalore, IN</p>
          </div>
        </div>
        <div className="foot-r">
          <p className="foot-eyebrow">Get in touch: to chat, or to flag anything here that’s wrong.</p>
          <ul className="foot-links">
            <li><a href="mailto:hello@shankar.design">hello@shankar.design</a></li>
            <li><a href="https://www.linkedin.com/in/shankar-design/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-bot">
        <span>© 2026 Ravi Shankar. All rights reserved.</span>
        <span className="foot-built">Built with React, Vite, GSAP, Lenis, Firebase, and Claude Code.</span>
      </div>
    </footer>
  )
}

// router doesn't reset scroll between routes; do it here (through Lenis)
function ScrollToTop() {
  const { pathname } = useLocation()
  const lenis = useLenis()
  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, lenis])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/era/:id" element={<EraPage />} />
      </Routes>
      <Footer />
    </>
  )
}
