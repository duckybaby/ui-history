import { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { STOPS } from './data.js'

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

  // exit transition into an era: the whole page lifts and fades (forward =
  // upward), then the era page rises from below (its 'next' entrance)
  const explore = (id) => (e) => {
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const path = `/era/${id}`
    if (reduce) { navigate(path, { state: { dir: 'next' } }); return }
    gsap.to('#root', {
      y: '-8vh', autoAlpha: 0, duration: 0.3, ease: 'power2.in',
      onComplete: () => navigate(path, { state: { dir: 'next' } }),
    })
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
