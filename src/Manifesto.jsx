import { useEffect, useRef, Fragment } from 'react'
import { useLenis } from 'lenis/react'
import { FaDesktop, FaMicrophone } from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Intro manifesto, right after the hero. Four SEPARATE condensed statement
// blocks, staggered left, lots of air between, each with its own embellishment.
// A block's lines are SEGMENTS [text, cls?, Icon?]:
//   no cls / mf-accent / mf-pink → fillable text (chars fill ghost→target on scroll)
//   stmt-mark[.pink] / stmt-tape → static mark (a highlight bar / a strip of tape)
// `indent` staggers the block; `sticker` adds a rotated stamp; the tape slaps on.
const BLOCKS = [
  {
    indent: '0',
    lines: [
      [['Scroll down to see']],
      [['200 years', 'stmt-tape'], ['of UI history.']],
    ],
  },
  {
    indent: 'clamp(30px,8vw,130px)',
    lines: [
      [['It started'], ['without a screen,', 'mf-accent', FaDesktop]],
      [['and ended in']],
      [['a conversation.', 'mf-pink', FaMicrophone]],
    ],
  },
  {
    indent: 'clamp(16px,4vw,64px)',
    tail: '❌',
    lines: [
      [['Built by many people'], ['arguing,', 'mf-accent mf-rays']],
      [['without ever really agreeing.']],
    ],
  },
  {
    indent: 'clamp(48px,11vw,150px)',
    lines: [
      [['Here’s how screens used to look,']],
      [['and why they kept'], ['* changing their mind. *', 'stmt-mark plum']],
    ],
  },
]

// static (non-filling) marks: highlight bars, tape, and the flanking asterisks
const isStatic = (cls) => cls && (cls.includes('stmt-mark') || cls.includes('stmt-tape') || cls.includes('stmt-star'))

// little burst of lines, like the motion marks on a clap icon.
// outer .rays = scroll entrance (GSAP); inner .rays-pulse = continuous pulse (CSS)
const Rays = () => (
  <span className="rays" aria-hidden="true">
    <span className="rays-pulse">
      <svg viewBox="0 0 50 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        <line x1="6" y1="36" x2="2" y2="22" />
        <line x1="16" y1="35" x2="12" y2="18" />
        <line x1="25" y1="34" x2="25" y2="14" />
        <line x1="34" y1="35" x2="38" y2="18" />
        <line x1="44" y1="36" x2="48" y2="22" />
      </svg>
    </span>
  </span>
)

export default function Manifesto() {
  const ref = useRef(null)
  const lenis = useLenis()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      // ONE scrubbed timeline per block: the char fill starts at t=0 and walks
      // the text at 0.06/char; each embellishment's pop is inserted at the time
      // the fill front reaches its spot (k chars before it → t = k*0.06). So an
      // embellishment appears exactly as the text before it darkens, and
      // reverses at the same spot on scroll-back.
      const CH = 0.06 // fill front speed (per char)
      gsap.utils.toArray('.stmt').forEach((block) => {
        const chars = block.querySelectorAll('.mf-ch')
        const embel = block.querySelectorAll('.stmt-ico, .stmt-emoji, .stmt-mark, .stmt-tape, .rays')
        if (reduce) {
          gsap.set(chars, { '--p': 1 })
          gsap.set(embel, { opacity: 1, scale: 1 })
          return
        }
        const tl = gsap.timeline({
          scrollTrigger: { trigger: block, start: 'top 82%', end: 'top 42%', scrub: true },
        })
        tl.fromTo(chars, { '--p': 0 }, { '--p': 1, ease: 'none', duration: 0.6, stagger: { each: CH } }, 0)

        // walk the block in DOM order, counting chars, to time each embellishment
        let k = 0
        block.querySelectorAll('.mf-ch, .stmt-ico, .stmt-emoji, .stmt-mark, .stmt-tape, .rays').forEach((el) => {
          if (el.classList.contains('mf-ch')) { k += 1; return }
          const t = k * CH // front arrives at the preceding char
          if (el.classList.contains('stmt-tape')) {
            // tape slaps on: lifts in crooked, presses flat, a beat after the front
            tl.fromTo(el,
              { rotation: -16, scale: 1.18, yPercent: -45, opacity: 0, transformOrigin: '30% 50%' },
              { rotation: -2.8, scale: 1, yPercent: 0, opacity: 1, ease: 'back.out(1.8)', duration: 0.6 },
              t + 0.25)
          } else {
            tl.fromTo(el,
              { opacity: 0, scale: 0.4 },
              { opacity: 1, scale: 1, ease: 'back.out(2)', duration: 0.45 },
              t + 0.15)
          }
        })
      })
    }, ref)

    const onScroll = () => ScrollTrigger.update()
    if (lenis) lenis.on('scroll', onScroll)
    document.fonts?.ready.then(() => ScrollTrigger.refresh())

    return () => {
      if (lenis) lenis.off('scroll', onScroll)
      ctx.revert()
    }
  }, [lenis])

  return (
    <section className="manifesto" ref={ref}>
      {BLOCKS.map((b, bi) => (
        <div className="stmt" key={bi} style={{ marginLeft: b.indent }}>
          <p className="stmt-p">
            {b.lines.map((line, li) => (
              <Fragment key={li}>
                {line.map(([text, cls, Icon], si) => (
                  <Fragment key={si}>
                    {isStatic(cls)
                      ? <span className={cls}>{text}</span>
                      : (
                        <span className={cls || undefined}>
                          {text.split(' ').map((w, wi, arr) => (
                            <Fragment key={wi}>
                              <span className="mf-word">{[...w].map((ch, ci) => <span className="mf-ch" key={ci}>{ch}</span>)}</span>
                              {wi < arr.length - 1 ? ' ' : null}
                            </Fragment>
                          ))}
                          {Icon && <span className="stmt-ico" aria-hidden="true"><Icon /></span>}
                          {cls?.includes('mf-rays') && <Rays />}
                        </span>
                      )}
                    {si < line.length - 1 ? ' ' : null}
                  </Fragment>
                ))}
                {li < b.lines.length - 1 ? <br /> : null}
              </Fragment>
            ))}
            {b.tail && <span className="stmt-emoji">{b.tail}</span>}
          </p>
        </div>
      ))}
    </section>
  )
}
