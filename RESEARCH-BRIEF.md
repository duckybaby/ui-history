# The History of UI — Research Brief

Raw, agnostic source material for the site. **No era structure imposed** — this is
the territory; you draw the map (how many stops, where the cuts go).

Two deep-research passes ran behind this (fan-out web search → fetch → 3-vote
adversarial verification → cited synthesis). The harness caps at 25 verified claims
per run, so coverage is uneven. Everything below is marked for confidence so you
know what's load-bearing.

## Confidence legend
- **✓ Verified** — adversarially fact-checked this research (2–3 of 3 verifiers agreed), primary/authoritative sources.
- **◇ Standard history** — well-established and uncontested, but *not* individually triple-verified in this pass. Safe to use; worth a citation check before it goes on the public site.
- **⚠ Contested / myth** — credit is disputed, or it's a popular claim that's actually wrong. Handle with care; details in Part 3 & 4.

> The single biggest theme the research kept surfacing: **almost nothing here was
> "invented" by one person.** The mouse, the GUI, hypertext, flat design — each was an
> *evolution across multiple actors*. The honest, defensible framing for the whole
> site is lineage, not lone geniuses. That's also a more interesting story.

---

## PART 1 — The chronological spine

### Before the screen — mechanical & analog interfaces (≈1800–1945)
The "interface" is older than the computer. These are the input habits we inherited.

- **The Jacquard punched card → Babbage → Hollerith → IBM** ✓
  A single unbroken lineage and the strongest-verified thread in the whole brief.
  Jacquard's loom used punched cards to control a pattern; Babbage planned in **1837**
  to feed his Analytical Engine programs and data on "number cards"; Herman Hollerith
  built an electromechanical punched-card **tabulator** (patent filed 1884) used at
  scale for the **1890 US Census**; his Tabulating Machine Co. (1896) merged into CTR
  (1911) and was renamed **IBM in 1924**. Punch cards were *the original programming
  interface* — and stayed the dominant way people "talked to" computers for ~70 years.
  Quote (Ada Lovelace, 1843): *"The Analytical Engine weaves algebraic patterns just
  as the Jacquard loom weaves flowers and leaves."* ✓
  ⚠ Don't repeat: the "Jacquard demonstrated it in Lyon in 1801" date and the
  "mercury-circuit binary 1/0" mechanism story both **failed verification**.

- **The typewriter & the QWERTY keyboard** ◇ + ⚠
  Christopher Latham Sholes, commercialised by Remington (**1874**). QWERTY is the
  single most durable UI decision in history — still under your fingers.
  ⚠ **Myth to bust:** QWERTY was *not* designed "to slow typists down." It was
  arranged to reduce typebar jamming on adjacent strikes (and partly to let salesmen
  type "TYPE WRITER" on one row). Dvorak (1936) was an efficiency-minded rival that
  never displaced it — a clean example of *lock-in beating optimisation*.

- **The telegraph key & Morse code** ◇
  The first electric human→machine signalling: a single button, meaning encoded in
  *timing*. The "interface" was a rhythm you learned with your body.

- **The telephone — switchboard → rotary dial → touch-tone** ◇
  Human operators at plug switchboards were literally the "user interface" of the phone
  network (and one of the first mass female tech workforces — a cultural-impact note).
  Almon Strowger's automatic exchange killed the operator; the **rotary dial** made
  *you* the operator. The **touch-tone (DTMF) keypad** (Bell, 1963) fixed the 3×4
  layout that later seeded calculator and phone keypads — and, eventually, the
  on-screen dialpad.

- **Mechanical calculators & adding machines** ◇
  Keys, levers, registers — the ancestors of the numeric keypad and the idea that a
  machine gives you *immediate* feedback for an input.

- **Human factors / ergonomics is born (WWII → 1954)** ◇
  WWII aircraft cockpits were killing pilots through confusing, inconsistent controls
  ("pilot error" was often *design* error — Alphonse Chapanis's famous studies). This
  founded **human factors**, the direct ancestor of UX. **Fitts's Law (Paul Fitts,
  1954)** — the time to hit a target depends on its size and distance — is still the
  math behind every button size and menu edge.

- **The Memex — Vannevar Bush** ✓ + ⚠
  An imagined electromechanical microfilm desk that let a user build *permanent
  associative links* (trails) between documents. Conceived late 1930s, popularised in
  the essay **"As We May Think" (1945)**. Foreshadowed the personal computer and
  hypertext; directly inspired Engelbart and Ted Nelson (who coined "hypertext," 1965).
  ⚠ **Originality is contested** (revisionists point to Paul Otlet's Mundaneum and
  Emanuel Goldberg as earlier). Safe verb is *"foreshadowed / inspired,"* never
  *"invented."* ⚠ Also: the exact Atlantic Monthly bibliographic citation **failed
  verification** — re-check before printing "July 1945, vol. 176…".

### The command era — batch, teletype, time-sharing, the CLI (1950s–1970s)
Before pictures, you *typed*. This era's ideas (the prompt, the pipe, the shell) never
died — they're under every terminal today.

- **Batch processing** ◇
  You handed a deck of punch cards to an operator and came back hours later for a
  printout. No interactivity — the human waited on the machine, not the reverse.

- **Teletype (TTY)** ◇
  Repurposed telegraph-era teleprinters became the first interactive computer I/O —
  you typed a line, the machine typed back. The word `tty` still means your terminal.

- **Time-sharing & CTSS (1961)** ✓ + ⚠
  The pivotal shift from batch to *interactive*: many users at terminals, the computer
  switching between them fast enough that each feels alone with it. Conceived ~end of
  the 1950s (⚠ credit shared — *"several people including John McCarthy"*; Strachey
  priority dispute). First real general-purpose demo: **CTSS** (Corbató, Daley,
  Merwin-Daggett, MIT, demonstrated **Nov 1961**). Corbató won the 1990 Turing Award.

- **Multics → Unix (1969)** ✓
  Unix was born **1969 at Bell Labs** (Ken Thompson; Dennis Ritchie wrote C), out of
  the *collapse* of the over-ambitious Multics project, first on a cast-off PDP-7 that
  had been running Thompson's "Space Travel" game. The **pipe** (1972, at Doug
  McIlroy's insistence) is one of the most admired interface ideas ever — small tools,
  composed. Ritchie's stated goal was social, not technical:
  *"…not just a good environment to do programming, but a system around which a
  fellowship could form."* ✓ (great pull-quote)

- **The CLI, shells, and the VT100 (1978)** ◇
  The DEC VT100 standardised the text terminal; the shell standardised the
  command-line grammar. This is the interface that *refused to die* — every developer
  still lives in a descendant of it.

### The graphical idea is born (1963–1973)
- **Sketchpad — Ivan Sutherland (Jan 1963)** ✓
  MIT PhD (advised by Claude Shannon). Drew directly on a CRT with a **light pen**,
  with shapes that obeyed constraints. Widely cited as the seed of interactive
  computer graphics and the GUI. Sutherland framed it as *conversation*, not drawing:
  *"makes it possible for a man and a computer to converse rapidly through the medium
  of line drawings."* ✓ (Scope it "an early," not "the first" — Whirlwind/SAGE light-gun
  work predates it.)

- **The Mother of All Demos — Doug Engelbart (Dec 9, 1968)** ◇
  In one 90-minute live San Francisco demo, Engelbart's SRI team showed the **mouse,
  windows, hypertext links, real-time collaborative editing, version control, and
  video conferencing** — most of it years from shipping anywhere. The most famous
  single demo in computing. (Specifics weren't re-verified this pass, but the event is
  exhaustively documented.)

- **The mouse — SRI → PARC → Apple** ✓
  *Evolution, not invention.* Conceived by Engelbart at SRI (built 1964, patent
  filed 1967); developed into the rolling-ball form by **Bill English**'s group at
  Xerox PARC (1971+); made cheap and one-button by **Apple** for Lisa/Mac. ⚠ Note the
  independent **Telefunken** ball-mouse in Germany (mid-1960s) — a non-Western parallel.

### From lab to product — the desktop metaphor (1973–1984)
- **Xerox Alto (1973)** ✓
  The first machine to combine in *one box*: a mouse, a bitmapped visual UI with
  windows and icons, networking (Ethernet), WYSIWYG, easy graphics, and e-mail. Never
  sold. ⚠ **Important nuance:** the Alto had windows and icons, but the *full desktop
  metaphor* (files/folders as a systematised idea) came later, with the Star.

- **The desktop metaphor & the icon — David Canfield Smith / Xerox Star (1981)** ◇ + ⚠
  Smith is credited with inventing the **icon** and the **desktop metaphor** in his
  1975 thesis; the **Xerox Star (1981)** was the first *commercial* WIMP system
  (Windows, Icons, Menus, Pointer) — folders, overlapping windows, double-click. It
  flopped at ~$16,000/seat but set the template. ⚠ The Star used *select-then-press-
  Copy/Move-key*, **not** drag-and-drop (that came from Apple).

- **Steve Jobs visits PARC (Dec 1979)** ✓ + ⚠
  Larry Tesler demoed the Alto; Jobs (24) reacted explosively. Tesler's account:
  Jobs was *"jumping around the room… 'Why aren't you doing anything with this? This
  is revolutionary!'"* and *"You're sitting on a gold mine!"* ✓ ⚠ There were actually
  *two* visits; the substantive one featured Adele Goldberg demoing Smalltalk. The
  "creation myth" debate is about whether this was as singularly decisive as legend
  says — not whether it happened.

- **"Apple just copied Xerox" — overstated** ✓
  Per original Mac engineer **Bruce Horn** (himself ex-PARC): *"Most people assume it
  came directly from Xerox… it just isn't true — the differences are substantial."*
  Mac-originated ideas include **drag-and-drop, the resource fork, file types &
  creators, in-place renaming, desk accessories, and control panels.** Horn still
  credits Xerox for the desktop metaphor and icon. ⚠ The stronger claim that "Apple
  invented the menu bar, pull-down menus, and the trash can" **failed verification** —
  attribute those carefully (the menu bar/pull-downs trace partly to earlier systems).

### The GUI goes mainstream (1983–1995)
- **Apple Lisa (1983)** ◇ — first to market with pull-down menus, drag-and-drop, the
  trash can; $9,995 and a commercial failure, but the dress rehearsal for the Mac.
- **Apple Macintosh (1984)** ◇ — launched Jan 24 1984 after Ridley Scott's **"1984"**
  Super Bowl ad. First *commercially successful* GUI computer; put the mouse on
  ordinary desks.
- **Microsoft Windows lineage** ◇ — 1.0 (1985, tiled not overlapping) → 3.0/3.1 (1990,
  the breakout) → **95** (the Start button, taskbar, system tray — the look a
  generation thinks of as "the computer") → XP → 7 → 8/Metro → 10/11. The slow
  conquest that put a GUI on most of the world's PCs.
- **Commodore Amiga Workbench (1985)** ◇ — colour, multitasking, pre-emptive — ahead of
  its time, beloved, commercially mismanaged.
- **Digital Research GEM (1985)** ◇ — a GUI for DOS/Atari ST; Apple's lawsuit forced it
  to cripple its Mac-like features (early IP-vs-UI skirmish).
- **HyperCard — Bill Atkinson, Apple (1987)** ✓ — *"programming for the rest of us."*
  Stacks of linked "cards," scripted in the English-like **HyperTalk**. Hypermedia for
  everyone, and a direct influence on **JavaScript** (Eich cited HyperTalk), the WWW
  proposal, and the early ViolaWWW browser. ✓
- **NeXTSTEP (1989)** ◇ — Jobs's post-Apple OS; the Dock, Interface Builder, drag-and-
  drop dev. Its bones became **macOS and iOS** — and Berners-Lee wrote the first
  browser on a NeXT machine.
- *Aesthetic of the era:* grey 3D "chrome" — beveled buttons, raised toolbars, the
  faux-physical look that later got named **skeuomorphism**.

### The web era (1989–2006)
- **The World Wide Web — Tim Berners-Lee, CERN** ✓ — proposal **12 Mar 1989**; first
  browser/editor **WorldWideWeb** and first site (info.cern.ch) live **Dec 1990**;
  public **Aug 1991**. He assembled three pieces — **URL, HTML, HTTP** — and made the
  *link* the most important control in computing. (Cailliau co-authored the later
  formal proposal; the March 1989 one was Berners-Lee's alone.)
- **Mosaic — Andreessen & Bina, NCSA (1993)** ✓ — the turning point: showed **images
  inline with text**, ran on ordinary machines. Turned the web from researchers' tool
  into something everyone wanted. (Then Netscape Navigator, 1994.)
- **The browser wars** ◇ — Netscape vs Internet Explorer (bundled with Windows). IE won
  the battle, lost the war; the fight shaped web standards for a decade.
- **The Google homepage (1998)** ◇ — one search box in an ocean of white space, a
  radical act of restraint against the "portal" wall-of-links. Taught a generation
  that an interface could be *almost nothing*.
- **Web 2.0 — O'Reilly (2004) / essay (2005)** ✓ — the phrase came from an O'Reilly/
  MediaLive brainstorm (Dale Dougherty); the 2004 conference + O'Reilly's Sept 2005
  essay codified "the web as platform," user-generated content, participation. ⚠ The
  literal phrase was used earlier by **Darcy DiNucci (1999)** — scope it as
  "popularised by," not "coined by," O'Reilly.
- **AJAX (term coined by Jesse James Garrett, 2005)** ◇ — **Gmail (2004)** and **Google
  Maps (2005)** updated the page *without reloading*. Web pages started feeling like
  applications; the site/software line blurred.
- *Aesthetic of the era:* **Aqua / glossy Web 2.0** — see Part 2.

### Touch & mobile (1993–2012)
- **Apple Newton (1993)** ◇ — the "PDA," handwriting recognition that (notoriously)
  didn't work well; mocked but visionary. **Palm Pilot (1996)** ◇ got it right with
  **Graffiti** — a simplified stroke alphabet *the user learned* to meet the machine
  halfway. The stylus era.
- **i-mode & emoji — Japan (1999)** ✓ — Shigetaka Kurita's **176-character** emoji set
  for NTT DoCoMo's i-mode, drawn on a **12×12 grid** from manga/dingbats. A major
  non-Western contribution to the global UI vocabulary. ⚠ Not the *first-ever* emoji —
  SoftBank's 1997 set predates it. ⚠ Don't say "for phones and pagers" (failed verify).
- **iPhone (2007)** ◇ — capacitive **multitouch** and direct manipulation; you pushed
  pixels with a finger. Killed the stylus and the physical keyboard as defaults; reset
  what an interface could be. Jobs: *"Who wants a stylus? … yuck."*
- **The App Store (2008)** ✓ — opened **Jul 10 2008** with **500 apps**; made the "app"
  the dominant unit of software and *"ignited a cultural, social and economic
  phenomenon"* (Apple). The store, not just the phone, was the platform shift.
- **Android (2008)** ◇ — open mobile OS; put touch UI into most of the world's hands.
  Its **Material Design** language (2014) would shape billions of screens.
- **Responsive Web Design — Ethan Marcotte, A List Apart (May 25, 2010)** ✓ — three
  ingredients: **fluid grids, flexible images, media queries**, so one layout reflows
  to any screen. Became the default way the web is built. ⚠ He *spoke* the phrase ~7
  weeks earlier (An Event Apart, Apr 6 2010); concept owes to John Allsopp's "A Dao of
  Web Design."

### Voice & conversational UI (1962–today)  ◇ (whole cluster unverified this pass)
- **IBM Shoebox (1962)** ◇ — recognised 16 spoken words/digits; the public debut of
  speech input.
- **ELIZA — Joseph Weizenbaum, MIT (1966)** ◇ — the first **chatbot**; the "DOCTOR"
  script mimicked a therapist with pattern-matching. People bared their souls to it,
  which *horrified* Weizenbaum and turned him into an AI critic — a sharp cultural-
  impact and ethics thread.
- **Harpy — CMU/DARPA (1976)** ◇ — ~1,000-word continuous speech recognition.
- **IVR ("press 1 for…")** ◇ — the voice interface everyone actually used, and
  everyone hated. The cautionary tale of voice UX.
- **Siri (2011)** ◇ — born from **SRI**'s DARPA-funded CALO project, bought by Apple.
  Put a conversational assistant in every pocket.
- **Amazon Alexa / Echo (2014)** ◇ — voice as the *primary* interface for a device;
  the ambient, screenless computer. **Google Assistant** followed.
- **ChatGPT (Nov 2022) → generative / conversational UI** ◇ — the text box becomes a
  *universal* interface; natural language + generated screens start dissolving the
  cursor-and-canvas model that ruled for 50 years. This is the live frontier.

### Spatial, immersive & gestural (1968–2024)  ◇ (whole cluster unverified this pass)
- **The "Sword of Damocles" — Ivan Sutherland (1968)** ◇ — the first head-mounted
  display; so heavy it hung from the ceiling. The origin of VR/AR.
- **VPL Research — Jaron Lanier (1980s)** ◇ — popularised the term **"virtual
  reality"**; the **DataGlove** made the hand an input device. **Virtuality** arcade
  machines (1991) gave the public its first taste.
- **Nintendo Wii (2006)** ◇ + **Microsoft Kinect (2010)** ◇ — your *body* as the
  controller; Kinect was controller-*free* gesture/skeleton tracking (and a Guinness
  record for fastest-selling consumer device).
- **Oculus Rift (Kickstarter 2012 → Facebook buys it 2014)** ◇ — reignited modern VR.
  **Microsoft HoloLens (2015)** ◇ — untethered AR. **Apple Vision Pro (2024)** ◇ —
  Apple's bet on **"spatial computing,"** eyes + hands as the pointer.

---

## PART 2 — The aesthetic through-line (the parallel "history of looks")
This is a *second timeline* that runs alongside the tech one. Often the cleaner way to
tell a UI story — because people *remember the look*. You could even structure the
whole site around this instead of the tech milestones.

- **Skeuomorphism (peak ≈2000–2012)** ✓ — interfaces imitating real materials: leather,
  felt, wood, glass, paper. Apple's **Aqua (2000)** is the anchor: water-themed, glossy,
  translucent, "lickable." Jobs: *"We made the buttons on the screen look so good you'll
  want to lick them."* ✓ Rationale: realism = **discoverability** (a button that looks
  pressable invites a press). What was lost when it died: warmth, and built-in affordance.
- **Glossy "Web 2.0" style (mid-2000s)** ◇ — gradients, reflections, rounded rectangles,
  big glossy badges, starbursts, the "beta" ribbon. The visual signature of the
  participation web.
- **The flat turn — Microsoft pioneered, Apple popularised** ✓ —
  ⚠ **Credit correction:** Microsoft got there *first* — Media Center (2002), Zune
  (2006), formalised as **Metro / Modern UI** with **Windows Phone 7 (2010)**:
  typography-led, "authentically digital," no fake textures. **Apple's iOS 7 (2013)**
  then made flat mainstream *overnight* (Jony Ive stripped the skeuomorphism; Scott
  Forstall, its champion, had just left). ⚠ iOS 7 wasn't *truly* flat — it kept depth,
  blur, translucency, parallax.
- **Material Design — Google (2014)** ✓ — not a look but a *documented system*:
  elevation, shadows, motion, a z-axis. Often called **"flat 2.0" / semi-flat** because
  it deliberately put depth *back*. Matías Duarte: *"Seams and shadows provide meaning
  about what you can touch."* Made "design system" a mainstream idea.
- **Neumorphism (2020)** ◇ — soft, extruded, monochrome "soft UI" (Michal Malewicz named
  it); a brief, much-debated revival of subtle skeuomorphism. Mostly failed on contrast/
  accessibility — a useful "fashion vs. usability" case study.
- **Glassmorphism (2020–21)** ◇ — frosted, blurred translucent panels (macOS Big Sur,
  Windows 11 Acrylic). A descendant of Aqua's translucency. (Apple's 2025 "Liquid Glass"
  continues this lineage — worth a forward-looking note.)
- **Web brutalism (≈2016+)** ◇ — deliberately raw, "ugly," default-HTML, high-contrast,
  anti-corporate. A reaction *against* the sameness of polished design systems.
- **Bento grids (≈2022+)** ◇ — modular boxed-compartment layouts (named after the
  Japanese lunchbox; Apple's product pages popularised them). The current default for
  "feature showcase" pages.
- **System-wide dark mode (2018–2019)** ◇ — macOS Mojave (2018), iOS 13 / Android 10
  (2019). Overnight, *every* interface was expected to be themeable.
- **The rise of design systems** ◇ — Material, Apple HIG, Salesforce **Lightning**, IBM
  **Carbon**, Atlassian, Shopify **Polaris**. Design shifted from drawing screens to
  maintaining systems — the current professional reality.

---

## PART 3 — Credit debates & myths (the "actually…" material)
These make great content *because* they puncture the clean story.

1. **"Apple copied the Mac from Xerox."** Overstated — the differences are larger than
   the legend; Mac added drag-and-drop, resources, more. ✓ (But Xerox *did* originate
   the desktop metaphor & icon.)
2. **"X invented the mouse."** No one did alone: SRI (Engelbart) → PARC (English) →
   Apple, plus an independent German Telefunken mouse. ✓
3. **"QWERTY was made to slow you down."** Myth — it was about typebar jams. ⚠
4. **"Who invented the icon / desktop metaphor?"** Credited to David Canfield Smith
   (1975 thesis) / Xerox Star — *not* the Alto. ⚠
5. **"Bush invented the idea of linked knowledge."** Contested — Otlet & Goldberg got
   there earlier; Bush *foreshadowed*, didn't invent. ⚠
6. **"The Japanese invented the emoji."** The famous 176-set (1999) wasn't first —
   SoftBank's 1997 set predates it. ⚠
7. **"O'Reilly coined 'Web 2.0.'"** Popularised, not coined — DiNucci used it in 1999. ⚠
8. **"McCarthy invented time-sharing."** Shared credit; Strachey priority dispute. ⚠

---

## PART 4 — Refuted claims — DO NOT put these on the site
These specifically *failed* adversarial verification. Listed so they don't sneak in.

- ✗ "As We May Think, *The Atlantic Monthly*, July 1945, Vol. 176 No. 1, pp. 641–49" — exact citation failed; re-verify before printing it.
- ✗ "Emoji… originally for mobile phones **and pagers**" — the pager detail failed.
- ✗ "Apple **invented** the menu bar, pull-down menu, and trash can / replaced Xerox's indirect model with direct manipulation" — failed; don't assert these specific attributions.
- ✗ "Jacquard demonstrated his loom in **Lyon in 1801**" — date failed.
- ✗ Hollerith's tabulator used a "**mercury-circuit binary 1/0**" mechanism — failed.

---

## PART 5 — Pull-quotes worth keeping (all attributable)
- **Ada Lovelace (1843):** "The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves." ✓
- **Ivan Sutherland (1963):** "[Sketchpad] makes it possible for a man and a computer to converse rapidly through the medium of line drawings." ✓
- **Dennis Ritchie (on Unix):** "…not just a good environment to do programming, but a system around which a fellowship could form." ✓
- **Larry Tesler (quoting Jobs at PARC, 1979):** "You're sitting on a gold mine!" ✓
- **Steve Jobs (Aqua, 2000):** "We made the buttons on the screen look so good you'll want to lick them." ✓
- **APDA / HyperCard (1987):** "Programming for the rest of us." ✓
- **Matías Duarte (Material, 2014):** "Seams and shadows provide meaning about what you can touch."
- **Alan Kay:** "Simple things should be simple. Complex things should be possible." (currently on the site) ⚠ verify exact wording/attribution before relying on it.
- **Alan Kay:** "The best way to predict the future is to invent it." (PARC, 1971) — a strong alternate.

---

## PART 6 — Non-Western & lesser-known (worth a dedicated thread)
- **i-mode & emoji (Japan, 1999)** ✓ — the mobile-internet + emoji vocabulary the West later absorbed.
- **Telefunken Rollkugel mouse (Germany, mid-1960s)** ✓ — independent ball-mouse, parallel to SRI.
- **Setun (USSR, 1958)** ◇ — a *ternary* (base-3) computer; a road not taken in how machines could represent and interface with data.
- **Paul Otlet's Mundaneum (Belgium, 1910s–30s)** ⚠ — a pre-digital "web" of indexed knowledge; the Memex's contested ancestor.

---

## PART 7 — The "what was lost" thread (the cultural-impact angle you picked)
A throughline you could weave across every stop — each gain quietly cost something:
- The **telephone operator** (a whole profession, automated away by the dial).
- **Command-line fluency** as a mass skill (the GUI made computers usable *and* opaque).
- **Skeuomorphic affordance** — flat design looks cleaner but you can't always tell what's tappable.
- **The stylus & handwriting** (Newton/Palm → killed by the finger → quietly returning with the Apple Pencil).
- **The physical keyboard** on phones (and the tactility people still mourn).
- **The open, linkable web** (Web 2.0 participation → consolidated into a few platforms/apps).
- **Direct manipulation itself** — conversational/generative UI may be undoing the 50-year reign of "see it, point at it, move it."

---

## How to use this & what's next
- **Verified spine you can lean on hardest:** punch-card lineage, time-sharing/Unix,
  Sketchpad, the mouse lineage, Alto, Jobs@PARC, Mac-vs-Xerox, HyperCard, WWW/Mosaic,
  App Store, emoji, Aqua, the flat turn, Material, responsive design, Web 2.0.
- **Standard-history (◇) sections** — voice UI, spatial/VR/AR, post-flat aesthetics,
  and several pre-1945 + GUI items — are reliable but *not* triple-verified this pass.
- **If you want any ◇ section hardened to ✓** (most likely: voice, spatial, and the
  post-flat aesthetics, since they had zero verified claims), say which and I'll fire a
  third targeted research pass at just those.

When you've decided **how many stops / eras** and where the cuts go, hand me the cut
and I'll restructure `data.js` to match — then we go back to the scroll animation.
