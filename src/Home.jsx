import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

      {/* ============ TESTIMONIAL ============ */}
      <section className="quote">
        <div className="mk" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none"><path d="M10 7c-3 0-5 2-5 5v5h5v-5H7c0-2 1-3 3-3V7Zm9 0c-3 0-5 2-5 5v5h5v-5h-3c0-2 1-3 3-3V7Z" fill="currentColor"/></svg>
        </div>
        <blockquote>“Simple things should be simple. Complex things should be possible.”</blockquote>
        <p className="by"><b>Alan Kay</b> &nbsp;·&nbsp; Xerox PARC</p>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="cta" id="eras">
        <svg className="blob" viewBox="0 0 200 200" aria-hidden="true"><path fill="currentColor" d="M44,-58C56,-49,63,-33,66,-17C69,-1,68,16,61,30C53,44,40,55,24,62C8,69,-11,71,-28,65C-45,59,-60,44,-67,26C-74,8,-73,-13,-64,-29C-55,-45,-39,-55,-23,-62C-7,-69,9,-72,24,-69C30,-67,38,-64,44,-58Z" transform="translate(100 100)"/></svg>
        <div className="inner">
          <div className="eyebrow"><b>The eras</b></div>
          <h2>Two hundred years of interfaces, kept in one place.</h2>
          <p>Ten eras, from punch cards to talking machines. Start at the beginning.</p>
          <div className="cta-act">
            <Link to="/era/before-screen" className="btn btn-accent">Start with the first era</Link>
            <a href="#timeline" className="btn btn-ghost">Back to the timeline</a>
          </div>
        </div>
      </section>
    </>
  )
}
