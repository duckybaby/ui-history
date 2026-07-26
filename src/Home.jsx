import { useEffect, useState } from 'react'
import {
  FaApple, FaWindows, FaMobileScreenButton, FaDesktop, FaTabletScreenButton, FaLaptop,
  FaHeart, FaStar, FaThumbsUp, FaBookmark, FaFloppyDisk, FaPlus, FaHandsClapping,
} from 'react-icons/fa6'
import Timeline from './Timeline.jsx'
import Manifesto from './Manifesto.jsx'
import logo from './assets/logo.svg'
import illustration from './assets/illustration.svg'

// blob 1 (purple) — interface/device icons; blob 2 (pink) — "digital love" icons
const DEVICE_ICONS = [FaApple, FaWindows, FaMobileScreenButton, FaDesktop, FaTabletScreenButton, FaLaptop]
const LOVE_ICONS = [FaHeart, FaStar, FaThumbsUp, FaBookmark, FaFloppyDisk, FaPlus, FaHandsClapping]
// marquee terms — edit freely
const MARQUEE = ['Skeuomorphism', 'Web 2.0', 'Aqua', 'Flat', 'Material', 'Minimal', 'Glass UI', 'Neumorphism', 'Brutalism', 'Bento']

// solid blob icon that swaps instantly (no fade) on an interval
function CyclingIcon({ icons, interval }) {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((n) => (n + 1) % icons.length), interval)
    return () => clearInterval(id)
  }, [icons, interval])
  const Icon = icons[i]
  return <Icon />
}

export default function Home() {
  // reveal-on-scroll for .rv elements
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.2 })
    document.querySelectorAll('.rv').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="hero-top">
          <div className="hero-logo" id="heroLogo"><img src={logo} alt="" className="brand-mark" />The History of UI</div>

          <h1>
            A love letter<br className="h1-br" />
            to the{' '}
            <span className="hero-chip" aria-hidden="true"><span className="blob-ico"><CyclingIcon icons={DEVICE_ICONS} interval={875} /></span></span>{' '}
            interfaces we grew up with,<br className="h1-br" />
            remembered &{' '}
            <span className="hero-slide" aria-hidden="true"><span className="blob-ico"><CyclingIcon icons={LOVE_ICONS} interval={1000} /></span></span>{' '}
            loved (or hated?)
          </h1>
        </div>

        <div className="marquee-wrap">
          <img className="marquee-figure" src={illustration} alt="" />
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((t, i) => <span key={i}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ============ MANIFESTO (scroll-fill intro) ============ */}
      <Manifesto />

      {/* ============ TIMELINE ============ */}
      <Timeline />

      {/* ============ SCREENSAVER (the resolution box) ============
          Parked: the era marks are ~80% and need a fresh-eyes polish pass.
          Re-enable with `import Saver from './Saver.jsx'` + <Saver /> here. */}
    </>
  )
}
