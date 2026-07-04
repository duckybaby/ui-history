/* ============================================================
   The History of UI — content.
   Single source of truth. Edit the prose freely.

   ERAS      drive the scroll-pinned timeline on the home page.
   MILESTONES drive the archive grid + the detail pages.

   A milestone's `era` matches an era `id` (used for filtering and
   for the placeholder colour behind each card).
   ============================================================ */

import e01Punchcard from './assets/eras/e01-punchcard.webp'
import e02MissionControl from './assets/eras/e02-mission-control.webp'
import e03GraphicalSpark from './assets/eras/e03-graphical-spark.webp'
import e04PointClick from './assets/eras/e04-point-click.webp'
import e05ServerFarm from './assets/eras/e05-server-farm.webp'
import e06IphoneNight from './assets/eras/e06-iphone-night.webp'
import e07FlatIcons from './assets/eras/e07-flat-icons.webp'
import e08MaterialLayers from './assets/eras/e08-material-layers.webp'
import e09FrostedGlass from './assets/eras/e09-frosted-glass.webp'
import e10Homepod from './assets/eras/e10-homepod.webp'

export const ERAS = [
  {
    id: 'foundations',
    big: '1968',
    range: '1945 – 1968',
    tag: 'Before the screen',
    title: 'The idea of the interface',
    blurb:
      'The interface was imagined long before hardware could deliver it. Vannevar Bush sketched a linked desk of knowledge, Ivan Sutherland drew directly on a screen with a light pen, and Doug Engelbart packed the mouse, windows, and hypertext into a single afternoon in 1968.',
    color: '#2B1430',
  },
  {
    id: 'desktop',
    big: '1973',
    range: '1973 – 1983',
    tag: 'Xerox PARC',
    title: 'The desktop is invented',
    blurb:
      'At Xerox PARC, research became a product idea. The Alto was the first computer built around a graphical display and a mouse; the Star turned it into the desktop metaphor — icons, folders, windows, and pointers — that we still use four decades later.',
    color: '#4C1D95',
  },
  {
    id: 'mainstream',
    big: '1984',
    range: '1984 – 1994',
    tag: 'Macintosh',
    title: 'The GUI goes mainstream',
    blurb:
      'The graphical interface left the lab. The Macintosh put it on desks with a famous ad, Windows put it on the world’s office PCs, and HyperCard let ordinary people link "cards" of media together — hypermedia before the web had a name.',
    color: '#6D28D9',
  },
  {
    id: 'web',
    big: '1995',
    range: '1995 – 2006',
    tag: 'Windows 95 & the browser',
    title: 'The web takes over',
    blurb:
      'Windows 95 fixed the desktop metaphor in the popular mind with the Start button. Then the browser quietly became the real interface: the page, the link, and the back button turned into the controls a billion people learned first.',
    color: '#8B2FC9',
  },
  {
    id: 'touch',
    big: '2007',
    range: '2007 – 2012',
    tag: 'iPhone',
    title: 'Touch changes everything',
    blurb:
      'The iPhone replaced the cursor with a finger and direct manipulation became the default. The screen could be any size, so layouts had to flex — responsive design was born — and the "app" became the unit everyone designed for.',
    color: '#B5268F',
  },
  {
    id: 'systems',
    big: '2013',
    range: '2013 – today',
    tag: 'Flat design → AI',
    title: 'Systematic, then conversational',
    blurb:
      'iOS 7 stripped the texture out of interfaces overnight and Material Design turned design into a documented system of rules and motion. Tools moved into the browser, dark mode went system-wide — and now language and generated screens are pulling the interface apart again.',
    color: '#D6409F',
  },
];

/* ============================================================
   STOPS — the 10-stop homepage timeline ("the main event").
   Each stop: big (year range), cursive (movement / evocative label),
   title, content, quote {text, who, verify?}, look (aesthetic),
   image (idea to source). Drives Timeline.jsx.
   ============================================================ */
export const STOPS = [
  {
    id: 'before-screen',
    img: e01Punchcard,
    big: '1800s–1945',
    cursive: 'Hands on the Machine',
    title: 'Before the Screen',
    content:
      'The interface is older than the computer. Before any screen, you ran machines with your hands: punch cards, typewriter keys, a telegraph tapped out in rhythm, a switchboard patched by a human operator. Every habit under your fingers today was rehearsed here first.',
    quote: { text: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.', who: 'Ada Lovelace, 1843' },
    look: 'Brass, wood, bakelite, punched paper. No glass anywhere.',
    image: 'A Jacquard loom punch card, or a wall of women working a telephone switchboard.',
  },
  {
    id: 'command-line',
    img: e02MissionControl,
    big: '1950s–1970s',
    cursive: 'Type to Speak',
    title: 'The Command Line',
    content:
      'Then the machine learned to answer. You typed a line, it typed one back. Time-sharing let a room full of people share one computer at once. Unix gave us the pipe: small tools, joined end to end. Green text, black screen, a prompt that still runs under every terminal.',
    quote: { text: '…a system around which a fellowship could form.', who: 'Dennis Ritchie, on Unix' },
    look: 'Green phosphor, monospace, a blinking cursor.',
    image: 'A DEC VT100 terminal, or a teletype machine mid-print with the paper feeding out.',
  },
  {
    id: 'graphical-spark',
    img: e03GraphicalSpark,
    big: '1963–1979',
    cursive: 'Birth of the GUI',
    title: 'The Graphical Spark',
    content:
      'The picture arrived two decades before you could buy it. Sketchpad drew on a screen with a light pen in 1963. In 1968 Engelbart demoed the mouse, windows, and links in a single sitting. Xerox built every piece of it into the Alto. Then sat on it.',
    quote: { text: '[It] makes it possible for a man and a computer to converse rapidly through line drawings.', who: 'Ivan Sutherland, 1963' },
    look: 'Vector lines on a CRT, the first crude bitmapped windows, beige lab hardware.',
    image: "Engelbart's original wooden mouse prototype, or a still from the Mother of All Demos.",
  },
  {
    id: 'point-click',
    img: e04PointClick,
    big: '1984–1995',
    cursive: 'The Desktop Metaphor',
    title: 'Point & Click',
    content:
      'Jobs saw it at Xerox and called it a gold mine. The Macintosh put a mouse on ordinary desks in 1984. Windows 95 finished the job for everyone else. Files, folders, a trash can, windows you could overlap. All of it dressed in grey beveled chrome that flat design would later rip off.',
    quote: { text: "You're sitting on a gold mine!", who: 'Steve Jobs at Xerox PARC, 1979' },
    look: 'Grey 3D chrome, beveled buttons, raised toolbars.',
    image: 'The 1984 Macintosh with its smiling-Mac boot screen, or the Windows 95 desktop with the Start menu open.',
  },
  {
    id: 'the-web',
    img: e05ServerFarm,
    big: '1989–2006',
    cursive: 'Follow the Link',
    title: 'The Web',
    content:
      'Berners-Lee wired three ideas together, a link, a page, and an address, and the most important control in computing became the underlined word. Mosaic put images beside text in 1993. Google answered with a single box in an ocean of white. Slowly, the page started behaving like software.',
    quote: { text: 'This is for everyone.', who: 'Tim Berners-Lee', verify: true },
    look: 'Glossy Web 2.0. Gradients, reflections, rounded badges, the "beta" ribbon.',
    image: 'The 1998 Google homepage, or the NCSA Mosaic browser window.',
  },
  {
    id: 'touch',
    img: e06IphoneNight,
    big: '2007–2012',
    cursive: 'Skeuomorphism',
    title: 'Touch',
    content:
      'The finger killed the stylus. The iPhone let you push pixels directly, and the App Store made the app the basic unit of software. The look was skeuomorphism: linen, leather, green felt, glossy buttons that begged to be pressed. Apple had been polishing that style since Aqua in 2000.',
    quote: { text: "We made the buttons on the screen look so good you'll want to lick them.", who: 'Steve Jobs' },
    look: 'Stitched leather, felt, brushed metal, deep gloss. Skeuomorphism at full volume.',
    image: 'The original iPhone home screen, or the iOS 6 Notes app in its yellow legal-pad and leather binding.',
  },
  {
    id: 'flat-turn',
    img: e07FlatIcons,
    big: '2013–2017',
    cursive: 'Flat Design',
    title: 'The Flat Turn',
    content:
      'Then everyone stripped it bare. Microsoft got there first with Metro in 2010: type, color, no fake texture. Apple flattened iOS 7 overnight in 2013, and the rest of the industry followed inside a year. Cleaner, faster, lighter. The cost: you could no longer always tell what was a button.',
    quote: { text: 'Authentically digital.', who: "Microsoft's Metro design principles", verify: true },
    look: 'Solid color fields, bold type, hard edges, lots of air. No gradients, no shadows.',
    image: 'An iOS 6 vs iOS 7 side-by-side of the same screen.',
  },
  {
    id: 'systems-material',
    img: e08MaterialLayers,
    big: '2014–2019',
    cursive: 'Material Design',
    title: 'Systems & Material',
    content:
      'Google put depth back, on purpose. Material Design treated the screen like layered paper, with light, shadow, and motion that followed rules. The bigger change was underneath. Design stopped being screens you draw and became systems you maintain: tokens, components, docs. Carbon, Polaris, Lightning. The job itself changed.',
    quote: { text: 'Seams and shadows provide meaning about what you can touch.', who: 'Matías Duarte, 2014' },
    look: 'Paper layers, ink-ripple touches, elevation shadows, one bold accent color.',
    image: 'A Material elevation/shadow spec diagram, or a real design-system component library laid out in Figma.',
  },
  {
    id: 'surface-returns',
    img: e09FrostedGlass,
    big: '2018–2024',
    cursive: 'Glassmorphism',
    title: 'The Surface Returns',
    content:
      'Fashion took the wheel. Dark mode became a setting every app suddenly owed you. Neumorphism tried soft extruded shapes and mostly failed the contrast test. Glassmorphism brought back frosted, blurred panels, lifted straight from Aqua. Brutalism revolted against all of it. Bento boxed everything into tidy grids.',
    quote: null,
    look: 'Frosted translucent panels, heavy blur, soft inner shadows, boxed modular grids.',
    image: 'A macOS Big Sur or Windows 11 panel showing the frosted-glass effect, or a clean neumorphism UI sample.',
  },
  {
    id: 'beyond-cursor',
    img: e10Homepod,
    big: '2011–now',
    cursive: 'Just Ask',
    title: 'Beyond the Cursor',
    content:
      'Now the cursor is dissolving. Siri, then Alexa, made voice the whole interface. ChatGPT turned a text box into a tool for almost anything. Vision Pro put the screen in the air, driven by your eyes and hands. Fifty years of point-and-click, quietly undone by typing words at a machine again.',
    quote: { text: 'The best way to predict the future is to invent it.', who: 'Alan Kay, PARC, 1971', verify: true },
    look: 'The screenless and the spatial. A chat field, a voice waveform, windows floating in a room.',
    image: 'The Vision Pro spatial interface, or a clean shot of a conversational UI.',
  },
];

/* ============================================================
   ERA_PAGES — deep-dive content for /era/:id, keyed by STOPS id.
   Eras without an entry render the hero + a "being written" note,
   so prev/next navigation always works. Era 1 is the template.
   Facts drawn from RESEARCH-BRIEF.md (verified claims only).
   ============================================================ */
export const ERA_PAGES = {
  'before-screen': {
    why: [
      'The interface is older than the computer by a full century. People pressed keys, punched holes, and patched cables for a hundred years before the first screen switched on. When computers finally arrived, they did not invent new habits: they borrowed these.',
      'Almost everything your hands do today was rehearsed here. The keyboard layout you type on was settled in the 1870s, to stop typewriter arms from jamming. It outlived the jam, the arms, and the typewriter itself.',
    ],
    contained: [
      { t: 'The punch card', d: 'Jacquard’s loom read woven patterns from punched cards. Babbage planned to feed his Analytical Engine with them in 1837. Hollerith counted the 1890 US Census with them, and his company grew into IBM.' },
      { t: 'The typewriter', d: 'Christopher Latham Sholes sold his machine to Remington in the 1870s, and QWERTY spread with it. The layout was arranged to keep metal typebars from tangling, not to slow typists down. That part is a myth.' },
      { t: 'The telegraph', d: 'One key, and meaning carried in rhythm. Morse code was the first time people spoke to a machine in the machine’s own language.' },
      { t: 'The switchboard and the dial', d: 'For decades the phone network’s interface was a person: an operator patching cables by hand. The rotary dial handed her work to you, and quietly ended the job.' },
      { t: 'The cockpit', d: 'In WWII, trained pilots kept crashing planes because two identical levers sat side by side. Researchers realised "pilot error" was often design error. Human factors, the ancestor of UX, begins here.' },
      { t: 'The Memex', d: 'In 1945 Vannevar Bush described a desk that linked documents by association, trails of thought you could follow later. It was never built. It only inspired hypertext, the mouse, and the web.' },
    ],
    ui: [
      'The interface of this era was entirely physical. Input was force: keys pressed, levers pulled, holes punched, dials turned. Feedback was mechanical: a bell at the end of the line, a click for every digit, ink on paper.',
      'And where the machine could not cope, the interface was a human being. The switchboard operator and the punch-card clerk stood between you and the system, translating your intent into its language. The first UI was a person.',
    ],
    notable: [
      { t: 'QWERTY, 1874', d: 'The oldest interface still in daily use. A better layout was proven in the 1930s (Dvorak) and ignored. Habit beat optimisation, and it still does.' },
      { t: 'The punch card, 1804 to the 1960s', d: 'The original programming interface. For most of computing’s first century, writing software meant holes in cardboard.' },
      { t: 'The rotary dial', d: 'The first self-service interface. It turned every caller into the operator.' },
      { t: 'Fitts’s law, 1954', d: 'Paul Fitts, an aviation psychologist, measured how long it takes to hit a target of a given size at a given distance. It grew straight out of this era’s cockpit work, and every button on your phone still obeys it.' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1524668951403-d44b28200ce0?auto=format&fit=crop&w=1400&q=60', cap: 'The typewriter: QWERTY’s first home, and the reason your keyboard looks the way it does.' },
      { img: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1400&q=60', cap: 'The telephone: for most people, the first machine they talked through.' },
      { img: 'https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&w=1400&q=60', cap: 'Dials, hands, and bells: feedback you could hear and feel.' },
    ],
    sources: [
      { label: 'Computer History Museum: Punched cards control Jacquard loom', url: 'https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/' },
      { label: 'IBM Archives: The punched card tabulator', url: 'https://www.ibm.com/history/punched-card-tabulator' },
      { label: 'Smithsonian Magazine: where the QWERTY keyboard came from', url: 'https://www.smithsonianmag.com/history/the-qwerty-keyboard-will-never-die-where-did-the-150-year-old-design-come-from-49863249/' },
      { label: 'UX Magazine: Pilot error? Chapanis and the shape of things to come', url: 'https://uxmag.com/articles/pilot-error-chapanis-and-the-shape-of-things-to-come' },
      { label: 'Vannevar Bush, "As We May Think", The Atlantic, 1945', url: 'https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/' },
      { label: 'Era photo: IBM 029 keypunch by Joe Mabel, CC BY-SA 3.0', url: 'https://commons.wikimedia.org/wiki/File:LCM_-_IBM_029_Card_Punch_01.jpg' },
    ],
  },

  'command-line': {
    why: [
      'This is the era the conversation started. Before it, you handed a deck of cards to an operator and came back hours later for a printout. The machine never spoke to you. Then time-sharing arrived, and for the first time you typed a line and the computer typed one back, while you waited. That loop, ask and answer, is still the deep grammar of every interface.',
      'It is also the era that refuses to die. The prompt outlived the teletype, the terminal, and every fashion that followed. Fifty years later, every developer still lives part of the day inside a descendant of this screen.',
    ],
    contained: [
      { t: 'Batch processing', d: 'You queued your punch cards, an operator fed the machine, and the answer came back on paper, hours later. Computing without interaction: the thing this era exists to fix.' },
      { t: 'The teletype', d: 'A repurposed telegraph printer became the computer’s first mouth and ears. You typed, it clattered back. The name survives in every Unix system as "tty".' },
      { t: 'Time-sharing, 1961', d: 'CTSS at MIT, demonstrated in November 1961 by Fernando Corbató’s team, let four people use one computer at once, each feeling alone with it. Corbató got the Turing Award for it.' },
      { t: 'Unix, 1969', d: 'Born at Bell Labs after the Multics project collapsed, first on a cast-off PDP-7 that Ken Thompson had been using to run a space game. Dennis Ritchie wanted more than an OS: a system a fellowship could form around.' },
      { t: 'The pipe, 1972', d: 'Doug McIlroy insisted, and Unix got its most elegant idea: small tools joined end to end, each feeding the next. Fifty years on, it is still how command lines think.' },
      { t: 'The VT100, 1978', d: 'The terminal that standardised the text screen: 80 columns, escape codes, a blinking cursor. Emulated to this day by the window your terminal runs in.' },
    ],
    ui: [
      'The interface was a conversation in plain text. You typed a command, the machine answered or complained, and the prompt returned, blinking, waiting for you. No pictures, no pointer: just language, memory, and patience.',
      'It demanded expertise and gave power back. The command line assumed you knew what to say, and rewarded you with the ability to say anything. Every era after this one trades some of that power for approachability.',
    ],
    notable: [
      { t: 'CTSS, 1961', d: 'The first serious demonstration that a computer could hold many conversations at once. Interactivity begins here.' },
      { t: 'The Unix shell', d: 'A programming language you live inside. The idea that the interface itself is programmable never appeared again at this scale.' },
      { t: 'The pipe', d: 'One character, |, encoding a whole philosophy: do one thing well, and compose.' },
      { t: 'The blinking cursor', d: 'The oldest surviving piece of screen UI. It has been asking the same question since the 1960s: your move.' },
    ],
    gallery: [
      { img: 'https://images-assets.nasa.gov/image/s70-35368/s70-35368~orig.jpg', cap: 'Mission Control, Apollo 13, 1970: rooms full of consoles, every screen a text screen.' },
      { img: 'https://images.pexels.com/photos/9951077/pexels-photo-9951077.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Green phosphor: the colour of computing for two decades.' },
      { img: 'https://images.pexels.com/photos/37787963/pexels-photo-37787963.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The keyboard inherits everything: the terminal made typing the whole interface.' },
    ],
    sources: [
      { label: 'ACM A.M. Turing Award: Fernando J. Corbató, 1990', url: 'https://amturing.acm.org/award_winners/corbato_1009471.cfm' },
      { label: 'Dennis Ritchie, "The Evolution of the Unix Time-sharing System", 1984', url: 'https://www.cis.upenn.edu/~lee/07cis505/Papers/ritchie-bstj84.pdf' },
      { label: 'Computer History Museum: the earliest Unix code', url: 'https://computerhistory.org/blog/the-earliest-unix-code-an-anniversary-source-code-release/' },
      { label: 'Multicians: the IBM 7094 and CTSS', url: 'https://www.multicians.org/thvv/7094.html' },
    ],
  },

  'graphical-spark': {
    why: [
      'Everything you recognise on a screen today was invented in this window, mostly before 1970, almost none of it for sale. Sketchpad drew with light in 1963. Engelbart showed the mouse, windows, and links in one sitting in 1968. Xerox PARC put the whole picture together in the Alto by 1973, then famously failed to sell it.',
      'It matters because it proves the pattern this whole site keeps finding: interfaces are not invented once, by one person. They are passed between labs like a long argument, and the people who finish the argument are rarely the ones who started it.',
    ],
    contained: [
      { t: 'Sketchpad, 1963', d: 'Ivan Sutherland’s MIT thesis, supervised by Claude Shannon. You drew on the screen with a light pen and the drawing obeyed rules. Sutherland called it a way for people and computers to converse.' },
      { t: 'The mouse, 1964', d: 'Conceived by Doug Engelbart at SRI, prototyped by Bill English in a wooden case. Patented as an "X-Y position indicator". A German team at Telefunken built a rolling-ball version independently: the argument was already collective.' },
      { t: 'The Mother of All Demos, 1968', d: 'On 9 December 1968 Engelbart demonstrated the mouse, windows, hypertext links, live collaboration, and video conferencing in ninety minutes. Most of it took twenty more years to ship.' },
      { t: 'The Xerox Alto, 1973', d: 'The first machine that combined a bitmapped display, a mouse, windows, WYSIWYG editing, Ethernet, and email in one box. Never sold commercially. Its ideas escaped anyway.' },
      { t: 'Smalltalk', d: 'Alan Kay’s team at PARC built the software culture the Alto needed: overlapping windows, menus, and the idea that anyone, even children, should be able to shape the machine.' },
    ],
    ui: [
      'The interface became a picture. Instead of remembering a command you pointed at a thing, and the thing responded. Direct manipulation, the idea that you touch what you change, starts in this lab hardware.',
      'But it was still years from ordinary hands: room-sized budgets, beige lab machines, screens that only researchers ever saw. This era invented the future and then sat on it, which is exactly why the next era happened.',
    ],
    notable: [
      { t: 'Sketchpad, 1963', d: 'The first time a human drew with a computer and the computer understood the drawing. Interactive graphics, constraints, even object-like instances: all here.' },
      { t: 'NLS at the 1968 demo', d: 'The mouse’s public debut, and hypertext working live on stage decades before the web.' },
      { t: 'The Alto, 1973', d: 'The complete GUI, a decade early. Windows and icons, though the full desktop metaphor of files and folders was formalised later, for the Xerox Star.' },
    ],
    gallery: [
      { img: 'https://images-assets.nasa.gov/image/S71-17122/S71-17122~orig.jpg', cap: 'The state of the art, early 1970s: CRTs, consoles, and rooms built around machines.' },
      { img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=60', cap: 'Phosphor and vectors: what screens looked like before the bitmap won.' },
    ],
    sources: [
      { label: 'Computer History Museum: the remarkable Ivan Sutherland', url: 'https://computerhistory.org/blog/the-remarkable-ivan-sutherland/' },
      { label: 'Ivan Sutherland, "Sketchpad: A Man-Machine Graphical Communication System", 1963', url: 'https://www.cl.cam.ac.uk/~pr10/iui/sutherland63.pdf' },
      { label: 'SRI: the computer mouse and interactive computing', url: 'https://www.sri.com/hoi/computer-mouse-and-interactive-computing/' },
      { label: 'Internet Hall of Fame: Engelbart’s Mother of All Demos', url: 'https://www.internethalloffame.org/2015/05/05/engelbarts-mother-all-demos/' },
      { label: 'IEEE Spectrum: the Xerox Alto', url: 'https://spectrum.ieee.org/xerox-alto' },
    ],
  },

  'point-click': {
    why: [
      'This is the era the graphical interface left the lab and moved in with everyone. The Macintosh put the mouse on ordinary desks in 1984, Windows put it in every office, and Windows 95 finished the job with a Start button and a launch campaign scored by the Rolling Stones. By the end of it, "the computer" simply looked like this.',
      'It is also where the great creation myth lives. Yes, Jobs toured Xerox PARC in 1979 and called it a gold mine. But the Mac team invented plenty PARC never had: drag-and-drop file handling, in-place renaming, desk accessories, control panels. Lineage, as ever, not larceny alone.',
    ],
    contained: [
      { t: 'The Xerox Star, 1981', d: 'The first commercial desktop metaphor: David Canfield Smith’s icons, folders, and overlapping windows. It cost $16,000 a seat and flopped. The template survived the product.' },
      { t: 'Apple Lisa, 1983', d: 'Pull-down menus, drag-and-drop, and the trash can reach the market. At $9,995 it failed too. The dress rehearsal for the Mac.' },
      { t: 'Macintosh, 1984', d: 'Announced by the "1984" Super Bowl ad. The first commercially successful GUI computer: the desktop metaphor, finally at a desk-sized price.' },
      { t: 'Windows 1 to 95', d: 'Microsoft’s long march: tiled windows in 1985, the breakout with 3.0 in 1990, and in 1995 the Start button, the taskbar, and the tray. The look a generation means by "computer".' },
      { t: 'HyperCard, 1987', d: 'Bill Atkinson’s "programming for the rest of us": stacks of linked cards anyone could build. It taught a generation hypermedia and left fingerprints on JavaScript and the early web.' },
      { t: 'NeXTSTEP, 1989', d: 'Jobs in exile builds the polished object-oriented GUI, with a dock and Interface Builder. Its bones became macOS and iOS. The first web browser was written on one.' },
    ],
    ui: [
      'Files, folders, windows, a trash can: the desktop metaphor asked you to believe the screen was a tidy office, and the belief worked. Point, click, drag. Double-click to open. Nothing needed remembering because everything could be seen.',
      'The look was grey beveled chrome: buttons that bulged, toolbars that cast little shadows, edges pretending to be machined metal. Skeuomorphism before the word was fashionable, and the exact texture flat design would later strip away.',
    ],
    notable: [
      { t: 'The menu bar and the trash can', d: 'The Lisa and Mac conventions that made destructive actions visible and reversible. Attribution is genuinely contested, which is half the story of this era.' },
      { t: 'The Start button, 1995', d: 'One word in a corner that taught a billion people where everything begins. Possibly the most-clicked pixel in history.' },
      { t: 'HyperCard stacks', d: 'Ordinary people linking cards of text and pictures years before the web. The web’s first browsers borrowed the idea openly.' },
      { t: 'The double-click', d: 'A tiny grammar rule, select versus open, that everyone on earth quietly memorised.' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1400&q=60', cap: 'Files and folders came from somewhere: information as physical cards, waiting for a metaphor.' },
      { img: 'https://images.pexels.com/photos/13570135/pexels-photo-13570135.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The machine as object of desire: industrial design becomes part of the interface.' },
    ],
    sources: [
      { label: 'Bruce Horn: On Xerox, Apple and progress (folklore.org)', url: 'https://folklore.org/On_Xerox,_Apple_and_Progress.html' },
      { label: 'The New Yorker: Creation myth. Xerox PARC, Apple, and the truth about innovation', url: 'https://www.newyorker.com/magazine/2011/05/16/creation-myth' },
      { label: 'Computer History Museum: input and output, the desktop', url: 'https://www.computerhistory.org/revolution/input-output/14/347' },
      { label: 'Wikipedia: history of the graphical user interface', url: 'https://en.wikipedia.org/wiki/History_of_the_graphical_user_interface' },
    ],
  },

  'the-web': {
    why: [
      'One person at CERN wired three ideas together, the link, the page, and the address, and the most important control in computing became an underlined word. Tim Berners-Lee proposed it in March 1989, had the first site running by the end of 1990, and gave it away. The interface stopped being something you bought in a box.',
      'Then the page slowly learned to behave like software. Mosaic put images beside text in 1993 and the web became something you would show your family. Google reduced the whole thing to one box in an ocean of white. Gmail and AJAX made pages update without reloading, and the line between site and application quietly dissolved.',
    ],
    contained: [
      { t: 'The proposal, 1989', d: '"Information Management: A Proposal", 12 March 1989. His boss wrote "vague but exciting" on the cover. URL, HTML, HTTP: three inventions wired into one.' },
      { t: 'The first browser, 1990', d: 'Berners-Lee built WorldWideWeb on a NeXT machine over Christmas 1990. It was an editor as much as a browser: the read-only web came later, by accident.' },
      { t: 'Mosaic, 1993', d: 'Andreessen and Bina at NCSA put images inline with text and made installation painless. Historians mark it as the turning point: the web became visual, and then it became popular.' },
      { t: 'The Google homepage, 1998', d: 'One search box in acres of white, while every rival portal was a wall of links. A radical act of restraint that taught a generation an interface could be almost nothing.' },
      { t: 'Web 2.0 and AJAX', d: 'Named by the O’Reilly crowd in 2004: the web as platform, users as authors. Gmail and Google Maps updated the page in place, and web pages started feeling like applications.' },
      { t: 'The browser wars', d: 'Netscape against Internet Explorer, features against bundling. IE won the battle, lost the war, and web standards were the peace treaty.' },
    ],
    ui: [
      'The interface of this era is the link: blue, underlined, and honest about being clickable. Add the back button and the address bar and you have the whole survival kit a billion people learned first.',
      'The look aged from grey pages with blue links into glossy Web 2.0: gradients, reflections, rounded badges, a "beta" ribbon on everything. Skeuomorphism’s web cousin, pixels pretending to be candy.',
    ],
    notable: [
      { t: 'The hyperlink', d: 'The most important control in computing since the button. Bush imagined it, Nelson named it, Berners-Lee shipped it.' },
      { t: 'The back button', d: 'The web’s undo. The single most reassuring control ever put in front of beginners: whatever happens, you can always go back.' },
      { t: 'The search box, 1998', d: 'Google proved that the best interface to everything might be an empty rectangle.' },
      { t: 'The URL', d: 'An address for every page ever made. Ugly, fragile, and one of the great open standards of history.' },
    ],
    gallery: [
      { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=60', cap: 'The network made visible: the web put an address on everything, everywhere.' },
      { img: 'https://images.pexels.com/photos/17489151/pexels-photo-17489151.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The web has a body: it lives in racks like these.' },
      { img: 'https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Every link resolves to a machine humming in a room like this one.' },
    ],
    sources: [
      { label: 'CERN: a short history of the web', url: 'https://home.cern/science/computing/birth-web/short-history-web' },
      { label: 'W3C, Tim Berners-Lee: the WorldWideWeb browser', url: 'https://www.w3.org/People/Berners-Lee/WorldWideWeb.html' },
      { label: 'Tim O’Reilly: What is Web 2.0 (2005)', url: 'https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html' },
      { label: 'Wikipedia: history of the World Wide Web', url: 'https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web' },
    ],
  },

  'touch': {
    why: [
      'The finger killed the stylus, and the cursor with it. When the iPhone arrived in 2007 you pushed the pixels themselves: no pointer, no abstraction, just direct manipulation finally meaning what it said. The screen could now be any size, so design had to learn to flex, and the app became the unit software came in.',
      'The look of this era was skeuomorphism at full volume: stitched leather calendars, green felt game tables, glossy buttons that begged to be pressed. Apple had been polishing that instinct since Aqua in 2000, when Jobs bragged the buttons looked good enough to lick. It was warm, it was legible, and its days were numbered.',
    ],
    contained: [
      { t: 'Aqua, 2000', d: 'Mac OS X’s water-themed interface: translucency, droplets, gel buttons. The aesthetic that trained users to expect interfaces to feel physical.' },
      { t: 'The iPhone, 2007', d: 'Capacitive multitouch, announced 9 January 2007. Pinch, swipe, and flick entered the world’s muscle memory within a year.' },
      { t: 'The App Store, 2008', d: 'Opened 10 July 2008 with about 500 apps. It made the app the dominant unit of software and built an economy around the home screen.' },
      { t: 'Android, 2008', d: 'The open counterweight. It put a touch interface in most of the world’s pockets and set up the design-system decade that followed.' },
      { t: 'Emoji and i-mode, 1999', d: 'Japan got the mobile internet first. Shigetaka Kurita’s 176 tiny pictures for NTT DoCoMo became a global written language, 12 pixels at a time.' },
      { t: 'Responsive web design, 2010', d: 'Ethan Marcotte’s essay gave the flexible screen a method: fluid grids, flexible images, media queries. One layout, every size.' },
    ],
    ui: [
      'Touch removed the last translation layer. Nothing stood between your hand and the object on screen, so interfaces leaned hard on physicality: momentum scrolling, rubber-band bounces, pages you flicked like paper.',
      'And because a fingertip is fat and imprecise, everything grew: targets, spacing, type. Fitts’s law, written in 1954 for cockpit levers, suddenly governed the size of every button on earth again.',
    ],
    notable: [
      { t: 'Pinch to zoom', d: 'The gesture that sold multitouch to the world in a single demo moment.' },
      { t: 'Momentum scrolling', d: 'The scroll that keeps moving after your finger leaves. Half the reason touch felt alive.' },
      { t: 'The home screen grid', d: 'Icons in rows, apps as objects. The desktop metaphor reborn at thumb scale.' },
      { t: 'The iOS 6 Notes app', d: 'Yellow legal paper and stitched leather: the high-water mark of skeuomorphism, and the first thing flat design deleted.' },
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/9558002/pexels-photo-9558002.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The camera that replaced the camera: the phone becomes the lens on everything.' },
      { img: 'https://images.pexels.com/photos/365194/pexels-photo-365194.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The home screen grid: apps as objects, arranged like belongings.' },
      { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=60', cap: 'One hand, one thumb: the posture the whole industry redesigned itself around.' },
    ],
    sources: [
      { label: 'Apple Newsroom: the App Store turns 10', url: 'https://www.apple.com/newsroom/2018/07/app-store-turns-10/' },
      { label: 'Computer History Museum: Little emoji, big story', url: 'https://computerhistory.org/exhibits/little-emoji-big-story/' },
      { label: 'Ethan Marcotte, "Responsive Web Design", A List Apart, 2010', url: 'https://alistapart.com/article/responsive-web-design/' },
      { label: '512 Pixels: 20 years of Aqua', url: 'https://512pixels.net/2020/01/20-years-of-aqua/' },
    ],
  },

  'flat-turn': {
    why: [
      'Then everyone stripped it bare. And, against the popular memory, Microsoft got there first: the typography-led, texture-free look ran through Media Center in 2002 and the Zune in 2006 before being named Metro for Windows Phone 7 in 2010. "Authentically digital" was the pitch: stop pretending pixels are leather.',
      'Apple made it mainstream overnight. iOS 7, unveiled in June 2013 after skeuomorphism’s champion Scott Forstall left, deleted the felt and stitching in one release. Within a year the entire industry had flattened. Cleaner, faster, lighter, and with one honest cost: you could no longer always tell what was a button.',
    ],
    contained: [
      { t: 'Metro, 2010', d: 'Microsoft’s design language for Windows Phone 7: big type, solid colour, live tiles, no chrome. Later renamed, widely imitated, rarely credited.' },
      { t: 'iOS 7, 2013', d: 'Jony Ive’s overhaul: thin type, white space, translucency and parallax instead of texture. Announced June, shipped September, copied by everyone by Christmas.' },
      { t: 'Windows 8, 2012', d: 'The tile experiment at desktop scale. Divisive as an OS, decisive as a signal: flat had won the argument.' },
      { t: 'The flattening of the web', d: 'Buttons lost their gradients, icons lost their gloss, and whole redesigns shipped whose only feature was the removal of decoration.' },
      { t: 'The great icon diet', d: 'Logos and glyphs everywhere were redrawn as geometry: simpler shapes, fewer colours, no shadows. Brand identity followed the OS.' },
    ],
    ui: [
      'Flat design is an interface on a diet: colour fields, typography, and white space doing the work that bevels and shadows used to do. At its best it is calm and fast and lets content lead.',
      'At its worst it is a guessing game. Strip every affordance and a label, a link, and a button look identical. The industry spent the next decade quietly re-adding cues it had proudly deleted, which is precisely how the next era begins.',
    ],
    notable: [
      { t: 'Live tiles, 2010', d: 'Metro’s big idea: the icon as a small living dashboard. It lost the war but predicted widgets everywhere.' },
      { t: 'The iOS 6 to iOS 7 jump', d: 'The single clearest before-and-after in modern UI. Same phone, same apps, different century.' },
      { t: 'The hamburger menu', d: 'Three lines hiding everything. Flat design’s most contagious and most argued-about invention.' },
      { t: 'Thin type everywhere', d: 'Helvetica Neue Ultra Light at 100 weight: elegance first, readability later, glasses prescriptions eventually.' },
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'The flat grid: icons reduced to coloured geometry.' },
      { img: 'https://images.pexels.com/photos/3850263/pexels-photo-3850263.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'After the diet: colour and type doing all the work.' },
      { img: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1400&q=60', cap: 'The gradient survived, barely: as a backdrop, not a button.' },
    ],
    sources: [
      { label: 'Wikipedia: Metro (design language)', url: 'https://en.wikipedia.org/wiki/Metro_(design_language)' },
      { label: 'Wikipedia: flat design', url: 'https://en.wikipedia.org/wiki/Flat_design' },
      { label: 'Nielsen Norman Group: flat design and its usability costs', url: 'https://www.nngroup.com/articles/flat-design/' },
      { label: 'Dezeen: Apple unveils iOS 7, June 2013', url: 'https://www.dezeen.com/2013/06/10/apple-unveils-flat-design-ios7-jonathan-ive/' },
    ],
  },

  'systems-material': {
    why: [
      'Google put the depth back on purpose. Material Design, announced at I/O in June 2014, treated the screen as layered paper: surfaces at elevations, shadows that mean something, motion that follows rules. Matías Duarte’s line summed up the correction to flat design: seams and shadows tell you what you can touch.',
      'The bigger change happened underneath the pixels. Design stopped being screens you draw and became systems you maintain: tokens, components, documentation. Carbon at IBM, Lightning at Salesforce, Polaris at Shopify. The deliverable changed from a picture to a rulebook, and the job itself changed with it.',
    ],
    contained: [
      { t: 'Material Design, 2014', d: 'Not a look but a physics: paper surfaces, real shadows from real elevation, ink-ripple feedback. Codenamed Quantum Paper, shipped with Android Lollipop.' },
      { t: 'The design system era', d: 'Material, Apple’s HIG, Carbon, Polaris, Lightning, Atlassian. Every serious company wrote its own constitution for screens.' },
      { t: 'Design tokens', d: 'Colours, spacing, and type reduced to named variables shared by designers and code. The pixel argument ended in a JSON file.' },
      { t: 'Figma, 2016', d: 'Design moved into the browser and became multiplayer. The file stopped being a file and became a place.' },
      { t: 'Component libraries', d: 'Buttons, cards, and dialogs built once and reused everywhere. Consistency stopped depending on memory.' },
    ],
    ui: [
      'Material gave flat design its physics back: a card is above the page, a dialog is above the card, and the shadows say so. Motion carried meaning too, with elements entering and leaving like objects, not slides.',
      'For working designers the interface became the system itself. You no longer drew a screen, you assembled one from sanctioned parts, and the craft moved into naming, documenting, and governing those parts.',
    ],
    notable: [
      { t: 'The floating action button', d: 'Material’s signature: one bold circle claiming the screen’s most important act.' },
      { t: 'Elevation and shadow', d: 'Depth as information, not decoration. The correction flat design needed.' },
      { t: 'The ink ripple', d: 'Touch feedback as physics: your tap visibly spreads through the surface.' },
      { t: 'The component library', d: 'The UI equivalent of standard parts. Less romantic than hand-drawn screens, and the reason products stopped falling apart.' },
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/20085502/pexels-photo-20085502.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Paper as a metaphor you can photograph: surfaces, curves, and real shadows.' },
      { img: 'https://images.pexels.com/photos/4258830/pexels-photo-4258830.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Layers with opinions: every surface at its own elevation.' },
      { img: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1400&q=60', cap: 'The system palette: one bold accent doing a lot of governed work.' },
    ],
    sources: [
      { label: 'Wikipedia: Material Design', url: 'https://en.wikipedia.org/wiki/Material_Design' },
      { label: 'Android Developers Blog: Material Design, 2014', url: 'https://android-developers.googleblog.com/2014/08/material-design-in-2014-google-io-app.html' },
      { label: 'Material Design guidelines', url: 'https://m3.material.io/' },
      { label: 'IBM Carbon, Shopify Polaris, Salesforce Lightning: design systems', url: 'https://carbondesignsystem.com/' },
    ],
  },

  'surface-returns': {
    why: [
      'After a decade of flatness, fashion took the wheel and surfaces came back. Dark mode became a setting every app suddenly owed you, shipped system-wide by Apple and Google in 2018 and 2019. Frosted, blurred panels returned in macOS Big Sur and Windows 11, a look the internet named glassmorphism, lifted straight from Aqua’s translucency.',
      'The era argued with itself in public. Neumorphism tried soft extruded shapes and mostly failed the contrast test within a year. Brutalism revolted against the polish of design systems with raw HTML honesty. Bento grids boxed everything into tidy compartments. No single style won, which is itself the story: the industry now changes skins like seasons.',
    ],
    contained: [
      { t: 'System dark mode, 2018-2019', d: 'macOS Mojave, then iOS 13 and Android 10. Overnight, every interface was expected to be themeable, and "one look" stopped being enough.' },
      { t: 'Neumorphism, 2020', d: 'Soft UI: elements extruded from the background like moulded plastic. Beautiful in screenshots, brutal on contrast and accessibility. A useful cautionary tale.' },
      { t: 'Glassmorphism', d: 'Frosted translucency, background blur, thin light borders. Big Sur and Windows 11 made it official; Aqua veterans felt déjà vu.' },
      { t: 'Web brutalism', d: 'Default fonts, hard edges, visible structure. A protest against sameness: if every product uses the same system, ugliness becomes a brand.' },
      { t: 'Bento grids', d: 'Content boxed into modular compartments, named after the lunchbox. Apple’s marketing pages made it the default layout of the 2020s.' },
    ],
    ui: [
      'Surfaces learned tricks again: blur that implies depth, translucency that implies context, soft shadows that imply touchability. But this time on top of systems, tokens, and accessibility audits, so every effect ships with a fallback.',
      'The deeper shift is that appearance became a preference. Light or dark, reduced motion, high contrast: the interface stopped having one true face, and design became the art of holding many faces together.',
    ],
    notable: [
      { t: 'Dark mode toggles', d: 'The most user-visible design event of the decade: the same app, twice.' },
      { t: 'Big Sur’s frosted panels, 2020', d: 'Glassmorphism goes system-wide, twenty years after Aqua first made pixels look wet.' },
      { t: 'The neumorphism debate, 2020', d: 'A style rose and fell in about a year, in public, on Dribbble. Fashion cycles now move faster than OS releases.' },
      { t: 'The bento homepage', d: 'Every product page a lunchbox of little cards. Tidy, scannable, and instantly everywhere.' },
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/10873994/pexels-photo-10873994.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Frost as an interface material: blur implies what is behind.' },
      { img: 'https://images.pexels.com/photos/36810858/pexels-photo-36810858.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Translucency with structure: panels you can almost see through.' },
      { img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=60', cap: 'The surface argument: iridescence, depth, and light as decoration again.' },
    ],
    sources: [
      { label: 'Apple Newsroom: macOS Mojave introduces dark mode, 2018', url: 'https://www.apple.com/newsroom/2018/09/macos-mojave-available-today/' },
      { label: 'Michal Malewicz: Neumorphism in user interfaces', url: 'https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6' },
      { label: 'Nielsen Norman Group: dark mode', url: 'https://www.nngroup.com/articles/dark-mode/' },
      { label: 'Wikipedia: glassmorphism and design trends', url: 'https://en.wikipedia.org/wiki/Glassmorphism' },
    ],
  },

  'beyond-cursor': {
    why: [
      'Now the cursor itself is dissolving. Siri in 2011 and Alexa in 2014 made voice a whole interface: no screen, no pointer, just a request spoken into a room. ChatGPT in 2022 turned a text box into a tool for almost anything, and suddenly the frontier of interface design was a conversation again.',
      'Which is where this whole story started. The first users typed plain language at a machine and waited for its answer. Fifty years of pointing, clicking, and touching later, the newest interface on earth is once more an empty line waiting for your words. The history of UI is not a straight line. It is a spiral.',
    ],
    contained: [
      { t: 'Siri, 2011', d: 'Born from SRI’s DARPA-funded CALO research and bought by Apple: the first mainstream attempt to make talking to a computer normal.' },
      { t: 'Alexa and the Echo, 2014', d: 'Voice as the entire product. A cylinder in the kitchen with no screen at all, and the interface was the room itself.' },
      { t: 'ChatGPT, 2022', d: 'Released 30 November 2022. A single text field that writes, explains, plans, and codes. The fastest-adopted interface pattern in computing history.' },
      { t: 'Spatial computing', d: 'Vision Pro, 2024: windows floating in your room, driven by your eyes and pinched fingers. The desktop metaphor, unboxed into physical space.' },
      { t: 'Generative UI', d: 'Interfaces that assemble themselves in answer to a request. The screen stops being designed in advance and starts being composed on demand.' },
    ],
    ui: [
      'The interface is becoming intent. You say what you want, in your own words, and the system negotiates the how. The controls that defined fifty years of design, menus, buttons, windows, become optional surfaces the machine can generate when useful.',
      'What replaces the cursor is attention itself: your voice, your gaze, your context. The open question of this era is honesty. A button showed you what was possible. A blank text box promises everything, and shows you nothing.',
    ],
    notable: [
      { t: 'The wake word', d: '"Hey Siri", "Alexa": an interface you enter by name, with no visible edge at all.' },
      { t: 'The chat box, 2022', d: 'One rectangle for every task. The command line’s grandchild, wearing plain English.' },
      { t: 'Look and pinch, 2024', d: 'Vision Pro made your eyes the pointer and your fingers the click. Fitts’s law, meet eye tracking.' },
      { t: 'The prompt', d: 'The word itself came full circle: from the blinking cursor of the 1960s to the sentence you type at a model today.' },
    ],
    gallery: [
      { img: 'https://images.pexels.com/photos/14309805/pexels-photo-14309805.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'An interface with no screen: the light ring is the entire UI.' },
      { img: 'https://images.pexels.com/photos/5380589/pexels-photo-5380589.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Green text again: the conversation returns, this time with the machine answering fluently.' },
      { img: 'https://images.pexels.com/photos/14309813/pexels-photo-14309813.jpeg?auto=compress&cs=tinysrgb&w=1400', cap: 'Ambient computing: devices designed to be spoken to, not looked at.' },
    ],
    sources: [
      { label: 'SRI: the origins of Siri', url: 'https://www.sri.com/hoi/siri/' },
      { label: 'OpenAI: introducing ChatGPT, November 2022', url: 'https://openai.com/index/chatgpt/' },
      { label: 'Apple Newsroom: Apple Vision Pro', url: 'https://www.apple.com/newsroom/2024/01/apple-vision-pro-available-in-the-us-on-february-2/' },
      { label: 'Wikipedia: Amazon Echo', url: 'https://en.wikipedia.org/wiki/Amazon_Echo' },
    ],
  },
};

export const MILESTONES = [
  /* ── Foundations ───────────────────────────────────────── */
  {
    slug: 'memex',
    year: 1945,
    title: 'The Memex',
    category: 'Concept',
    maker: 'Vannevar Bush',
    era: 'foundations',
    description:
      'In the essay "As We May Think," Bush imagined a desk that stored a person’s books and notes on microfilm and let them build "associative trails" between any two pieces. Nothing was built, but the idea of linking documents seeded everything from hypertext to the web.',
  },
  {
    slug: 'sketchpad',
    year: 1963,
    title: 'Sketchpad',
    category: 'Graphics',
    maker: 'Ivan Sutherland (MIT)',
    era: 'foundations',
    description:
      'Sutherland’s PhD thesis let a person draw directly on a screen with a light pen and manipulate shapes that obeyed constraints. It is widely considered the first graphical user interface and the birth of interactive computer graphics.',
  },
  {
    slug: 'mother-of-all-demos',
    year: 1968,
    title: 'The Mother of All Demos',
    category: 'Demo',
    maker: 'Douglas Engelbart (SRI)',
    era: 'foundations',
    description:
      'On 9 December 1968, Engelbart sat on a San Francisco stage and demonstrated the mouse, windows, hypertext, real-time text editing, version control, and video conferencing — in one 90-minute session, years before any of it shipped.',
  },

  /* ── The desktop ──────────────────────────────────────── */
  {
    slug: 'xerox-alto',
    year: 1973,
    title: 'Xerox Alto',
    category: 'Machine',
    maker: 'Xerox PARC',
    era: 'desktop',
    description:
      'The first computer designed from the ground up around a graphical interface: a bitmapped, portrait display, a three-button mouse, and WYSIWYG editing. It was never sold, but almost every idea in it became a product somewhere else.',
  },
  {
    slug: 'xerox-star',
    year: 1981,
    title: 'Xerox Star (8010)',
    category: 'Machine',
    maker: 'Xerox PARC',
    era: 'desktop',
    description:
      'The first commercial system built on the desktop metaphor: icons you could double-click, folders, overlapping windows, and a pointer — the "WIMP" paradigm. It flopped commercially at $16,000 a seat but set the template for the Mac and Windows.',
  },
  {
    slug: 'apple-lisa',
    year: 1983,
    title: 'Apple Lisa',
    category: 'Machine',
    maker: 'Apple',
    era: 'desktop',
    description:
      'Apple’s first graphical computer brought pull-down menus, drag-and-drop, and the trash can to market. At $9,995 it was far too expensive to succeed, but it was the dress rehearsal for the Macintosh.',
  },

  /* ── Mainstream ───────────────────────────────────────── */
  {
    slug: 'macintosh',
    year: 1984,
    title: 'Apple Macintosh',
    category: 'Machine',
    maker: 'Apple',
    era: 'mainstream',
    description:
      'Launched on 24 January 1984 after the famous "1984" Super Bowl ad, the Macintosh was the first commercially successful computer with a graphical interface and a mouse. It put the desktop metaphor on ordinary desks.',
  },
  {
    slug: 'windows-1',
    year: 1985,
    title: 'Windows 1.0',
    category: 'Software',
    maker: 'Microsoft',
    era: 'mainstream',
    description:
      'Microsoft’s first graphical shell over MS-DOS. Windows could only sit side by side, not overlap, but it began the long march that would put a GUI on the vast majority of the world’s computers.',
  },
  {
    slug: 'hypercard',
    year: 1987,
    title: 'HyperCard',
    category: 'Software',
    maker: 'Bill Atkinson (Apple)',
    era: 'mainstream',
    description:
      'Billed as "programming for the rest of us," HyperCard let anyone build stacks of linked cards mixing text, images, and buttons. It was hypermedia for everyone — and a direct influence on the web that followed.',
  },
  {
    slug: 'nextstep',
    year: 1989,
    title: 'NeXTSTEP',
    category: 'Software',
    maker: 'NeXT',
    era: 'mainstream',
    description:
      'An object-oriented operating system with a polished GUI, a dock, and Interface Builder for assembling screens visually. Its bones later became the foundation of macOS and iOS.',
  },

  /* ── The web ──────────────────────────────────────────── */
  {
    slug: 'world-wide-web',
    year: 1990,
    title: 'The World Wide Web',
    category: 'Platform',
    maker: 'Tim Berners-Lee (CERN)',
    era: 'web',
    description:
      'Berners-Lee wrote the first browser-editor, the first server, and the rules — HTML, HTTP, and URLs — at CERN. The first public web page went live in 1991. The link became the most important control in computing.',
  },
  {
    slug: 'mosaic',
    year: 1993,
    title: 'Mosaic',
    category: 'Software',
    maker: 'NCSA',
    era: 'web',
    description:
      'The first widely used graphical web browser. By showing images inline with text and running on ordinary computers, Mosaic turned the web from a researcher’s tool into something anyone would want to use.',
  },
  {
    slug: 'windows-95',
    year: 1995,
    title: 'Windows 95',
    category: 'Software',
    maker: 'Microsoft',
    era: 'web',
    description:
      'The Start button, the taskbar, and the notification tray arrived in one release, backed by a launch campaign with the Rolling Stones. For a generation, "the computer" simply looked like this.',
  },
  {
    slug: 'google-homepage',
    year: 1998,
    title: 'The Google homepage',
    category: 'Web',
    maker: 'Google',
    era: 'web',
    description:
      'A single search box floating in white space — a radical act of restraint when every rival portal was a wall of links and ads. It taught a generation that an interface could be almost nothing.',
  },
  {
    slug: 'mac-os-x-aqua',
    year: 2001,
    title: 'Mac OS X & Aqua',
    category: 'Software',
    maker: 'Apple',
    era: 'web',
    description:
      'Aqua brought glossy, "lickable" buttons, translucency, drop shadows, and the Dock. It was skeuomorphism at full volume — pixels pretending to be glass and water — and it defined the look of the early 2000s.',
  },
  {
    slug: 'gmail-ajax',
    year: 2004,
    title: 'Gmail & AJAX',
    category: 'Web',
    maker: 'Google',
    era: 'web',
    description:
      'Gmail (2004) and Google Maps (2005) updated the page without reloading it — a technique soon named AJAX. Web pages started to feel like real applications, and the line between site and software blurred.',
  },

  /* ── Touch ────────────────────────────────────────────── */
  {
    slug: 'iphone',
    year: 2007,
    title: 'iPhone',
    category: 'Device',
    maker: 'Apple',
    era: 'touch',
    description:
      'Announced 9 January 2007, the iPhone replaced the stylus and keyboard with capacitive multitouch and direct manipulation. You pushed pixels with your finger. It reset what an interface was allowed to be.',
  },
  {
    slug: 'app-store',
    year: 2008,
    title: 'The App Store',
    category: 'Platform',
    maker: 'Apple',
    era: 'touch',
    description:
      'The App Store turned the phone into a platform and made the "app" — a single-purpose, full-screen, touch-first surface — the dominant unit of software design for the next decade.',
  },
  {
    slug: 'android',
    year: 2008,
    title: 'Android',
    category: 'Platform',
    maker: 'Google',
    era: 'touch',
    description:
      'An open mobile operating system that put a touch interface into the hands of most of the world. Its later design language, Material, would shape how billions of screens look and move.',
  },
  {
    slug: 'responsive-web-design',
    year: 2010,
    title: 'Responsive Web Design',
    category: 'Method',
    maker: 'Ethan Marcotte',
    era: 'touch',
    description:
      'A single article in A List Apart proposed fluid grids and media queries so one layout could reflow to fit any screen, from phone to desktop. It became the default way the web is built.',
  },

  /* ── Systems ──────────────────────────────────────────── */
  {
    slug: 'ios-7',
    year: 2013,
    title: 'iOS 7',
    category: 'Software',
    maker: 'Apple',
    era: 'systems',
    description:
      'Overnight, iOS 7 stripped away the leather, felt, and glass of skeuomorphism in favour of flat colour, translucency, and typography. Love it or not, the entire industry flattened within a year.',
  },
  {
    slug: 'material-design',
    year: 2014,
    title: 'Material Design',
    category: 'System',
    maker: 'Google',
    era: 'systems',
    description:
      'Google published not a look but a system: documented rules for elevation, motion, colour, and spacing that any team could follow. It made "design system" a mainstream idea, not a luxury.',
  },
  {
    slug: 'figma',
    year: 2016,
    title: 'Figma',
    category: 'Tool',
    maker: 'Figma',
    era: 'systems',
    description:
      'Design moved into the browser with real-time, multiplayer editing. The tool that interfaces are drawn in became itself a case study in collaborative, always-current software.',
  },
  {
    slug: 'dark-mode',
    year: 2019,
    title: 'System-wide dark mode',
    category: 'Pattern',
    maker: 'Apple / Google',
    era: 'systems',
    description:
      'macOS, iOS, and Android shipped dark mode at the operating-system level. Overnight, every interface was expected to be themeable — light or dark — by default.',
  },
  {
    slug: 'conversational-ai',
    year: 2022,
    title: 'Conversational & generative UI',
    category: 'Frontier',
    maker: 'The AI era',
    era: 'systems',
    description:
      'Natural-language chat and AI-generated screens turned a blank text box into a universal interface. The cursor and the canvas — fifty years of direct manipulation — are starting to dissolve into conversation.',
  },
];

/* helpers */
export const eraById = (id) => ERAS.find((e) => e.id === id);
export const milestoneBySlug = (slug) => MILESTONES.find((m) => m.slug === slug);
