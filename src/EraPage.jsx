import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import gsap from 'gsap'
import { STOPS, ERA_PAGES } from './data.js'
import { takeMorph } from './morph.js'

// Dedicated era pages (/era/:id) — modern editorial: hero image, numbered
// sections, figures, quote, sources, prev/next. Navigation direction drives
// the transition: next slides the page up, previous slides it down.
export default function EraPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const lenis = useLenis()
  const wrapRef = useRef(null)

  const idx = STOPS.findIndex((s) => s.id === id)
  const stop = STOPS[idx]
  const page = ERA_PAGES[id]
  const prev = idx > 0 ? STOPS[idx - 1] : null
  const next = idx >= 0 && idx < STOPS.length - 1 ? STOPS[idx + 1] : null

  // entrances:
  // - from the homepage (seamless): the photo morphs via the view transition;
  //   the hero details fade + rise from ~50px below, staggered
  // - prev/next within the timeline: the whole page slides (dir-based)
  useEffect(() => {
    gsap.set('#root', { clearProps: 'transform,opacity,visibility' })   // safety: undo any exit styles
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !wrapRef.current) return
    if (location.state?.seamless) {
      lenis?.start()
      const clone = takeMorph()
      const hero = wrapRef.current.querySelector('.ep-hero')
      const details = wrapRef.current.querySelectorAll('.ep-hero-in > *')
      const home = wrapRef.current.querySelector('.ep-home')
      if (clone && hero) {
        // arrive full-bleed: the hero matches the clone pixel for pixel, so
        // the swap is invisible; then the page composes itself around you —
        // the hero settles to its height while the details rise in
        gsap.set(hero, { minHeight: '100vh' })
        gsap.set([details, home], { autoAlpha: 0 })
        requestAnimationFrame(() => {
          clone.remove()
          // one continuous motion: the hero settles AND the text rises together
          gsap.timeline()
            .to(hero, { minHeight: '76vh', duration: 0.65, ease: 'power3.inOut', clearProps: 'minHeight' }, 0)
            .fromTo(details, { y: 50, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', stagger: 0.09 }, 0.02)
            .fromTo(home, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.3)
        })
      } else {
        // no clone (reduced motion or direct hit): just the gentle rise
        gsap.fromTo(details, { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power3.out', stagger: 0.09, delay: 0.1 })
      }
      return
    }
    const dir = location.state?.dir
    if (!dir) return
    gsap.fromTo(wrapRef.current,
      { y: dir === 'next' ? '10vh' : '-10vh', autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.55, ease: 'power2.out' })
  }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

  // animate out, then navigate; dir 'next' exits upward, 'prev' downward
  const leave = (dir, path) => (e) => {
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !wrapRef.current) { navigate(path, { state: { dir } }); return }
    gsap.to(wrapRef.current, {
      y: dir === 'next' ? '-10vh' : '10vh', autoAlpha: 0, duration: 0.35, ease: 'power2.in',
      onComplete: () => navigate(path, { state: { dir } }),
    })
  }
  const go = (dir, target) => leave(dir, `/era/${target.id}`)

  if (!stop) {
    return (
      <main className="ep">
        <section className="ep-sec"><h2>No such era.</h2><p><Link to="/">Back to the timeline</Link></p></section>
      </main>
    )
  }

  return (
    <main className="ep" ref={wrapRef}>
      {/* ============ HERO ============ */}
      <header className="ep-hero">
        <Link to="/" className="ep-home" onClick={leave('prev', '/')}>← The History of UI</Link>
        <img src={stop.img} alt="" />
        <div className="ep-hero-in">
          <span className="ep-yr">{stop.big}</span>
          <h1>{stop.title}</h1>
          <p className="ep-lede">{stop.content}</p>
        </div>
      </header>

      {/* the movement label rides its own marquee under the hero: bare white
          background, cursive in this era's homepage ribbon colour */}
      <div className={`ep-marquee ${idx % 2 ? 'ep-marquee--b' : 'ep-marquee--a'}`} aria-hidden="true">
        <div className="ep-marquee-track">
          {Array.from({ length: 12 }, (_, i) => <span key={i}>{stop.cursive}</span>)}
        </div>
      </div>

      {page ? (
        <>
          <section className="ep-sec">
            <h2><b>01</b>Why it matters</h2>
            {page.why.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <figure className="ep-fig">
            <img src={page.gallery[0].img} alt={page.gallery[0].cap} loading="lazy" />
            <figcaption>
              {page.gallery[0].cap}
              {page.gallery[0].credit && <span className="ep-credit">{page.gallery[0].credit}</span>}
            </figcaption>
          </figure>

          <section className="ep-sec">
            <h2><b>02</b>What they built</h2>
            <div className="ep-grid">
              {page.contained.map((c, i) => (
                <div className="ep-card" key={i}><b>{c.t}</b><p>{c.d}</p></div>
              ))}
            </div>
          </section>

          <section className="ep-sec">
            <h2><b>03</b>How you touched it</h2>
            {page.ui.map((p, i) => <p key={i}>{p}</p>)}
          </section>

          <div className="ep-gallery">
            {page.gallery.slice(1).map((g, i) => (
              <figure className="ep-fig ep-fig--tight" key={i}>
                <img src={g.img} alt={g.cap} loading="lazy" />
                <figcaption>{g.cap}</figcaption>
              </figure>
            ))}
          </div>

          <section className="ep-sec">
            <h2><b>04</b>What survived</h2>
            <ol className="ep-notable">
              {page.notable.map((n, i) => (
                <li key={i}><div><b>{n.t}</b><p>{n.d}</p></div></li>
              ))}
            </ol>
          </section>

          {page.left && (
            <section className="ep-sec">
              <h2><b>05</b>What it left you</h2>
              {page.left.paras.map((p, i) => <p key={i}>{p}</p>)}
              <p className="ep-thread">
                <Link to={`/era/${page.left.thread.to}`}>{page.left.thread.text}{' →'}</Link>
              </p>
            </section>
          )}
        </>
      ) : (
        <section className="ep-sec">
          <p className="ep-soon">The full story of this era is still being written. The short version is above; the deep dive lands here soon.</p>
        </section>
      )}

      {/* ============ QUOTE ============ */}
      {stop.quote && (
        <section className="ep-quote">
          <blockquote>“{stop.quote.text}”</blockquote>
          <cite>{stop.quote.who}</cite>
        </section>
      )}

      {/* ============ SOURCES ============ */}
      {page?.sources && (
        <section className="ep-sec ep-sources">
          <h2><b>06</b>Receipts</h2>
          <ul>
            {page.sources.map((s, i) => (
              <li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.label}</a></li>
            ))}
          </ul>
        </section>
      )}

      {/* ============ PREV / NEXT ============ */}
      <nav className="ep-nav">
        {prev ? (
          <a href={`/era/${prev.id}`} onClick={go('prev', prev)} className="ep-nav-a ep-nav-prev">
            <span>↑ Previous era</span><b>{prev.title}</b><i>{prev.big}</i>
          </a>
        ) : <span className="ep-nav-a" aria-hidden="true" />}
        {next ? (
          <a href={`/era/${next.id}`} onClick={go('next', next)} className="ep-nav-a ep-nav-next">
            <span>Next era ↓</span><b>{next.title}</b><i>{next.big}</i>
          </a>
        ) : <span className="ep-nav-a" aria-hidden="true" />}
      </nav>
    </main>
  )
}
