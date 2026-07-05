import { useEffect, useRef, useState } from 'react'
import winFlat from './assets/saver/windows-2012.svg'
import winFlag from './assets/saver/windows-flag.svg'

// "The Resolution Box" — filter chips pick an era; ONE object bounces DVD-style
// forever: that era's most iconic visual mark. All marks are transparent
// objects (no cards, no boxes): punched card → "> ▮" prompt → pixel arrow →
// Win95 window → DVD logo (colour-cycles on wall hits) → Vista start orb
// (PD flag in a CSS pearl) → flat Windows logo → Material switch (hover
// state) → glass button → see-through swirling orb.
const ERAS = [
  { id: 'card',    yr: '1800s', cap: 'A punched card. Software, shipped as cardboard.' },
  { id: 'prompt',  yr: '1950s', cap: 'The prompt. Still blinking under everything.' },
  { id: 'arrow',   yr: '1963',  cap: 'The first arrow. It has not stopped pointing since.' },
  { id: 'window',  yr: '1984',  cap: 'A window. Grey, beveled, extremely 1995.' },
  { id: 'dvd',     yr: '2000s', cap: 'The DVD logo. Patron saint of waiting for the corner hit.' },
  { id: 'vista',   yr: '2007',  cap: 'The Start orb. Glossy, pearlescent, very 2007.' },
  { id: 'flat',    yr: '2013',  cap: 'The flat flag. Four panes, zero gloss.' },
  { id: 'switch',  yr: '2014',  cap: 'The switch. A thumb, a track, and its halo.' },
  { id: 'glassbtn', yr: '2018', cap: 'A glass button. Try not to lick it.' },
  { id: 'orb',     yr: 'now',   cap: 'The orb. You talk, it swirls.' },
]
const DVD_COLORS = ['#A855F7', '#FF5BA0', '#37ff84', '#ffd23e', '#4dc3ff', '#ff6a3d']
// sparse pseudo-random hole pattern for the punched card (stable, no Math.random)
const HOLES = Array.from({ length: 64 }, (_, i) => (i * 7 + 3) % 13 < 4)

function Mark({ era }) {
  switch (era) {
    case 'card': return (
      <div className="mark-card">
        {HOLES.map((on, i) => <i key={i} className={on ? 'on' : ''} />)}
      </div>)
    case 'prompt': return <div className="mark-prompt">&gt;<span className="mark-caret" /></div>
    case 'arrow': return (
      <svg className="mark-arrow" viewBox="0 0 16 16" shapeRendering="crispEdges">
        <path fill="#fff" stroke="#000" strokeWidth="1" d="M2 1 L2 12 L5 9.5 L7 14 L9 13 L7 9 L11 9 Z" />
      </svg>)
    case 'window': return (
      <div className="mark-window">
        <div className="mark-window-bar"><span>program.exe</span><i>✕</i></div>
        <div className="mark-window-body" />
      </div>)
    case 'dvd': return (
      <div className="mark-dvd">
        <span className="mark-dvd-word">DVD</span>
        <span className="mark-dvd-disc">VIDEO</span>
      </div>)
    case 'vista': return <div className="mark-vista"><img src={winFlag} alt="" draggable="false" /></div>
    case 'flat': return <img className="mark-flat" src={winFlat} alt="" draggable="false" />
    case 'switch': return (
      <div className="mark-switch">
        <span className="ms-track" />
        <span className="ms-halo" />
        <span className="ms-thumb" />
      </div>)
    case 'glassbtn': return <div className="mark-glassbtn">Button</div>
    case 'orb': return <div className="mark-orb"><i /><i /><i /></div>
    default: return null
  }
}

export default function Saver() {
  const boxRef = useRef(null)
  const objRef = useRef(null)
  const [era, setEra] = useState('dvd')
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const active = ERAS.find((e) => e.id === era)

  // one bouncer, forever; position survives era swaps. Wall hits cycle the
  // DVD colour, exactly as the ancients intended.
  useEffect(() => {
    if (reduce) return
    const box = boxRef.current
    const U = parseFloat(getComputedStyle(document.documentElement).fontSize)
    const s = { x: 30, y: 24, vx: 3.4 * U, vy: 2.6 * U, hue: 0 }
    let raf, last = performance.now()
    const bump = () => {
      s.hue = (s.hue + 1) % DVD_COLORS.length
      objRef.current?.style.setProperty('--bounce-c', DVD_COLORS[s.hue])
    }
    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05); last = now
      const el = objRef.current
      if (el) {
        const W = box.clientWidth, H = box.clientHeight
        const w = el.offsetWidth, h = el.offsetHeight
        s.x += s.vx * dt; s.y += s.vy * dt
        if (s.x <= 0) { s.x = 0; s.vx = Math.abs(s.vx); bump() }
        if (s.x >= W - w) { s.x = W - w; s.vx = -Math.abs(s.vx); bump() }
        if (s.y <= 0) { s.y = 0; s.vy = Math.abs(s.vy); bump() }
        if (s.y >= H - h) { s.y = H - h; s.vy = -Math.abs(s.vy); bump() }
        el.style.transform = `translate3d(${s.x}px,${s.y}px,0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduce])

  return (
    <section className="saver">
      <div className="saver-head">
        <span className="eyebrow"><b>Screensaver</b></span>
        <p className="saver-title">One box, two hundred years of bouncing. Pick an era.</p>
      </div>

      <div className="saver-chips" role="tablist" aria-label="Pick an era mark">
        {ERAS.map((e) => (
          <button key={e.id} role="tab" aria-selected={era === e.id}
            className={`saver-chip${era === e.id ? ' on' : ''}`} onClick={() => setEra(e.id)}>
            {e.yr}
          </button>
        ))}
      </div>

      <div className={`saver-box${reduce ? ' saver-box--still' : ''}`} ref={boxRef} aria-hidden="true">
        <div className="saver-obj" ref={objRef}><Mark era={era} /></div>
      </div>

      <p className="saver-cap">{active.cap}</p>
    </section>
  )
}
