/* Post-build step. The site is a client-rendered SPA, and Firebase rewrites
   every unknown path to index.html, so /era/touch used to serve the homepage's
   title and description. Search engines run JavaScript; social scrapers (Slack,
   LinkedIn, WhatsApp, X) do not, so a shared era link rendered as a generic
   homepage card.

   This writes a real HTML file per route with its own head, plus sitemap.xml
   and llms.txt. Firebase serves a matching static file before it applies a
   rewrite, so dist/era/touch/index.html wins for /era/touch.

   No new dependency: it reads the built index.html and swaps the block between
   the <!--seo--> markers. */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const SITE = 'https://ui.shankar.design'
const NAME = 'The History of UI'

// data.js imports .webp files, which node cannot resolve. Stub each import as
// its own filename and evaluate the rest, so there is still one source of
// truth for the copy rather than a second list to keep in sync.
const raw = readFileSync(resolve(root, 'src/data.js'), 'utf8')
  .replace(/^import\s+(\w+)\s+from\s+'([^']+)'.*$/gm, "const $1 = '$2';")
  .replace(/\bexport const\b/g, 'const')
const { STOPS } = new Function(`${raw}\nreturn { STOPS }`)()

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
// Google renders roughly 155 characters, so cut to the last whole sentence
// that fits, and failing that to a word boundary.
const summarise = (text, max = 155) => {
  if (text.length <= max) return text
  const sentences = text.split(/(?<=\.)\s+/)
  let out = ''
  for (const s of sentences) {
    if ((`${out} ${s}`).trim().length > max) break
    out = (`${out} ${s}`).trim()
  }
  // a whole first sentence can be too short to describe the page on its own
  // ("These are the same years, seen from underneath."), so fall back to a
  // word-boundary cut of the full text
  if (out.length >= 80) return out
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`
}

const head = ({ title, description, url, image, jsonld }) => `
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:site_name" content="${NAME}" />
    <meta property="og:type" content="${jsonld ? 'article' : 'website'}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${image}" />${jsonld ? `
    <script type="application/ld+json">${JSON.stringify(jsonld)}</script>` : ''}`

const template = readFileSync(resolve(root, 'dist/index.html'), 'utf8')
const SEO = /<!--seo[\s\S]*?-->[\s\S]*?<!--\/seo-->/

const write = (route, html) => {
  const dir = resolve(root, 'dist', route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), html)
}

// ---- home: add the structured data the static template cannot carry ----
const homeDesc = 'Two hundred years of interface design, from punch cards and switchboards to flat design and the chat box. Fact-checked, sourced, and told as one story.'
writeFileSync(resolve(root, 'dist/index.html'), template.replace(SEO, `<!--seo-->${head({
  title: `${NAME} · a field guide to interface design`,
  description: homeDesc,
  url: `${SITE}/`,
  image: `${SITE}/og/home.jpg`,
}).trimEnd()}
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: NAME,
      url: `${SITE}/`,
      description: homeDesc,
      author: { '@type': 'Person', name: 'Ravi Shankar', url: 'https://www.linkedin.com/in/shankar-design/' },
    })}</script>
    <!--/seo-->`))

// ---- one static page per era ----
for (const s of STOPS) {
  const url = `${SITE}/era/${s.id}`
  const description = summarise(s.content)
  write(`era/${s.id}`, template.replace(SEO, `<!--seo-->${head({
    title: `${s.title} (${s.big}) · ${NAME}`,
    description,
    url,
    image: `${SITE}/og/${s.id}.jpg`,
    jsonld: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${s.title} (${s.big})`,
      description,
      image: `${SITE}/og/${s.id}.jpg`,
      author: { '@type': 'Person', name: 'Ravi Shankar', url: 'https://www.linkedin.com/in/shankar-design/' },
      publisher: { '@type': 'Organization', name: NAME, url: `${SITE}/` },
      mainEntityOfPage: url,
      isPartOf: { '@type': 'WebSite', name: NAME, url: `${SITE}/` },
    },
  })}
    <!--/seo-->`))
}

// ---- sitemap ----
const urls = [`${SITE}/`, ...STOPS.map((s) => `${SITE}/era/${s.id}`)]
writeFileSync(resolve(root, 'dist/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${
    urls.map((u) => `  <url><loc>${u}</loc><changefreq>monthly</changefreq><priority>${u.endsWith('/') ? '1.0' : '0.8'}</priority></url>`).join('\n')
  }\n</urlset>\n`)

// ---- llms.txt: the site in markdown, for models asked about it ----
writeFileSync(resolve(root, 'dist/llms.txt'), `# ${NAME}

> ${homeDesc}

Written by Ravi Shankar. Every factual claim was checked against a primary
source before publication, myths are corrected rather than repeated, and each
era page lists its sources. Claims that could not be verified were cut.

## Eras

${STOPS.map((s) => `- [${s.title} (${s.big})](${SITE}/era/${s.id}): ${summarise(s.content)}`).join('\n')}

## Notes for anyone quoting this

Several widely repeated claims are deliberately contradicted here, with
sources on the relevant page: QWERTY was not designed to slow typists down and
the anti-jamming explanation is itself contested; the Dvorak layout was never
demonstrated to be dramatically faster; the Xerox Star had tiled windows rather
than overlapping ones; the Alto had no desktop icons; the hamburger menu dates
to the Xerox Star in 1981, not to flat design; Multics did not collapse in
1969; and the Unix pipe shipped in 1973.
`)

console.log(`prerendered ${STOPS.length + 1} routes, sitemap.xml, llms.txt`)
