/* ============================================================
   The History of UI — content. Single source of truth.

   STOPS      the 10 panels of the homepage timeline.
   ERA_PAGES  the deep dive behind each panel, keyed by stop id.
   ============================================================ */

import e01Hollerith from './assets/eras/e01-hollerith.webp'
import e02MissionControl from './assets/eras/e02-mission-control.webp'
import e03GraphicalSpark from './assets/eras/e03-graphical-spark.webp'
import e04PointClick from './assets/eras/e04-point-click.webp'
import e05ServerFarm from './assets/eras/e05-server-farm.webp'
import e06IphoneNight from './assets/eras/e06-iphone-night.webp'
import e07FlatIcons from './assets/eras/e07-flat-icons.webp'
import e08MaterialLayers from './assets/eras/e08-material-layers.webp'
import e09FrostedGlass from './assets/eras/e09-frosted-glass.webp'
import e10Homepod from './assets/eras/e10-homepod.webp'

/* the lead figure on each era page: a photograph of the real machine, or a
   screenshot of the real interface. Credits print under the caption. */
import a01Punchcard from './assets/eras/a01-punchcard.webp'
import a02Vt100 from './assets/eras/a02-vt100.webp'
import a03Alto from './assets/eras/a03-alto.webp'
import a04Star from './assets/eras/a04-star.webp'
import a05Google1998 from './assets/eras/a05-google1998.webp'
import a06Iphone from './assets/eras/a06-iphone.webp'
import a07Wp7 from './assets/eras/a07-wp7.webp'
import a08Elevation from './assets/eras/a08-elevation.webp'
import a09Bigsur from './assets/eras/a09-bigsur.webp'
import a10Echo from './assets/eras/a10-echo.webp'

/* the two pairs on each era page: the interface in use, then what it
   turned into. Credits print under every caption. */
import b01Switchboard from './assets/eras/b01-switchboard.webp'
import b02Keypunch from './assets/eras/b02-keypunch.webp'
import b03Keyboard from './assets/eras/b03-keyboard.webp'
import b04Touchkeys from './assets/eras/b04-touchkeys.webp'
import c01Timeshare from './assets/eras/c01-timeshare.webp'
import c02Pdp11 from './assets/eras/c02-pdp11.webp'
import c03Terminal from './assets/eras/c03-terminal.webp'
import c04Aicli from './assets/eras/c04-aicli.webp'
import g01Sketchpad from './assets/eras/g01-sketchpad.webp'
import g02Lightpen from './assets/eras/g02-lightpen.webp'
import g03Mouse from './assets/eras/g03-mouse.webp'
import g04Inkscape from './assets/eras/g04-inkscape.webp'
import p01Star from './assets/eras/p01-star.webp'
import p02Win95 from './assets/eras/p02-win95.webp'
import p03Files from './assets/eras/p03-files.webp'
import p04Plasma from './assets/eras/p04-plasma.webp'
import w01Firstweb from './assets/eras/w01-firstweb.webp'
import w02Netscape from './assets/eras/w02-netscape.webp'
import w03Firefox from './assets/eras/w03-firefox.webp'
import w04Serp from './assets/eras/w04-serp.webp'
import t01Ipad from './assets/eras/t01-ipad.webp'
import t02Voicememos from './assets/eras/t02-voicememos.webp'
import t03Homescreen from './assets/eras/t03-homescreen.webp'
import t04Scroll from './assets/eras/t04-scroll.webp'
import f01Win8 from './assets/eras/f01-win8.webp'
import f02Ios7 from './assets/eras/f02-ios7.webp'
import f03Settings from './assets/eras/f03-settings.webp'
import f04Wikipedia from './assets/eras/f04-wikipedia.webp'
import s01Keylines from './assets/eras/s01-keylines.webp'
import s02Carbonkit from './assets/eras/s02-carbonkit.webp'
import s03Figma from './assets/eras/s03-figma.webp'
import s04Tokens from './assets/eras/s04-tokens.webp'
import r01Light from './assets/eras/r01-light.webp'
import r02Dark from './assets/eras/r02-dark.webp'
import r03Appearance from './assets/eras/r03-appearance.webp'
import r04Liquidglass from './assets/eras/r04-liquidglass.webp'
import n01Visionpro from './assets/eras/n01-visionpro.webp'
import n02Chatgpt23 from './assets/eras/n02-chatgpt23.webp'
import n03Gemini from './assets/eras/n03-gemini.webp'
import n04Chatnow from './assets/eras/n04-chatnow.webp'

/* ============================================================
   STOPS — the 10-stop homepage timeline ("the main event").
   Each stop: big (year range), cursive (movement / evocative label),
   title, content, quote {text, who, verify?}, look (aesthetic),
   image (idea to source). Drives Timeline.jsx.
   ============================================================ */
export const STOPS = [
  {
    id: 'before-screen',
    img: e01Hollerith,
    big: '1800s–1945',
    cursive: 'Hands on the Machine',
    title: 'Before the Screen',
    content:
      'The interface is older than the computer by a full century. Before any screen existed, you ran machines with your hands, punching cards, striking typewriter keys, tapping a telegraph in rhythm, waiting while an operator patched your call through a switchboard. Every habit under your fingers today was rehearsed here first.',
    quote: { text: 'The Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.', who: 'Ada Lovelace, 1843' },
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
      'Then the machine learned to answer, and computing became a conversation: you typed a line, it typed one back. Time-sharing let a room full of people share one computer at once, and Unix gave us the pipe, small tools joined end to end so the output of one became the input of the next. Green text, black screen, and a prompt that still runs, in some form, under every terminal you will ever open.',
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
      'The picture arrived two decades before you could buy it. Sketchpad was drawing on a screen with a light pen in 1963, and by 1968 Engelbart had demoed the mouse, windows, and hypertext links in a single sitting. Xerox built every piece of it into the Alto, and then, famously, sat on it.',
    quote: { text: '[Sketchpad] makes it possible for a man and a computer to converse rapidly through the medium of line drawings.', who: 'Ivan Sutherland, 1963' },
    look: 'Vector lines on a CRT, the first crude bitmapped windows, beige lab hardware.',
    image: "Engelbart's original wooden mouse prototype, or a still from the Mother of All Demos.",
  },
  {
    id: 'point-click',
    img: e04PointClick,
    big: '1981–1995',
    cursive: 'The Desktop Metaphor',
    title: 'Point & Click',
    content:
      'Jobs toured Xerox in 1979 and called what he saw a gold mine, yet it was Xerox that shipped the desktop first, in 1981, and watched it flop. The Macintosh put a mouse on ordinary desks in 1984, and Windows 95 finished the job for everyone else. Files, folders, a trash can, windows you could overlap, all of it dressed in the grey beveled chrome that flat design would later strip away.',
    quote: { text: "You're sitting on a gold mine!", who: 'Steve Jobs at Xerox PARC, 1979, as recalled by Larry Tesler' },
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
      'Berners-Lee wired three ideas together, a link, a page, and an address, and the most important control in computing became the underlined word. Mosaic put images beside the text in 1993, and Google answered the cluttered portals of the day with a single box in an ocean of white. Slowly, almost without anyone deciding it, the page started behaving like software.',
    quote: { text: 'This is for everyone.', who: 'Tim Berners-Lee, tweeted live from the London 2012 opening ceremony' },
    look: 'Glossy Web 2.0. Gradients, reflections, rounded badges, the "beta" ribbon.',
    image: 'The 1998 Google homepage, or the NCSA Mosaic browser window.',
  },
  {
    id: 'touch',
    img: e06IphoneNight,
    big: '2007–2012',
    cursive: 'Push the Pixels',
    title: 'Touch',
    content:
      'The finger retired the stylus as the default, because the iPhone let you push the pixels themselves, and the App Store made the app the basic unit of software. The look of the era had a name, skeuomorphism, interfaces dressed up as real things: linen, leather, green felt, glossy buttons that begged to be pressed. Apple had been polishing that instinct since Aqua in 2000.',
    quote: { text: "We made the buttons on the screen look so good you'll want to lick them.", who: 'Steve Jobs, on Aqua, 2000' },
    look: 'Stitched leather, felt, brushed metal, deep gloss. Skeuomorphism at full volume.',
    image: 'The original iPhone home screen, or the iOS 6 Notes app in its yellow legal-pad and leather binding.',
  },
  {
    id: 'flat-turn',
    img: e07FlatIcons,
    big: '2013–2017',
    cursive: 'Strip It Bare',
    title: 'The Flat Turn',
    content:
      'Then everyone stripped it bare, and against the popular memory, Microsoft got there first with Metro in 2010: type, color, no fake texture. Apple flattened iOS 7 overnight in 2013, the rest of the industry followed inside a year, and the makeover turned out to be the opening act of a decade in which design stopped being pictures and became a system. The cost was small but real: you could no longer always tell what was a button.',
    quote: { text: 'UI elements should be authentically digital.', who: 'Microsoft, UI Design and Interaction Guide for Windows Phone 7, 2010' },
    look: 'Solid color fields, bold type, hard edges, lots of air. No gradients, no shadows.',
    image: 'An iOS 6 vs iOS 7 side-by-side of the same screen.',
  },
  {
    id: 'systems-material',
    img: e08MaterialLayers,
    big: '2014–2019',
    cursive: 'Write the Rulebook',
    title: 'Systems & Material',
    content:
      'These are the same years, seen from underneath. While the surfaces went flat, Google wrote physics for them: Material Design treated the screen like layered paper, with light, shadow, and motion that followed rules. And design itself stopped being screens you draw and became systems you maintain, tokens and components and documentation, Carbon at IBM, Polaris at Shopify, Lightning at Salesforce, until the job itself had changed.',
    quote: { text: 'Seams and shadows provide meaning about what you can touch.', who: 'Matías Duarte, 2014' },
    look: 'Paper layers, ink-ripple touches, elevation shadows, one bold accent color.',
    image: 'A Material elevation/shadow spec diagram, or a real design-system component library laid out in Figma.',
  },
  {
    id: 'surface-returns',
    img: e09FrostedGlass,
    big: '2018–2024',
    cursive: 'Dress It Up Again',
    title: 'The Surface Returns',
    content:
      'The third act: once design ran on systems, the look became a setting. Dark mode turned into a preference every app suddenly owed you, soft extruded shapes had their moment and mostly failed the contrast test, and heavy frosted panels, building since iOS 7 and Yosemite, were pushed to the front again. Brutalism revolted against all of it, bento boxed everything into tidy grids, and style now changes like the seasons, because the system underneath can absorb it.',
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
      'The cursor had been dissolving for a while, ever since Siri in 2011, and then Alexa, made a voice in a room the whole interface. ChatGPT turned a plain text box into a tool for almost anything, and Vision Pro put the screen in the air, driven by your eyes and your hands. Half a century of point-and-click, circling back to where the conversation began: typing words at a machine, and waiting for its answer.',
    quote: { text: 'The best way to predict the future is to invent it.', who: 'Alan Kay, PARC, 1971' },
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
      'People pressed keys, punched holes, and patched cables for a hundred years before the first screen ever switched on. So when computers finally arrived, they did not invent new habits, they borrowed the ones your great-grandparents already had.',
      'Almost everything your hands do today was rehearsed here. The keyboard layout you are typing on was settled in the 1870s, arranged to stop typewriter arms from jamming, and it has outlived the jam, the arms, and the typewriter itself.',
    ],
    contained: [
      { t: 'The punch card', d: 'Jacquard’s loom read woven patterns from punched cards. Babbage planned to feed his Analytical Engine with them in 1837. Hollerith counted the 1890 US Census with them, and his company grew into IBM.' },
      { t: 'The typewriter', d: 'Christopher Latham Sholes and his partners sold the manufacturing rights to Remington in 1873, and the machine went on sale in 1874 with QWERTY on it. The layout was not designed to slow typists down, whatever you were told at school. Historians still argue about what it was actually for, with jammed typebars the usual answer and a strong rival case that it grew out of the needs of telegraph operators taking down Morse.' },
      { t: 'The telegraph', d: 'One key, and meaning carried in rhythm. Morse code was the first time people spoke to a machine in the machine’s own language.' },
      { t: 'The switchboard and the dial', d: 'For decades the phone network’s interface was a person, an operator patching cables by hand. Almon Strowger’s automatic exchange and the dial that came with it began handing her work to you in the 1890s, but the job took most of a century to disappear, and operator numbers actually peaked in the 1950s before direct dialling finished them off.' },
      { t: 'The cockpit', d: 'In WWII, trained pilots kept belly-landing B-17s because the landing gear and flap levers were identical and sat side by side, so they raised the wheels when they meant to raise the flaps. Alphonse Chapanis gave the two levers different shapes you could tell apart by touch, and the accidents stopped. He called it designer error rather than pilot error, and human factors, the ancestor of UX, begins here.' },
      { t: 'The Memex', d: 'In 1945 Vannevar Bush described a desk that linked documents by association, trails of thought you could follow later. It was never built. It only inspired hypertext, the mouse, and the web.' },
    ],
    ui: [
      'The interface of this era was entirely physical, input was force and feedback was mechanism. You pressed keys, pulled levers, punched holes, turned dials, and the machine answered with a bell at the end of the line, a click for every digit, ink drying on paper.',
      'And where the machine could not cope, the interface was a human being. The switchboard operator and the punch-card clerk stood between you and the system, translating your intent into its language, which means the first UI was a person.',
    ],
    notable: [
      { t: 'QWERTY, 1874', d: 'One of the oldest interfaces still in daily use, and easily the most durable one in computing. A rival layout, Dvorak, arrived in the 1930s and never displaced it, and the studies claiming it was dramatically faster were largely run by Dvorak himself and have not held up. The lesson is lock-in, because once millions of fingers know a layout, being better on paper is not enough.' },
      { t: 'The punch card, the early 1800s to the 1970s', d: 'The original programming interface. For most of computing’s first century, writing software meant punching holes in cardboard, and interactive terminals only finished the job in the 1970s.' },
      { t: 'The rotary dial', d: 'One of the first self-service interfaces, and the one that reached the most people. It turned every caller into the operator.' },
      { t: 'Fitts’s law, 1954', d: 'Paul Fitts, an aviation psychologist, measured how long it takes to hit a target of a given size at a given distance. It grew straight out of this era’s cockpit work, and every button on your phone still obeys it.' },
    ],
    gallery: [
      { img: a01Punchcard, cap: 'A Census Bureau clerk works a Hollerith pantograph punch in about 1940, keying a population card by hand, one hole at a time, so that a machine could later read what she had recorded.', credit: 'U.S. Bureau of the Census, via the U.S. National Archives (NARA 513295), public domain' },
      { img: b01Switchboard, cap: 'Signal Corps operators at a plugboard switchboard in France in 1919, patching one caller through to another with cords and jacks, because for decades a connection was a thing a person made by hand.', credit: 'U.S. Army Signal Corps, 1919, public domain' },
      { img: b02Keypunch, cap: 'A floor of Census Bureau keypunch operators in 1940, each one turning somebody’s written answers into holes a machine could read, which was the job before the job was called software.', credit: 'U.S. Census Bureau, via the U.S. National Archives, public domain' },
    ],
    now: [
      { img: b03Keyboard, cap: 'A keyboard sold today still carries the letter order Christopher Latham Sholes settled on for a mechanical typewriter in the 1870s, so the top row reads Q W E R T Y a century and a half later.', credit: 'Photo: Fletcher, CC BY 4.0, via Wikimedia Commons' },
      { img: b04Touchkeys, cap: 'The same letters again, now on glass with no moving parts at all, which means a layout arranged around metal typebars is the reason your thumbs know where to go.', credit: 'Photo: Jim Heaphy, CC BY-SA 3.0, via Wikimedia Commons. Keyboard software © Google' },
    ],
    sources: [
      { label: 'Computer History Museum: Punched cards control Jacquard loom', url: 'https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/' },
      { label: 'IBM Archives: The punched card tabulator', url: 'https://www.ibm.com/history/punched-card-tabulator' },
      { label: 'Smithsonian Magazine: where the QWERTY keyboard came from', url: 'https://www.smithsonianmag.com/history/the-qwerty-keyboard-will-never-die-where-did-the-150-year-old-design-come-from-49863249/' },
      { label: 'UX Magazine: Pilot error? Chapanis and the shape of things to come', url: 'https://uxmag.com/articles/pilot-error-chapanis-and-the-shape-of-things-to-come' },
      { label: 'Vannevar Bush, "As We May Think", The Atlantic, 1945', url: 'https://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/' },
      { label: 'Era photo: Hollerith card reader by Marcin Wichary, CC BY 2.0', url: 'https://commons.wikimedia.org/wiki/File:Hollerith_card_reader_closeup.jpg' },
      { label: 'Liebowitz & Margolis, "Typing Errors" — why the Dvorak evidence does not hold up', url: 'https://reason.com/1996/06/01/typing-errors/' },
      { label: 'Yasuoka & Yasuoka: on the prehistory of QWERTY', url: 'http://kanji.zinbun.kyoto-u.ac.jp/~yasuoka/publications/PreQWERTY.html' },
    ],
    left: {
      paras: [
        'Take Fitts’s law with you, published in 1954 by a psychologist who had spent the war working out why pilots misread their controls, because it still decides the size of every button you will ever ship. And take QWERTY’s harder lesson, that a rival layout has existed since the 1930s and has never mattered, whatever its merits. When a design fights the user’s muscle memory, the design loses.',
        'What it cost was the operator. For the better part of a century a human being was the interface, translating your intent into the machine’s language, until automatic exchanges and then direct dialling took the work away. A better interface ended a profession, and it would not be the last time.',
      ],
      thread: { to: 'command-line', text: 'Follow the thread: the punch-card deck becomes the batch job in The Command Line' },
    },
  },

  'command-line': {
    why: [
      'This is the era the conversation started. Before it you handed a deck of cards to an operator and came back hours later for a printout, and the machine never once spoke to you. Then time-sharing arrived, you typed a line and the computer typed one back while you waited, and that loop, ask and answer, is still the deep grammar of every interface.',
      'It is also the era that refuses to die. The prompt outlived the teletype, the terminal, and every fashion that followed. Fifty years later, every developer still lives part of the day inside a descendant of this screen.',
    ],
    contained: [
      { t: 'Batch processing', d: 'You queued your punch cards, an operator fed the machine, and the answer came back on paper, hours later. Computing without interaction: the thing this era exists to fix.' },
      { t: 'The teletype', d: 'A repurposed telegraph printer became the computer’s first mouth and ears. You typed, it clattered back. The name survives in every Unix system as "tty".' },
      { t: 'Time-sharing, 1961', d: 'CTSS at MIT, demonstrated in November 1961 by Fernando Corbató’s team, let four people use one computer at once, each feeling alone with it. Corbató won the 1990 Turing Award for CTSS and for Multics, the far more ambitious system that came after it.' },
      { t: 'Unix, 1969', d: 'Born at Bell Labs in 1969, not out of a collapse but out of a walkout, because Bell withdrew from the over-ambitious Multics project while Multics itself carried on selling until 2000. It started on a little-used PDP-7 that Ken Thompson had tracked down so he could run his Space Travel game. Ritchie later wrote that what the group wanted to keep was not just a good environment to program in, but a system around which a fellowship could form.' },
      { t: 'The pipe, 1973', d: 'Doug McIlroy pushed the idea for years and finally persuaded Ken Thompson, who wrote the pipe system call in a single night, and Unix got its most elegant idea: small tools joined end to end, each feeding the next. Ritchie later dated it to 1972, though the surviving manuals put it in the Third Edition of February 1973. Fifty years on, it is still how command lines think.' },
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
      { t: 'The blinking cursor', d: 'One of the oldest pieces of screen UI still in daily use. Charles Kiesling patented a blinking cursor for CRT displays in 1967, and it has been asking the same question ever since: your move.' },
    ],
    gallery: [
      { img: a02Vt100, cap: 'A DEC VT100 wired to a PDP-11, mid-session, with the prompt sitting at the head of each typed line exactly the way every command line has done since.', credit: 'Photo: Autopilot, CC BY-SA 3.0, via Wikimedia Commons' },
      { img: c01Timeshare, cap: 'A newly installed time-sharing terminal at a Minneapolis school in 1970, one person typing while the other watches the paper roll out, with the telephone that carried the line sitting beside the keyboard.', credit: 'Hennepin County Library, via the Minnesota Digital Library and DPLA, no known copyright' },
      { img: c02Pdp11, cap: 'A technician at a DEC PDP-11/34 in 1978, a printing terminal on one side of him and a video terminal on the other, both of them waiting for a typed line.', credit: 'U.S. Army Natick Soldier Systems Center, via Digital Commonwealth, public domain' },
    ],
    now: [
      { img: c03Terminal, cap: 'A terminal window today, running a command and printing the answer underneath, with the cursor already blinking on a fresh line waiting for whatever you want to say next.', credit: 'Screenshot: GNOME Terminal, The GNOME Project, GPLv3' },
      { img: c04Aicli, cap: 'An assistant answering the typed line “Explain this code base to me” inside an ordinary terminal, the same ask-and-answer loop as 1970, in English.', credit: 'Screenshot: OpenAI Codex CLI, Apache License 2.0. Interface © OpenAI' },
    ],
    sources: [
      { label: 'ACM A.M. Turing Award: Fernando J. Corbató, 1990', url: 'https://amturing.acm.org/award_winners/corbato_1009471.cfm' },
      { label: 'Dennis Ritchie, "The Evolution of the Unix Time-sharing System", 1984', url: 'https://www.cis.upenn.edu/~lee/07cis505/Papers/ritchie-bstj84.pdf' },
      { label: 'Computer History Museum: the earliest Unix code', url: 'https://computerhistory.org/blog/the-earliest-unix-code-an-anniversary-source-code-release/' },
      { label: 'Multicians: the IBM 7094 and CTSS', url: 'https://www.multicians.org/thvv/7094.html' },
      { label: 'Multicians: "Myth: Multics failed in 1969"', url: 'https://multicians.org/myths.html' },
    ],
    left: {
      paras: [
        'Take the loop: you ask, the machine answers, the prompt returns. Every interface since is a costume over that grammar, including the chat field you used this morning. And take the pipe’s principle, that small pieces composed beat one big thing, an idea that has outlived its own syntax by fifty years.',
        'What it cost came later. The command line offered a bargain, real power if you learned what to say, and it was the last time an interface was that honest about its terms. Every era after this one trades some of that power for approachability, and the trade is never free.',
      ],
      thread: { to: 'beyond-cursor', text: 'Follow the thread: the prompt returns, wearing plain English, in Beyond the Cursor' },
    },
  },

  'graphical-spark': {
    why: [
      'Most of what you recognise on a screen today was worked out in this window, much of it before 1970, and almost none of it was for sale. Sketchpad drew with light in 1963, Engelbart showed the mouse, windows, and links in one sitting in 1968, and Xerox PARC put the whole picture together in the Alto by 1973. Then, famously, Xerox declined to sell it at all.',
      'It matters because it proves the pattern this whole site keeps finding: interfaces are not invented once, by one person. They are passed between labs like a long argument, and the people who finish the argument are rarely the ones who started it.',
    ],
    contained: [
      { t: 'Sketchpad, 1963', d: 'Ivan Sutherland’s MIT thesis, supervised by Claude Shannon. You drew on the screen with a light pen and the drawing obeyed rules. Sutherland called it a way for people and computers to converse.' },
      { t: 'The mouse, 1964', d: 'Conceived by Doug Engelbart at SRI, prototyped by Bill English in a wooden case. Patented as an "X-Y position indicator". A German team at Telefunken built a rolling-ball version independently: the argument was already collective.' },
      { t: 'The Mother of All Demos, 1968', d: 'On 9 December 1968 Engelbart demonstrated the mouse, windows, hypertext links, live collaboration, and video conferencing in ninety minutes. Most of it took twenty more years to ship.' },
      { t: 'The Xerox Alto, 1973', d: 'The first Alto ran on 1 March 1973, and across the rest of the decade the machine gathered up a bitmapped display, a mouse, windows, Ethernet, what-you-see-is-what-you-get editing in Bravo from 1974, and a mail program by the late seventies. Around two thousand were built and many were given away, but none were ever sold. Its ideas escaped anyway.' },
      { t: 'Smalltalk', d: 'Alan Kay’s team at PARC built the software culture the Alto needed: overlapping windows, menus, and the idea that anyone, even children, should be able to shape the machine.' },
    ],
    ui: [
      'The interface became a picture. Instead of remembering a command you pointed at a thing, and the thing responded. Direct manipulation, the idea that you touch what you change, starts in this lab hardware.',
      'But it was still years from ordinary hands: room-sized budgets, beige lab machines, screens that only researchers ever saw. This era invented the future and then sat on it, so somebody else got to ship it.',
    ],
    notable: [
      { t: 'Sketchpad, 1963', d: 'Not the first light pen pointed at a screen, since Whirlwind and SAGE operators were doing that in the fifties, but the first time the machine understood the drawing as structure rather than as marks. Interactive graphics, constraints, even object-like instances: all here.' },
      { t: 'NLS at the 1968 demo', d: 'The mouse’s public debut, and hypertext working live on stage decades before the web.' },
      { t: 'The Alto, 1973', d: 'Most of the graphical interface, a decade early, with a bitmapped screen, a mouse, and the overlapping windows that came out of Smalltalk. Desktop icons were not part of it, and the full desktop metaphor of files and folders was formalised later, for the Xerox Star.' },
    ],
    gallery: [
      { img: a03Alto, cap: 'A Xerox Alto, the 1973 machine that put a bitmapped display, a keyboard and a three-button mouse on one desk, photographed against a wall of the Smalltalk source that ran on it.', credit: 'Photo: Maksym Kozlenko, CC BY-SA 4.0, via Wikimedia Commons' },
      { img: g01Sketchpad, cap: 'Ivan Sutherland at the TX-2 console in 1963, a light pen in his hand and a drawing glowing on the round screen, touching the picture itself rather than typing a command about it.', credit: 'Ivan Sutherland, Sketchpad dissertation, 1963, CC BY-SA 3.0, via Wikimedia Commons' },
      { img: g02Lightpen, cap: 'A light pen held against an IBM 2250 at Brown University in 1969, picking a line out of a document by pointing straight at it, because on this machine the screen was a thing you touched.', credit: 'Photo: Greg Lloyd, 1969, CC BY-SA 4.0, via Wikimedia Commons' },
    ],
    now: [
      { img: g03Mouse, cap: 'A hand resting on an ordinary mouse, fingers falling into the same grip Engelbart’s wooden block asked for in 1964, a gesture so unremarkable now that almost nobody thinks of it as an invention.', credit: 'Photo: Nenad Stojkovic, CC BY 2.0, via Wikimedia Commons' },
      { img: g04Inkscape, cap: 'A vector object on a design canvas with its handles showing, making the argument Sketchpad made in 1963, that you change a picture by pointing at the picture.', credit: 'Screenshot: Inkscape, CC BY-SA 3.0, via Wikimedia Commons' },
    ],
    sources: [
      { label: 'Computer History Museum: the remarkable Ivan Sutherland', url: 'https://computerhistory.org/blog/the-remarkable-ivan-sutherland/' },
      { label: 'Ivan Sutherland, "Sketchpad: A Man-Machine Graphical Communication System", 1963', url: 'https://www.cl.cam.ac.uk/~pr10/iui/sutherland63.pdf' },
      { label: 'SRI: the computer mouse and interactive computing', url: 'https://www.sri.com/hoi/computer-mouse-and-interactive-computing/' },
      { label: 'Internet Hall of Fame: Engelbart’s Mother of All Demos', url: 'https://www.internethalloffame.org/2015/05/05/engelbarts-mother-all-demos/' },
      { label: 'IEEE Spectrum: the Xerox Alto', url: 'https://spectrum.ieee.org/xerox-alto' },
    ],
    left: {
      paras: [
        'Take the pattern: interfaces are relay races, Sutherland to Engelbart to PARC to everyone after them, each running a leg and nobody crossing the line alone. Whatever you are designing now will be finished by someone you have never met, and that is not failure, that is how the whole history works.',
        'What it cost was the light pen, which drew the future in 1963 and then lost to the mouse slowly, over twenty years, for reasons the record is more honest about than the legend is. The pen only worked well on low-persistence screens that flickered, your own hand covered the thing you were pointing at, and reaching for the glass was tiring, though that last reason is repeated far more confidently than the evidence supports. The lesson outlived the device anyway: an interface that ignores the body loses to one that respects it.',
      ],
      thread: { to: 'point-click', text: 'Follow the thread: these lab ideas finally ship, a decade late, in Point & Click' },
    },
  },

  'point-click': {
    why: [
      'This is the era the graphical interface left the lab and moved in with everyone. The Macintosh put the mouse on ordinary desks in 1984, Windows put it in every office, and Windows 95 finished the job with a Start button and a launch campaign scored by the Rolling Stones. By the end of it, "the computer" simply looked like this.',
      'It is also where the great creation myth lives, because yes, Jobs toured Xerox PARC in 1979 and called it a gold mine. But the Mac team invented plenty that PARC never had, drag-and-drop file handling, renaming a file in place, desk accessories, control panels. The honest word for what happened is lineage.',
    ],
    contained: [
      { t: 'The Xerox Star, 1981', d: 'The first commercial desktop metaphor: David Canfield Smith’s icons, folders, and double-click. Its windows were deliberately tiled rather than overlapping, because the team had watched users waste their time dragging windows around. It cost $16,000 a seat and flopped, and the template survived the product.' },
      { t: 'Apple Lisa, 1983', d: 'Pull-down menus, the menu bar, and the wastebasket reach the market. At $9,995 it failed too, and it was the dress rehearsal for the Mac, which added drag-and-drop file handling of its own.' },
      { t: 'Macintosh, 1984', d: 'Heralded by Ridley Scott’s "1984" Super Bowl ad on 22 January, two days before the machine itself. The first commercially successful GUI computer: the desktop metaphor, finally at a desk-sized price.' },
      { t: 'Windows 1 to 95', d: 'Microsoft’s long march: tiled windows in 1985, the breakout with 3.0 in 1990, and in 1995 the Start button, the taskbar, and the tray. The look a generation means by "computer".' },
      { t: 'HyperCard, 1987', d: 'Bill Atkinson’s "programming for the rest of us": stacks of linked cards anyone could build. It taught a generation hypermedia and left fingerprints on JavaScript and the early web.' },
      { t: 'NeXTSTEP, 1989', d: 'Jobs in exile ships the polished object-oriented GUI, with a dock and, from Jean-Marie Hullot, Interface Builder. Its bones became macOS and iOS, and the first web browser was written on one.' },
    ],
    ui: [
      'Files, folders, windows, a trash can: the desktop metaphor asked you to believe the screen was a tidy office, and the belief worked. You pointed, you clicked, you dragged, you double-clicked to open. Nothing needed remembering, because everything could be seen.',
      'The look was grey beveled chrome, buttons that bulged, toolbars that cast little shadows, edges pretending to be machined metal. It was skeuomorphism before the word was fashionable, and it is the exact texture flat design would later strip away.',
    ],
    notable: [
      { t: 'The menu bar and the trash can', d: 'The Lisa and Mac conventions that made destructive actions visible and reversible. Attribution here is genuinely contested, and the argument is half the story.' },
      { t: 'The Start button, 1995', d: 'One word in a corner that taught a billion people where everything begins. Possibly the most-clicked pixel in history.' },
      { t: 'HyperCard stacks', d: 'Ordinary people linking cards of text and pictures years before the web. ViolaWWW, one of the first graphical browsers, was built by a HyperCard convert.' },
      { t: 'The double-click', d: 'A tiny grammar rule, select versus open, that everyone on earth learned without ever being taught it.' },
    ],
    gallery: [
      { img: a04Star, cap: 'The Xerox Star 8010 desktop, with windows, a scroll bar, and In, Out, File and Printer drawn along the bottom as icons you could point at, four years before most people saw a mouse.', credit: 'Screen photo from the DigiBarn Computer Museum collection, CC0. Xerox Star interface © Xerox' },
      { img: p01Star, cap: 'A real Xerox Star screen, with folders labelled Mail Received and Mail Sent, an appointment book beside the phone list, and an out basket and a printer along the bottom, because the screen was meant to look like the desk you already knew.', credit: 'Photo: J R, CC BY 2.0, via Wikimedia Commons. Interface © Xerox' },
      { img: p02Win95, cap: 'Windows 95 with the Start menu open and the Recycle Bin parked in the corner, every icon labelled in words, so that using a computer became a matter of looking rather than remembering.', credit: 'Screenshot via Wikimedia Commons. Interface © Microsoft' },
    ],
    now: [
      { img: p03Files, cap: 'Forty years on the room is unchanged, with Documents and Downloads and Pictures still drawn as folders, Trash still waiting in the sidebar, and two windows overlapping the way paper does on a desk.', credit: 'Screenshot: GNOME Files on Debian, GPLv2+, via Wikimedia Commons' },
      { img: p04Plasma, cap: 'A launcher opening from the bottom left corner and a row of running programs along the foot of the screen, the arrangement Windows 95 shipped in 1995, and nobody has found a reason to abandon it since.', credit: 'Screenshot: KDE Plasma 6, KDE Community, GPL, via Wikimedia Commons' },
    ],
    sources: [
      { label: 'Bruce Horn: On Xerox, Apple and progress (folklore.org)', url: 'https://folklore.org/On_Xerox,_Apple_and_Progress.html' },
      { label: 'The New Yorker: Creation myth. Xerox PARC, Apple, and the truth about innovation', url: 'https://www.newyorker.com/magazine/2011/05/16/creation-myth' },
      { label: 'Computer History Museum: input and output, the desktop', url: 'https://www.computerhistory.org/revolution/input-output/14/347' },
      { label: 'Wikipedia: history of the graphical user interface', url: 'https://en.wikipedia.org/wiki/History_of_the_graphical_user_interface' },
      { label: 'Johnson et al., "The Xerox Star: A Retrospective" — on why its windows were tiled', url: 'https://members.dcn.org/dwnelson/XeroxStarRetrospective.html' },
    ],
    left: {
      paras: [
        'Take the metaphor trick: the desktop let the screen explain itself, so nothing needed remembering because everything could be seen. And take the trash can’s deeper rule, that destructive actions should be visible and reversible. Undo is still the most trusted promise you can put in front of a user.',
        'What it cost was fluency. The GUI made computers usable by everyone and legible to almost no one, and the machine you could fully command became a machine you could only operate. Approachability won, and the argument this site would make is that something real went out with the trash, a fluency that was never universal but was, for a while, ordinary among people who owned a computer.',
      ],
      thread: { to: 'touch', text: 'Follow the thread: the desktop metaphor is reborn at thumb scale in Touch' },
    },
  },

  'the-web': {
    why: [
      'One person at CERN wired three ideas together, the link, the page, and the address, and the most important control in computing became an underlined word. Tim Berners-Lee proposed it in March 1989, had the first site running by the end of 1990, and gave it away. The interface stopped being something you bought in a box.',
      'Then the page slowly learned to behave like software. Mosaic put images beside the text in 1993 and the web became something you would show your family, while Google reduced the whole thing to one box in an ocean of white. Gmail and AJAX made pages update without reloading, and the line between site and application stopped meaning much.',
    ],
    contained: [
      { t: 'The proposal, 1989', d: '"Information Management: A Proposal", handed to his group leader Mike Sendall on 12 March 1989. Sendall wrote "Vague, but exciting…" across the top of the first page and let him carry on. URL, HTML, HTTP: three inventions wired into one.' },
      { t: 'The first browser, 1990', d: 'Berners-Lee started writing WorldWideWeb on a NeXT machine in October 1990, and had the browser, the server and the first site running by 20 December. It was an editor as much as a browser, and the read-only web came later, by accident.' },
      { t: 'Mosaic, 1993', d: 'Andreessen and Bina at NCSA were not the first to put images inline with text, since ViolaWWW got there before them, but they made it ordinary and made installation painless. Historians mark it as the turning point: the web became visual, and then it became popular.' },
      { t: 'The Google homepage, 1998', d: 'One search box in acres of white, while every rival portal was a wall of links. A radical act of restraint that taught a generation an interface could be almost nothing.' },
      { t: 'Web 2.0 and AJAX', d: 'Darcy DiNucci used the phrase back in 1999, but O’Reilly and Dale Dougherty made it stick from 2004, and the 2005 essay codified it: the web as platform, users as authors. Jesse James Garrett named AJAX in February 2005, and Gmail and Google Maps updated the page in place, so web pages started feeling like applications.' },
      { t: 'The browser wars', d: 'Netscape against Internet Explorer, features against bundling. IE won the battle, lost the war, and web standards were the peace treaty.' },
    ],
    ui: [
      'The interface of this era is the link: blue, underlined, and honest about being clickable. Add the back button and the address bar and you have the whole survival kit a billion people learned first.',
      'The look aged from grey pages with blue links into glossy Web 2.0, gradients, reflections, rounded badges, a "beta" ribbon on everything. It was skeuomorphism’s web cousin, pixels pretending to be candy.',
    ],
    notable: [
      { t: 'The hyperlink', d: 'The most important control in computing since the button. Bush imagined it, Nelson named it, Berners-Lee shipped it.' },
      { t: 'The back button', d: 'The web’s undo. The single most reassuring control ever put in front of beginners: whatever happens, you can always go back.' },
      { t: 'The search box, 1998', d: 'Google proved that the best interface to everything might be an empty rectangle.' },
      { t: 'The URL', d: 'An address for every page ever made. Ugly, fragile, and one of the great open standards of history.' },
    ],
    gallery: [
      { img: a05Google1998, cap: 'The Google homepage as it stood in December 1998, still carrying a BETA mark, one text box and two buttons in a field of white, while every rival portal was a wall of links.', credit: 'Screenshot via the Internet Archive. Google homepage © Google' },
      { img: w01Firstweb, cap: 'The WorldWideWeb browser showing the very first website, where the underlined words are the whole interface and following one of them is the entire interaction.', credit: 'CERN, public domain, rendered by CERN’s own browser emulator' },
      { img: w02Netscape, cap: 'Netscape Navigator in the middle nineties, Back and Forward at the far left, a location field running the width beneath them, and links that are blue and underlined and completely honest about being clickable.', credit: 'Screenshot: Indolering, CC0, via Wikimedia Commons. Interface © Netscape Communications' },
    ],
    now: [
      { img: w03Firefox, cap: 'A browser in 2026, and the arrangement has not moved, with a back arrow at the far left, an address bar showing exactly where you are, and a page that is still mostly blue links waiting to be followed.', credit: 'Screenshot: VulcanSphere, via Wikimedia Commons. Firefox by Mozilla, MPL 2.0' },
      { img: w04Serp, cap: 'A search results page today, which once you strip the styling away is a ranked list of links with the address printed under each one, the same object Berners-Lee put on a screen in 1990.', credit: 'Screenshot: Fabriemo, CC0, via Wikimedia Commons. Interface © Brave Software' },
    ],
    sources: [
      { label: 'CERN: a short history of the web', url: 'https://home.cern/science/computing/the-birth-of-the-web/short-history-web/' },
      { label: 'W3C, Tim Berners-Lee: the WorldWideWeb browser', url: 'https://www.w3.org/People/Berners-Lee/WorldWideWeb.html' },
      { label: 'Tim O’Reilly: What is Web 2.0 (2005)', url: 'https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html' },
      { label: 'Wikipedia: history of the World Wide Web', url: 'https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web' },
      { label: 'The original 1989 proposal, as CERN hosts it', url: 'https://info.cern.ch/Proposal.html' },
    ],
    left: {
      paras: [
        'Take the back button, the single most reassuring control ever put in front of a beginner, because whatever happens, you can always go back, and that is a promise worth building into everything you make. And take Google’s act of restraint: an interface can be almost nothing, and win precisely because of it.',
        'What it cost arrived slowly: the open, linkable page began its long consolidation into feeds and platforms. The web taught the world that everything connects. Then the apps arrived to fence it in.',
      ],
      thread: { to: 'touch', text: 'Follow the thread: the page gets swallowed by the app in Touch' },
    },
  },

  'touch': {
    why: [
      'The finger retired the stylus as the default, and pushed the cursor off the small screen with it. When the iPhone arrived in 2007 you pushed the pixels themselves: no pointer, no abstraction, just direct manipulation finally meaning what it said. The screen could now be any size, so design had to learn to flex, and the app became the unit software came in.',
      'The look of this era was skeuomorphism at full volume: stitched leather calendars, green felt game tables, glossy buttons that begged to be pressed. Apple had been polishing that instinct since Aqua in 2000, when Jobs bragged the buttons looked good enough to lick. It was warm, it was legible, and its days were numbered.',
    ],
    contained: [
      { t: 'Aqua, 2000', d: 'Mac OS X’s water-themed interface: translucency, droplets, gel buttons. Apple’s most confident push yet on an idea already a decade old, that a control on screen should look like something you could physically press.' },
      { t: 'The iPhone, 2007', d: 'Capacitive multitouch, announced 9 January 2007 and on sale that June. Pinch, swipe, and flick were common vocabulary within a few years.' },
      { t: 'The App Store, 2008', d: 'Opened 10 July 2008 with about 500 apps. It made the app the dominant unit of software and built an economy around the home screen.' },
      { t: 'Android, 2008', d: 'The open counterweight, first shipping on the HTC Dream in October 2008. It put a touch interface into most of the world’s smartphones and set up the design-system decade that followed.' },
      { t: 'Emoji and i-mode, 1999', d: 'Japan made the mobile internet mainstream first, with NTT DoCoMo’s i-mode in 1999. Shigetaka Kurita drew 176 tiny pictures for it, each one on a grid twelve pixels square, and they became a global written language. They were not quite the first, since J-Phone had shipped a set of 90 in 1997.' },
      { t: 'Responsive web design, 2010', d: 'Ethan Marcotte’s essay gave the flexible screen a method: fluid grids, flexible images, media queries. One layout, every size.' },
    ],
    ui: [
      'Touch removed the last translation layer. Nothing stood between your hand and the object on screen, so interfaces leaned hard on physicality: momentum scrolling, rubber-band bounces, pages you flicked like paper.',
      'And because a fingertip is fat and imprecise, everything grew: targets, spacing, type. Fitts’s law, published in 1954 from a study of people tapping a stylus between metal plates, turned out to govern the size of every button on a phone.',
    ],
    notable: [
      { t: 'Pinch to zoom', d: 'The gesture that sold multitouch to the world in a single demo moment.' },
      { t: 'Momentum scrolling', d: 'The scroll that keeps moving after your finger leaves. Half the reason touch felt alive.' },
      { t: 'The home screen grid', d: 'Icons in rows, apps as objects. The desktop metaphor reborn at thumb scale.' },
      { t: 'The iOS 6 Notes app', d: 'Yellow legal paper and stitched leather: the high-water mark of skeuomorphism, and one of the most conspicuous things iOS 7 deleted.' },
    ],
    gallery: [
      { img: a06Iphone, cap: 'An original iPhone in July 2007, two weeks after it went on sale, running Notes on its yellow legal-pad paper above a glossy keyboard, skeuomorphism at full volume.', credit: 'Photo: Nick Richards, CC BY-SA 2.0. iPhone interface © Apple' },
      { img: t01Ipad, cap: 'A finger drags a card across the green felt of a solitaire game on an iPad in 2010, and there is nothing in between, no cursor and no pointer, just a hand moving something that is pretending to be a real card.', credit: 'Photo: bark, CC BY 2.0, via Wikimedia Commons. Interface © Apple' },
      { img: t02Voicememos, cap: 'Apple’s Voice Memos gave the whole screen over to a chrome studio microphone and a swinging meter, on the theory that if software looked like an object you had already handled, nobody would need teaching.', credit: 'Photo: James Cridland, 2009, CC BY 2.0. Interface © Apple' },
    ],
    now: [
      { img: t03Homescreen, cap: 'A phone held one handed today, apps arranged as a grid of fat rounded squares, because the fingertip never got any smaller after the leather and the felt were thrown out.', credit: 'Photo: Elena Rossini, CC BY-SA 4.0, via Wikimedia Commons' },
      { img: t04Scroll, cap: 'A finger scrolls a list of stories on a phone in the dark, and nobody calls this a gesture any more.', credit: 'Photo: Japanexperterna.se, CC BY-SA 2.0, via Wikimedia Commons' },
    ],
    sources: [
      { label: 'Apple Newsroom: the App Store turns 10', url: 'https://www.apple.com/newsroom/2018/07/app-store-turns-10/' },
      { label: 'Computer History Museum: Little emoji, big story', url: 'https://computerhistory.org/exhibits/little-emoji-big-story/' },
      { label: 'Ethan Marcotte, "Responsive Web Design", A List Apart, 2010', url: 'https://alistapart.com/article/responsive-web-design/' },
      { label: '512 Pixels: 20 years of Aqua', url: 'https://512pixels.net/2020/01/20-years-of-aqua/' },
      { label: 'Emojipedia: correcting the record on the first emoji set', url: 'https://blog.emojipedia.org/correcting-the-record-on-the-first-emoji-set/' },
      { label: 'Apple Newsroom: Apple reinvents the phone with iPhone, January 2007', url: 'https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/' },
    ],
    left: {
      paras: [
        'Take the physics, momentum, bounce, drag, because feedback that behaves like the world is why touch felt alive from the very first flick. And notice that Fitts’s law came back with a vengeance, since a fingertip is fat, and targets, spacing, and type all had to grow. The body always gets a vote.',
        'What it cost was the keys. The physical keyboard and the stylus stopped being the default, and people still mourn the click, though both came back for the people who wanted them, the S Pen in 2011 and the Apple Pencil in 2015. Tactility is the debt touch never repaid, and your phone buzzes to fake it.',
      ],
      thread: { to: 'flat-turn', text: 'Follow the thread: the leather and felt get deleted overnight in The Flat Turn' },
    },
  },

  'flat-turn': {
    why: [
      'Then everyone stripped it bare. And, against the popular memory, Microsoft got there first: the typography-led, texture-free look was already visible in Media Center in 2002 and the Zune in 2006 before being named Metro for Windows Phone 7 in 2010. "Authentically digital" was the pitch: stop pretending pixels are leather.',
      'Apple made it mainstream overnight. Skeuomorphism’s champion Scott Forstall was pushed out in October 2012, Human Interface went to Jony Ive the same day, and iOS 7 was unveiled seven months later, deleting the felt and stitching in one release. Within a year the entire industry had flattened, cleaner, faster, lighter, and with one honest cost: you could no longer always tell what was a button.',
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
      'At its worst it is a guessing game, because strip every affordance and a label, a link, and a button all look identical. The industry spent the next decade putting back the cues it had proudly deleted. The flat turn was never really about looks, it was the ground being cleared so design could become a system.',
    ],
    notable: [
      { t: 'Live tiles, 2010', d: 'Metro’s big idea: the icon as a small living dashboard. It lost the war but predicted widgets everywhere.' },
      { t: 'The iOS 6 to iOS 7 jump', d: 'The single clearest before-and-after in modern UI. Same phone, same apps, different century.' },
      { t: 'The hamburger menu', d: 'Three lines hiding everything, and not a flat-design invention at all, because Norm Cox drew it for the Xerox Star back in 1981. Small screens revived it from 2009, flat design adopted it, and the argument about it has never stopped.' },
      { t: 'Thin type everywhere', d: 'The iOS 7 betas leaned on Helvetica Neue Light and Ultra Light, and the legibility complaints started within days. Apple walked the weights back before shipping and added a Bold Text setting. Elegance first, readability retrofitted.' },
    ],
    gallery: [
      { img: a07Wp7, cap: 'Microsoft’s own launch image for Windows Phone 7, showing the Metro start screen as a grid of flat coloured live tiles, three years before Apple flattened iOS.', credit: 'Image: Microsoft Sweden, CC BY 2.0. Windows Phone interface © Microsoft' },
      { img: f01Win8, cap: 'Laptops on a demo table in a Microsoft store in November 2012, their screens filled edge to edge with the Windows 8 start screen, where flat colour and plain white type have taken over every job that bevels and shadows used to do.', credit: 'Photo: Raysonho, CC0, via Wikimedia Commons. Interface © Microsoft' },
      { img: f02Ios7, cap: 'The Settings app in iOS 7, with the leather and the linen and the glassy buttons all stripped out, leaving hairline rules, flat colour and blue text that you simply had to know was tappable.', credit: 'Screenshot via Wikimedia Commons. Interface © Apple' },
    ],
    now: [
      { img: f03Settings, cap: 'A settings screen in 2025, running the flat argument a decade on and winning it, with plain colour fields, a thin sans serif, a great deal of white space and not one bevel anywhere.', credit: 'Screenshot: Nathan Hadley, CC BY-SA 4.0. GNOME Settings, The GNOME Project' },
      { img: f04Wikipedia, cap: 'Wikipedia today, read by billions of people, built out of nothing but white space, hairline rules and blue text, with the whole main menu folded away behind three stacked lines in the corner.', credit: 'Screenshot: AHollender (WMF), CC BY-SA 4.0, via Wikimedia Commons' },
    ],
    sources: [
      { label: 'Wikipedia: Metro (design language)', url: 'https://en.wikipedia.org/wiki/Metro_(design_language)' },
      { label: 'Wikipedia: flat design', url: 'https://en.wikipedia.org/wiki/Flat_design' },
      { label: 'Nielsen Norman Group: flat design and its usability costs', url: 'https://www.nngroup.com/articles/flat-design/' },
      { label: 'Nielsen Norman Group: long-term exposure to flat design', url: 'https://www.nngroup.com/articles/flat-design-long-exposure/' },
      { label: 'Wikipedia: the hamburger button, drawn by Norm Cox for the Xerox Star in 1981', url: 'https://en.wikipedia.org/wiki/Hamburger_button' },
      { label: 'Apple Newsroom: Apple unveils iOS 7, June 2013', url: 'https://www.apple.com/newsroom/2013/06/10Apple-Unveils-iOS-7/' },
      { label: 'Dezeen: Apple unveils iOS 7 interface by Jonathan Ive at WWDC, June 2013', url: 'https://www.dezeen.com/2013/06/10/new-apple-ios-software-flat-design-jonathan-ive-wwdc/' },
    ],
    left: {
      paras: [
        'Take the trade-off, because you will face it on every project: decoration carries information. Strip the bevels and the screen gets calmer and faster, and harder to read. Affordance versus elegance is not a settled argument, it is a dial, and setting it is your job.',
        'What it cost: certainty. A generation of users learned to tap things experimentally to find out what was interactive, and a decade of small corrections followed.',
      ],
      thread: { to: 'systems-material', text: 'Follow the thread: the missing depth comes back with rules in Systems & Material' },
    },
  },

  'systems-material': {
    why: [
      'This chapter runs through the same years as the flat turn, because it is the same movement seen from underneath. Google put the depth back on purpose: Material Design, announced at I/O in June 2014, treated the screen as layered paper, with surfaces at elevations, shadows that mean something, and motion that follows rules. Matías Duarte’s line summed up the correction to flat design: seams and shadows tell you what you can touch.',
      'The bigger change happened underneath the pixels. Design stopped being screens you draw and became systems you maintain, tokens and components and documentation, Carbon at IBM, Lightning at Salesforce, Polaris at Shopify. The deliverable changed from a picture to a rulebook, and the job changed with it.',
    ],
    contained: [
      { t: 'Material Design, 2014', d: 'A physics more than a look: paper surfaces, real shadows cast from real elevation, ink-ripple feedback. It was codenamed Quantum Paper, and it shipped with Android Lollipop.' },
      { t: 'The design system era', d: 'Carbon at IBM, Lightning at Salesforce, Polaris at Shopify and Atlassian’s own guidelines all published in these years, while Apple’s Human Interface Guidelines, running since 1987, were suddenly read as one system among many. Every serious company wrote its own constitution for screens.' },
      { t: 'Design tokens', d: 'Colours, spacing, and type reduced to named variables shared by designers and code. The pixel argument ended in a JSON file.' },
      { t: 'Figma, 2016', d: 'After an invite-only preview in late 2015, Figma opened to everyone in September 2016, and design moved into the browser and became multiplayer. The file stopped being a file and became a place.' },
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
      { img: a08Elevation, cap: 'The elevation chart from Google’s original Material specification, plotting every component from the switch resting at one unit up to the dialog floating at twenty-four. A design language, turned into measurements.', credit: 'Google, Material Design guidelines, Apache License 2.0' },
      { img: s01Keylines, cap: 'A layout page from the original Material spec, with keylines, margin bands and numbered measurements laid over a real screen, back when a look was turning into a set of rules somebody else had to follow.', credit: 'Google, Material Design guidelines, Apache License 2.0' },
      { img: s02Carbonkit, cap: 'IBM’s Carbon system installed as a symbol library in 2018, where a designer inserts a button by choosing it from a menu instead of drawing one. This is where the deliverable stopped being a picture.', credit: 'IBM Carbon Design System documentation, Apache License 2.0' },
    ],
    now: [
      { img: s03Figma, cap: 'The same system today, attached to a design file alongside IBM’s colour, pictogram and icon libraries, so the components arrive by subscription and update themselves whenever the system does.', credit: 'IBM Carbon Design System documentation, Apache License 2.0' },
      { img: s04Tokens, cap: 'A component in a current Android app, annotated not with pixel measurements but with token names, so the rules now arrive as variables the code can read.', credit: 'Google, Android developer documentation, Apache License 2.0' },
    ],
    sources: [
      { label: 'Wikipedia: Material Design', url: 'https://en.wikipedia.org/wiki/Material_Design' },
      { label: 'Android Developers Blog: Material Design, 2014', url: 'https://android-developers.googleblog.com/2014/08/material-design-in-2014-google-io-app.html' },
      { label: 'Material Design, the original 2014 spec', url: 'https://m1.material.io/' },
      { label: 'IBM Carbon, Shopify Polaris, Salesforce Lightning: design systems', url: 'https://carbondesignsystem.com/' },
      { label: 'Google Design: the eras of Material Design, including the Quantum Paper codename', url: 'https://design.google/library/material-design-eras' },
    ],
    left: {
      paras: [
        'Take your job description, because this era rewrote it, and the working reality for most product designers now is that you will maintain a system at least as often as you draw a screen. The craft moved into tokens, components, and documentation, into naming things well and governing them fairly. Learn to love the rulebook, because you will spend your career inside one.',
        'What it cost was the bespoke screen. When every surface assembles itself from sanctioned parts, hand-drawn pixels become a luxury good. Consistency stopped depending on memory, and design got a little harder to fall in love with.',
      ],
      thread: { to: 'surface-returns', text: 'Follow the thread: systems make restyling cheap, and fashion takes the wheel in The Surface Returns' },
    },
  },

  'surface-returns': {
    why: [
      'After a decade of flatness, fashion took the wheel and surfaces came back. Dark mode became a setting every app suddenly owed you, shipped system-wide by Apple and Google in 2018 and 2019. Frosted, blurred panels had been building since iOS 7 and Yosemite, and macOS Big Sur and Windows 11 pushed them to the front. The internet named the result glassmorphism and traced it back to Aqua.',
      'The era argued with itself in public: neumorphism tried soft extruded shapes and mostly failed the contrast test within a year, brutalism revolted against the polish of design systems with raw HTML honesty, and bento grids boxed everything into tidy compartments. No single style won, which is itself the story. Once design ran on systems and tokens, restyling became cheap, and the industry started changing skins like the seasons.',
    ],
    contained: [
      { t: 'System dark mode, 2018-2019', d: 'macOS Mojave, then Android 10 and iOS 13. Overnight, every interface was expected to be themeable, and "one look" stopped being enough.' },
      { t: 'Neumorphism, 2019', d: 'Soft UI: elements extruded from the background like moulded plastic. Beautiful in screenshots, brutal on contrast and accessibility. A useful cautionary tale.' },
      { t: 'Glassmorphism', d: 'Frosted translucency, background blur, thin light borders. macOS Big Sur in 2020 and Windows 11 in 2021 put it on the default desktop, though Microsoft’s Acrylic material had shipped back in 2017, and Aqua veterans felt déjà vu throughout.' },
      { t: 'Web brutalism, 2014 onward', d: 'Default fonts, hard edges, visible structure. A protest against sameness: if every product uses the same system, ugliness becomes a brand.' },
      { t: 'Bento grids', d: 'Content boxed into modular compartments, named after the lunchbox. Apple’s product pages from 2022 onward popularised it, and feature-showcase pages have looked like this ever since.' },
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
      { img: a09Bigsur, cap: 'macOS Big Sur in 2020, with Maps, Safari and Messages layered as translucent panels and Control Center frosted at the corner, twenty years after Aqua first made pixels look wet.', credit: 'Screenshot: Apple Newsroom. macOS interface © Apple' },
      { img: r01Light, cap: 'A file manager in 2020 in its light theme, an ordinary window doing ordinary work. Look at it closely, because the next picture is the same window.', credit: 'Screenshot: System76, Pop!_OS 20.04, GPLv2+, via Wikimedia Commons' },
      { img: r02Dark, cap: 'The same window, same version, same folder, switched to dark, which by 2020 was all that changing the entire look of a system took, because the colours lived in a theme rather than in each screen.', credit: 'Screenshot: System76, Pop!_OS 20.04, GPLv2+, via Wikimedia Commons' },
    ],
    now: [
      { img: r03Appearance, cap: 'An appearance setting in 2026 with light and dark sitting side by side as a choice, which is where the whole argument landed, appearance as something you pick rather than something the system decides for you.', credit: 'Screenshot: Canonical, Ubuntu 26.04 LTS, GPLv2+, via Wikimedia Commons' },
      { img: r04Liquidglass, cap: 'Apple’s Liquid Glass redesign, in which the frosted panels that were a passing trend in 2020 have become the material the entire system is made of.', credit: 'Apple Inc., macOS Tahoe 26, via Apple Newsroom' },
    ],
    sources: [
      { label: 'Apple Newsroom: macOS Mojave introduces dark mode, 2018', url: 'https://www.apple.com/newsroom/2018/09/macos-mojave-is-available-today/' },
      { label: 'Michal Malewicz: Neumorphism in user interfaces', url: 'https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6' },
      { label: 'Nielsen Norman Group: Dark Mode vs. Light Mode, Which Is Better?', url: 'https://www.nngroup.com/articles/dark-mode/' },
      { label: 'Michal Malewicz: Glassmorphism in user interfaces, 2020', url: 'https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9' },
      { label: 'Michal Malewicz: accessibility versus design trends, on why neumorphism failed', url: 'https://uxdesign.cc/accessibility-vs-design-trends-aeb24a45ef4' },
    ],
    left: {
      paras: [
        'Take the cycle: today’s frosted glass is Aqua’s grandchild, and whatever style you are shipping right now is somebody’s future revival, because style is seasonal and structure endures. And take neumorphism’s one-year rise and fall as the cautionary tale, since fashion that fails accessibility fails, full stop.',
        'What it cost was the one true face. An app no longer has a single look, it has light, dark, high contrast, and reduced motion. Design stopped being a picture and became a range of appearances you are asked to hold together.',
      ],
      thread: { to: 'touch', text: 'Follow the thread: the frosted glass was first polished in Touch, with Aqua, back in 2000' },
    },
  },

  'beyond-cursor': {
    why: [
      'Now the cursor itself is dissolving. Siri in 2011 put a conversation inside the phone, still summoned by a button and still answering on a screen, and then the Echo in 2014 removed the screen altogether and made a request spoken into a room the whole interface. ChatGPT in 2022 turned a text box into a tool for almost anything, and suddenly the frontier of interface design was a conversation again.',
      'Which is where this whole story started, with people typing plain language at a machine and waiting for its answer. Half a century of pointing, clicking, and touching later, the newest interface on earth is once more an empty line waiting for your words. The history of UI is not a straight line, it is a spiral.',
    ],
    contained: [
      { t: 'Siri, 2011', d: 'Born from SRI’s DARPA-funded CALO research, spun out in 2007 and bought by Apple in 2010. Not the first voice assistant, since Google’s Voice Actions beat it to Android by a year, but the one that put a talking computer in a hundred million pockets by default.' },
      { t: 'Alexa and the Echo, 2014', d: 'Announced in November 2014, invitation-only for seven months, and on sale to everyone from June 2015. Voice as the entire product: a cylinder in the kitchen with no screen at all, and the interface was the room itself.' },
      { t: 'ChatGPT, 2022', d: 'Released 30 November 2022 as a free research preview. A single text field that writes, explains, plans, and codes. It passed a million users in five days, and analysts at UBS, citing estimates of a hundred million monthly users by that January, said they could not recall a faster ramp in a consumer app in twenty years of watching the internet.' },
      { t: 'Spatial computing', d: 'Apple’s term for it, borrowed rather than coined: Vision Pro, announced in June 2023 and shipped on 2 February 2024, put windows in your room, driven by your eyes and pinched fingers. The desktop metaphor, unboxed into physical space.' },
      { t: 'Generative UI', d: 'Interfaces that assemble themselves in answer to a request. The bet is that the screen stops being designed in advance and starts being composed on demand.' },
    ],
    ui: [
      'The interface is becoming intent. You say what you want, in your own words, and the system negotiates the how. The controls that defined half a century of design, menus, buttons and windows, may become optional surfaces the machine generates when useful, and that is this site’s bet rather than a settled fact.',
      'What is being proposed in the cursor’s place is attention itself, your voice, your gaze, your context. The open question of this era is honesty, because a button showed you what was possible, while a blank text box promises everything and shows you nothing.',
    ],
    notable: [
      { t: 'The wake word', d: '"Hey Siri", "Alexa": an interface you enter by name, with no visible edge at all.' },
      { t: 'The chat box, 2022', d: 'One rectangle for every task. The command line’s grandchild, wearing plain English.' },
      { t: 'Look and pinch, 2024', d: 'Vision Pro made your eyes the pointer and your fingers the click for a mainstream audience, five years after HoloLens 2 did it for developers. Fitts’s law, meet eye tracking.' },
      { t: 'The prompt', d: 'The word itself came full circle: from the blinking cursor of the 1960s to the sentence you type at a model today.' },
    ],
    gallery: [
      { img: a10Echo, cap: 'An Amazon Echo listening, its light ring lit, which is the entire interface: no screen and no cursor, just a glowing edge telling you the machine is paying attention.', credit: 'Photo: Smart Home Perfected, CC BY 2.0' },
      { img: n01Visionpro, cap: 'A man wearing an Apple Vision Pro in 2024, one hand raised in the pinch that Apple made the click while his eyes do the pointing, the desktop metaphor unpacked into the room around him.', credit: 'Photo: Ramsey Cardy, Collision via Sportsfile, CC BY 2.0, via Wikimedia Commons' },
      { img: n02Chatgpt23, cap: 'ChatGPT in February 2023, with Free Research Preview still printed along the bottom of a screen that is otherwise nothing but a question, an answer, and an empty box waiting for the next one.', credit: 'Screenshot: Pollema, CC BY-SA 4.0, via Wikimedia Commons. Interface © OpenAI' },
    ],
    now: [
      { img: n03Gemini, cap: 'An assistant in 2026 with the whole window given over to one line of invitation and one empty field beneath it, the newest interface on earth asking what a teletype asked in 1964.', credit: 'Screenshot via Wikimedia Commons. Interface © Google' },
      { img: n04Chatnow, cap: 'A conversation with a machine that answers in sentences, where half a century of pointing and clicking arrives, back at a blinking line and a question.', credit: 'Screenshot via Wikimedia Commons. Interface © OpenAI' },
    ],
    sources: [
      { label: 'SRI: the origins of Siri', url: 'https://www.sri.com/hoi/siri/' },
      { label: 'OpenAI: introducing ChatGPT, November 2022', url: 'https://openai.com/index/chatgpt/' },
      { label: 'Apple Newsroom: Apple Vision Pro', url: 'https://www.apple.com/newsroom/2024/01/apple-vision-pro-available-in-the-us-on-february-2/' },
      { label: 'Wikipedia: Amazon Echo', url: 'https://en.wikipedia.org/wiki/Amazon_Echo' },
      { label: 'Amazon: Echo goes on sale to everyone, June 2015', url: 'https://press.aboutamazon.com/2015/6/amazon-echo-now-available-to-all-customers' },
      { label: 'Apple Newsroom: iPhone 4S and Siri, October 2011', url: 'https://www.apple.com/newsroom/2011/10/04Apple-Launches-iPhone-4S-iOS-5-iCloud/' },
    ],
    left: {
      paras: [
        'Take the open question, because it is yours now: a button showed you what was possible, while a blank text box promises everything and shows nothing. The affordance argument from the flat turn is back, at full scale. Someone has to design the honesty of these systems, and that someone is you.',
        'What it is costing, right now, is the certainty of pointing. See it, click it, move it, the grammar of half a century of direct manipulation, is dissolving into a negotiation with a machine that answers back. What gets kept and what gets lost is being decided as you read this.',
      ],
      thread: { to: 'command-line', text: 'Close the loop: this is where the story began, in The Command Line' },
    },
  },
};

