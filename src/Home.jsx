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

// The receipts, on the front page. Every number here is real and checkable
// against the repo: keep them honest if the content changes.
const RECEIPTS = [
  { n: '75', l: 'corrections after fact-checking' },
  { n: '57', l: 'sources, each one opened and read' },
  { n: '50', l: 'images, each credited and licence-checked' },
  { n: '1', l: 'citation that pointed at nothing' },
]

function Method() {
  return (
    <section className="method" id="method">
      <div className="method-in">
        <p className="method-eyebrow rv">How this was made</p>
        <h2 className="method-h rv">Written with AI,<br />and checked like it wasn’t.</h2>

        <div className="method-body">
          <div className="method-text rv">
            <p>
              This site was researched and drafted with AI, which is worth saying plainly
              rather than burying in a footer. The interesting question was never whether a
              machine helped, it was whether anybody bothered to check what came out of it.
            </p>
            <p>
              So every factual claim across these ten eras went through a separate pass whose
              only job was to try to prove it wrong. That pass changed seventy-five things,
              including two myths this site was busy repeating while claiming to correct
              myths, and two quotes that had been quietly paraphrased inside their own
              quotation marks.
            </p>
            <p>
              It also found a citation pointing at a source that does not exist and never has.
              Anything that could not be traced back to a primary source was cut, or narrowed
              until it could be, which is why a few sentences here are less exciting than the
              version you have read elsewhere.
            </p>
            <p className="method-kicker">
              The drafting was the fast part. The checking was not.
            </p>
          </div>

          <ul className="method-stats rv">
            {RECEIPTS.map((r) => (
              <li key={r.l}><b>{r.n}</b><span>{r.l}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

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

      {/* ============ HOW THIS WAS MADE ============ */}
      <Method />

      {/* ============ SCREENSAVER (the resolution box) ============
          Parked: the era marks are ~80% and need a fresh-eyes polish pass.
          Re-enable with `import Saver from './Saver.jsx'` + <Saver /> here. */}
    </>
  )
}
