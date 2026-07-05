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
// ONE curve family. The seam clip and the marquee arcs use the same quad —
// endpoints AT the viewport edges (x:0→1440) — so their curvature is identical
// on screen. Sag reduced to 120 units (was 205, too deep).
const SAG = 120 / 1440
// panels show just the first two sentences; the full text moves to the inner
// era screens later
const short = (text) => text.split('. ').slice(0, 2).join('. ').replace(/\.?$/, '.')

export default function Timeline() {
  const sectionRef = useRef(null)
  const lenis = useLenis()
  const navigate = useNavigate()

  // "entering the era": the clicked panel's image (curve, gradient, parallax
  // offset and all) GROWS to swallow the viewport while the homepage stays
  // alive beneath it — nothing ever flashes grey. Only when the image owns
  // the screen do we navigate; the era page then settles around it.
  const explore = (id) => (e) => {
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const bg = e.currentTarget.closest('.era')?.querySelector('.era-bg')
    const img = bg?.querySelector('img')
    const path = `/era/${id}`
    rememberScroll(window.scrollY)   // so coming back lands exactly here
    if (reduce || !bg || !img) { navigate(path, { state: { seamless: true } }); return }

    lenis?.stop()
    const r = bg.getBoundingClientRect()
    const first = bg.style.clipPath === 'none' || !bg.style.clipPath
    const sag0 = first ? 0 : window.innerWidth * SAG

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

    // one manually-driven tween: rect grows to the viewport while the seam
    // curve flattens in step (clip-path coords must track the live size)
    const p = { t: 0 }
    gsap.to(p, {
      t: 1, duration: 0.7, ease: 'power3.inOut',
      onUpdate: () => {
        const t = p.t
        const L = r.left * (1 - t), T = r.top * (1 - t)
        const W = r.width + (window.innerWidth - r.width) * t
        const H = r.height + (window.innerHeight - r.height) * t
        const s = sag0 * (1 - t)
        Object.assign(clone.style, { left: `${L}px`, top: `${T}px`, width: `${W}px`, height: `${H}px` })
        clone.style.clipPath = `path('M 0 0 Q ${W / 2} ${2 * s} ${W} 0 L ${W} ${H} L 0 ${H} Z')`
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

  // curved seams: clip each era's BACKGROUND layer (not the panel itself, so
  // the ribbon can spill over the previous era) with the same valley quad as
  // the marquee arcs. clip-path path() is px-based, so recompute on resize.
  useEffect(() => {
    const bgs = sectionRef.current.querySelectorAll('.era-bg')
    const setClips = () => {
      const w = window.innerWidth
      const s = w * SAG
      bgs.forEach((bg, idx) => {
        if (idx === 0) { bg.style.clipPath = 'none'; return }   // first era: flat top
        const h = bg.offsetHeight
        bg.style.clipPath = `path('M 0 0 Q ${w / 2} ${2 * s} ${w} 0 L ${w} ${h} L 0 ${h} Z')`
      })
    }
    setClips()
    window.addEventListener('resize', setClips)
    return () => window.removeEventListener('resize', setClips)
  }, [])

  useEffect(() => {
    if (reduce) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.era').forEach((era) => {
        const tpBold = era.querySelector('.tp-bold')
        const tpCursive = era.querySelector('.tp-cursive')
        const bg = era.querySelector('.era-bg img')
        const st = { trigger: era, start: 'top bottom', end: 'bottom top', scrub: true }
        // aggressive photo parallax — the speed difference sells the depth
        if (bg) gsap.fromTo(bg, { yPercent: -14 }, { yPercent: 14, ease: 'none', scrollTrigger: st })
        // and a whisper of vertical drift on the ribbon (stays glued to the
        // seam zone, just breathes with the scroll)
        const inner = era.querySelector('.era-marquee-inner')
        if (inner) gsap.fromTo(inner, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: st })
        // one ribbon at a time: fade this era's ribbon out as it exits the top,
        // so it's gone before the next era's ribbon peeks in at the bottom
        const mq = era.querySelector('.era-marquee')
        if (mq) gsap.fromTo(mq, { autoAlpha: 1 }, {
          autoAlpha: 0, ease: 'none',
          scrollTrigger: { trigger: era, start: 'top top', end: 'top -18%', scrub: true },
        })
        // ribbons slide horizontally on scroll — same direction, two speeds
        gsap.fromTo(tpBold, { attr: { startOffset: 0 } }, { attr: { startOffset: -1000 }, ease: 'none', scrollTrigger: st })
        gsap.fromTo(tpCursive, { attr: { startOffset: 0 } }, { attr: { startOffset: -1700 }, ease: 'none', scrollTrigger: st })
      })

      // progress bar: fills across the whole eras section, visible only inside it
      const bar = sectionRef.current.querySelector('.tl-progressbar')
      const fill = bar.querySelector('.tl-progress-fill')
      gsap.fromTo(fill, { width: '0%' }, {
        width: '100%', ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: true,
          onToggle: (self) => gsap.to(bar, { autoAlpha: self.isActive ? 1 : 0, duration: 0.25, overwrite: 'auto' }),
        },
      })
    }, sectionRef)

    const onScroll = () => ScrollTrigger.update()
    if (lenis) lenis.on('scroll', onScroll)
    document.fonts?.ready.then(() => ScrollTrigger.refresh())
    return () => {
      if (lenis) lenis.off('scroll', onScroll)
      ctx.revert()
    }
  }, [lenis, reduce])

  return (
    <section className="tl" id="timeline" ref={sectionRef}>
      <div className="tl-progressbar" aria-hidden="true"><div className="tl-progress-fill" /></div>

      {STOPS.map((s, i) => (
        <div className={`era ${i % 2 ? 'era--b' : 'era--a'}${i === 0 ? ' era--first' : ''}`} key={s.id}>
          <div className="era-bg" aria-hidden="true">
            <img src={s.img} alt="" loading={i > 1 ? 'lazy' : 'eager'} />
          </div>

          <div className="era-marquee" aria-hidden="true">
            <div className="era-marquee-inner">
              <div className="era-seam-shade" />
              <svg className="era-arc" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMid slice">
                <defs>
                  {/* same quad family as the seam clip (sag 120 on 1440), just
                      offset down so the glyphs hang under the curved edge;
                      cursive rides ~70 higher, cutting the bold's upper half */}
                  <path id={`arcBold-${i}`} d="M 0 170 Q 720 410 1440 170" fill="none" />
                  <path id={`arcCur-${i}`} d="M 0 100 Q 720 340 1440 100" fill="none" />
                </defs>
                <text className="era-m-bold">
                  <textPath className="tp-bold" href={`#arcBold-${i}`} startOffset="0">{repeat(s.title, 14)}</textPath>
                </text>
                <text className="era-m-cursive">
                  <textPath className="tp-cursive" href={`#arcCur-${i}`} startOffset="0">{repeat(s.cursive, 14)}</textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="era-foot">
            <div className="era-l">
              <span className="era-yr">{s.big}</span>
              <h3 className="era-title">{s.title}</h3>
            </div>
            <div className="era-r">
              <p className="era-text">{short(s.content)}</p>
              <Link to={`/era/${s.id}`} className="btn btn-accent era-btn" onClick={explore(s.id)}>Explore this era</Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
