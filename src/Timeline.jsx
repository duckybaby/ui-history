import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STOPS } from './data.js'
import { plantMorph, rememberScroll } from './morph.js'

gsap.registerPlugin(ScrollTrigger)

// "The main event" — one consistent light look for every era. Per panel:
// a photo background (Unsplash, washed with paper so ink text stays readable)
// that parallaxes, plus two curved marquees (bold title + cursive label) on
// overlapping SVG arcs. Marquees move ONLY on scroll: the pair rises
// bottom→top and each slides left at a different speed. A fixed purple
// progress bar (glowing leading edge) lives only inside the eras section.
const repeat = (s, n) => Array.from({ length: n }, () => s).join('  .  ')
// Flat ribbons: font sizes and travel in vw, matching the old SVG (150px and
// 81px on a 1440 viewBox; 1000 and 1700 units of slide).
const BOLD_VW = 10.4, CUR_VW = 5.6
const BOLD_TRAVEL_VW = 69, CUR_TRAVEL_VW = 118
// enough repeats to cover the viewport plus the full slide, per label length
const flatRepeats = (str, fontVW, travelVW) =>
  Math.max(2, Math.ceil((100 + travelVW + 30) / ((str.length + 5) * fontVW * 0.5)))

export default function Timeline() {
  const sectionRef = useRef(null)
  const lenis = useLenis()
  const navigate = useNavigate()

  // "entering the era": the clicked panel's image (curve, gradient, parallax
  // offset and all) GROWS to swallow the viewport while the homepage stays
  // alive beneath it — nothing ever flashes grey. Only when the image owns
  // the screen do we navigate; the era page then settles around it.
  const explore = (id, i) => (e) => {
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const bg = e.currentTarget.closest('.era')?.querySelector('.era-bg')
    const img = bg?.querySelector('img')
    const path = `/era/${id}`
    rememberScroll(window.scrollY)   // so coming back lands exactly here
    if (reduce || !bg || !img) { navigate(path, { state: { seamless: true } }); return }

    lenis?.stop()
    const r = bg.getBoundingClientRect()
    const first = i === 0

    // clone: container (clips) + img (with the live parallax offset) + two
    // shades (panel gradient fading out, hero gradient fading in)
    const clone = document.createElement('div')
    Object.assign(clone.style, {
      position: 'fixed', left: `${r.left}px`, top: `${r.top}px`,
      width: `${r.width}px`, height: `${r.height}px`,
      overflow: 'hidden', zIndex: 999, pointerEvents: 'none',
    })
    const ci = document.createElement('img')
    ci.src = img.currentSrc || img.src
    Object.assign(ci.style, {
      position: 'absolute', left: 0, top: '-20%', width: '100%', height: '140%',
      objectFit: 'cover', transform: getComputedStyle(img).transform, margin: 0,
    })
    const shadeA = document.createElement('div')
    Object.assign(shadeA.style, {
      position: 'absolute', inset: 0,
      background: first ? 'rgba(0,0,0,.1)' : 'linear-gradient(180deg,rgba(17,24,39,.42) 0%,rgba(17,24,39,.3) 45%,rgba(17,24,39,.85) 100%)',
    })
    const shadeB = document.createElement('div')
    Object.assign(shadeB.style, {
      position: 'absolute', inset: 0, opacity: 0,
      background: 'linear-gradient(180deg,rgba(17,24,39,.35),rgba(17,24,39,.88))', // = .ep-hero::after
    })
    clone.append(ci, shadeA, shadeB)
    document.body.appendChild(clone)

    // one manually-driven tween: the rect grows to fill the viewport
    const p = { t: 0 }
    gsap.to(p, {
      t: 1, duration: 0.7, ease: 'power3.inOut',
      onUpdate: () => {
        const t = p.t
        const L = r.left * (1 - t), T = r.top * (1 - t)
        const W = r.width + (window.innerWidth - r.width) * t
        const H = r.height + (window.innerHeight - r.height) * t
        Object.assign(clone.style, { left: `${L}px`, top: `${T}px`, width: `${W}px`, height: `${H}px` })
        shadeB.style.opacity = t
      },
      onComplete: () => {
        plantMorph(clone)
        navigate(path, { state: { seamless: true } })
      },
    })
    gsap.to(ci, { top: 0, height: '100%', transform: 'none', duration: 0.7, ease: 'power3.inOut' })
  }
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // SEAMS ARE FLAT. Every curved variant (clip-path:path(), then a
  // border-radius dome) put the parallaxing photo inside a clipped box, which
  // costs raster work every frame. The seam-shade band hides the straight joint
  // where two photos meet, and the motion carries the transition instead.

  useEffect(() => {
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.era').forEach((era) => {
        const bg = era.querySelector('.era-bg img')
        // scrub with a small lag: interpolating toward the scroll position (instead
        // of hard-syncing every wheel tick) is what keeps the era stretch smooth
        const st = { trigger: era, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
        // aggressive photo parallax — the speed difference sells the depth
        if (bg) gsap.fromTo(bg, { yPercent: -14 }, { yPercent: 14, ease: 'none', scrollTrigger: st })
        // one ribbon at a time: fade this era's ribbon out as it exits the top,
        // so it's gone before the next era's ribbon peeks in at the bottom
        const mq = era.querySelector('.era-marquee')
        if (mq) gsap.fromTo(mq, { autoAlpha: 1 }, {
          autoAlpha: 0, ease: 'none',
          scrollTrigger: { trigger: era, start: 'top top', end: 'top -18%', scrub: 0.4 },
        })
        // ribbons slide horizontally on scroll — same direction, two speeds.
        // Function values + invalidateOnRefresh so the travel tracks resizes.
        const mqBold = era.querySelector('.era-mq-bold')
        const mqCur = era.querySelector('.era-mq-cur')
        const slideTo = (el, vw) => {
          if (!el) return
          gsap.fromTo(el, { x: 0 }, {
            x: () => -window.innerWidth * (vw / 100), ease: 'none',
            scrollTrigger: { ...st, invalidateOnRefresh: true },
          })
        }
        slideTo(mqBold, BOLD_TRAVEL_VW)
        slideTo(mqCur, CUR_TRAVEL_VW)

        // promote GPU layers only while this era can actually move, and half a
        // viewport early so the one-time raster happens off-screen. Permanent
        // promotion of every photo and ribbon makes the compositor evict and
        // re-raster tiles mid-scroll, which is jank that no main-thread fix
        // can touch.
        const movers = [bg, mqBold, mqCur].filter(Boolean)
        ScrollTrigger.create({
          trigger: era, start: 'top 150%', end: 'bottom -50%',
          onToggle: (self) => {
            movers.forEach((el) => { el.style.willChange = self.isActive ? 'transform' : 'auto' })
            if (mq) mq.style.willChange = self.isActive ? 'opacity' : 'auto'
          },
        })
      })

      // progress bar: fills across the whole eras section, visible only inside it
      const bar = sectionRef.current.querySelector('.tl-progressbar')
      const fill = bar.querySelector('.tl-progress-fill')
      gsap.fromTo(fill, { xPercent: -100 }, {
        xPercent: 0, ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: true,
          onToggle: (self) => gsap.to(bar, { autoAlpha: self.isActive ? 1 : 0, duration: 0.25, overwrite: 'auto' }),
        },
      })
    }, sectionRef)

    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => ctx.revert()
  }, [lenis, reduce])

  return (
    <section className="tl" id="timeline" ref={sectionRef}>
      <div className="tl-progressbar" aria-hidden="true"><div className="tl-progress-fill" /></div>

      {STOPS.map((s, i) => (
        <div className={`era ${i % 2 ? 'era--b' : 'era--a'}${i === 0 ? ' era--first' : ''}`} key={s.id}>
          <div className="era-bg" aria-hidden="true">
            <img src={s.img} alt="" loading={i > 1 ? 'lazy' : 'eager'} decoding="async" />
          </div>

          <div className="era-marquee" aria-hidden="true">
            <div className="era-seam-shade" />
            {/* two straight rows of plain text, slid on translateX at two
                speeds. One composited layer each, moved but never re-laid-out. */}
            <div className="era-mq-window">
              <div className="era-mq era-mq-bold">{repeat(s.title, flatRepeats(s.title, BOLD_VW, BOLD_TRAVEL_VW))}</div>
              <div className="era-mq era-mq-cur">{repeat(s.cursive, flatRepeats(s.cursive, CUR_VW, CUR_TRAVEL_VW))}</div>
            </div>
          </div>

          <div className="era-foot">
            <div className="era-l">
              <span className="era-yr">{s.big}</span>
              <h3 className="era-title">{s.title}</h3>
            </div>
            <div className="era-r">
              <p className="era-text">{s.content}</p>
              <Link to={`/era/${s.id}`} className="btn btn-accent era-btn" onClick={explore(s.id, i)}>Explore this era</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
