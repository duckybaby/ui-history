// Tiny shared-element morph store (FLIP, no browser View Transitions needed).
// Timeline plants a fixed-position clone of the clicked panel image and hands
// it over here; EraPage picks it up and flies it onto the hero. If nobody
// claims the clone (navigation failed, user bailed), it self-destructs.
let payload = null
let timer = null

export function plantMorph(el) {
  clearTimeout(timer)
  payload = el
  timer = setTimeout(() => { el.remove(); payload = null }, 1500)
}

export function takeMorph() {
  clearTimeout(timer)
  const el = payload
  payload = null
  return el
}

// the homepage's scroll position, remembered across era-page visits (browser
// back included). Kept until the next explore overwrites it.
let homeScroll = 0
export const rememberScroll = (y) => { homeScroll = y }
export const recallScroll = () => homeScroll
