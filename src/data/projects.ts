/**
 * Single source of truth for the whole site.
 *
 * Every project fact used by the homepage, the product pages, the gallery and
 * the footer comes from this file, so a correction only ever has to be made
 * in one place. All of it is taken from the projects' own README files,
 * changelogs and the running applications.
 */

export type Platform = 'Android' | 'Windows';

export interface GalleryShot {
  src: string;
  alt: string;
  caption: string;
}

export interface FeatureBlock {
  id: string;
  label: string;
  title: string;
  body: string;
  points?: string[];
  shot?: string;
  shotAlt?: string;
  /** Which side the artwork sits on at desktop widths. */
  side?: 'left' | 'right';
  frame?: 'phone' | 'window';
}

export interface WorkflowStep {
  title: string;
  body: string;
}

export interface Audience {
  title: string;
  body: string;
}

/** The artwork used to present a project in the homepage showcase carousel. */
export interface Showcase {
  label: string;
  hero: { src: string; alt: string; frame: 'phone' | 'window' };
  detail: { src: string; alt: string };
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  problem: { heading: string; body: string; audience: Audience[] };
  platform: Platform;
  platforms: Platform[];
  accent: string;
  accentInk: string;
  icon: string;
  repo: string;
  releases: string;
  version: string;
  released: string;
  /** True while the named version is still rolling out to the releases page. */
  pending?: boolean;
  license: string;
  licenseUrl: string;
  size: string;
  stack: string[];
  highlights: string[];
  showcase: Showcase;
  facts: { label: string; value: string }[];
  features: FeatureBlock[];
  gallery: GalleryShot[];
  workflow: WorkflowStep[];
  privacy: string[];
}

export const projects: Project[] = [
  {
    slug: 'ironpulse',
    name: 'IronPulse',
    tagline: 'A workout logger that keeps the numbers straight.',
    summary:
      'A dark-themed workout logger for strength training and calisthenics, built for the gym: offline by default, no account, no tracking, and a 1,333-movement catalogue whose animations stream on demand instead of being shipped inside the APK.',
    problem: {
      heading: 'Most workout apps want your account, your subscription and your training history.',
      body: 'IronPulse was written for the opposite of that. There is nothing to sign up for, nothing to subscribe to and no screen that needs a connection. Every set you log, every routine you build and every weigh-in you record lives in a database on your own phone, and you can wipe all of it in one tap when you want to.',
      audience: [
        {
          title: 'People who lift',
          body: 'Quick workouts for the days you are not following a plan, and routines for the days you are.',
        },
        {
          title: 'Calisthenics and bodyweight athletes',
          body: 'Bodyweight and cardio sets have their own fields and their own definitions of volume.',
        },
        {
          title: 'People who keep the record',
          body: 'Estimated one-rep max, a twelve-month heat map and a weigh-in timeline, computed on the device.',
        },
      ],
    },
    platform: 'Android',
    platforms: ['Android'],
    accent: '#5fe08c',
    accentInk: '#04140a',
    icon: '/img/ironpulse/icon.png',
    repo: 'https://github.com/JuggyBob/IronPulse',
    releases: 'https://github.com/JuggyBob/IronPulse/releases/latest',
    version: '2.0.0',
    released: '21 October 2026',
    license: 'CC BY-NC-SA 4.0',
    licenseUrl: 'https://github.com/JuggyBob/IronPulse/blob/main/LICENSE',
    size: '≈ 20 MB APK',
    stack: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Room / SQLite', 'DataStore', 'Coil', 'Media3'],
    highlights: [
      '1,333 exercises with streamed animations',
      'A routine is a whole week, not a list',
      'Autosaved sessions that survive a crash',
      'Volume, estimated 1RM and weigh-in analytics',
      'Optional AI coach with your own key',
    ],
    showcase: {
      label: 'The main project',
      hero: {
        src: '/img/ironpulse/dashboard.webp',
        alt: 'The IronPulse home dashboard on a phone, showing today’s workout, the weekly plan and the last seven days.',
        frame: 'phone',
      },
      detail: {
        src: '/img/ironpulse/exercise.webp',
        alt: 'An IronPulse exercise with its animation and coaching instructions.',
      },
    },
    facts: [
      { label: 'Platform', value: 'Android 7.1+ (API 24)' },
      { label: 'Latest release', value: 'v2.0.0' },
      { label: 'Package size', value: '≈ 20 MB' },
      { label: 'Licence', value: 'CC BY-NC-SA 4.0' },
      { label: 'Architecture', value: 'MVVM · Compose → ViewModel → Repository → Room' },
      { label: 'Database', value: 'Room / SQLite, schema v9' },
      { label: 'Network', value: 'None unless you enable the AI coach' },
    ],
    features: [
      {
        id: 'home',
        label: 'Home',
        title: 'The screen that answers “what am I doing today?”',
        body: 'IronPulse opens on Home, and Home is built around the questions you actually have when you open a workout logger: what day it is, what the routine assigns to today, whether you can start right now, what you trained last, when you last weighed in and how the week is going.',
        points: [
          'Today’s workout, with a Start button that opens the real session',
          'Your week — all seven days, with rest days marked',
          'The last 7 days as a heat map, switchable between volume and duration',
          'Training days counted for life — a week off costs you nothing',
          'This week in three numbers: workouts, time and volume',
          'Body weight, its change since the last weigh-in, and a Log Weight button',
        ],
        shot: '/img/ironpulse/dashboard.webp',
        shotAlt:
          'IronPulse home dashboard showing today’s workout, the weekly plan, the last seven days heat map, training statistics and body weight.',
        side: 'right',
      },
      {
        id: 'routines',
        label: 'Routines',
        title: 'A routine is a week, not a list of exercises',
        body: 'In IronPulse a routine is seven day slots, one per weekday. A day with nothing in it is a rest day — there is no separate rest flag that can drift out of step with the exercises. The week can start on Monday or on Sunday, and it decides where a workout with no day of its own is laid out.',
        points: [
          'A week planner with all seven weekdays and their exercise counts',
          'New exercises land on whichever day is open',
          'Any saved workout can still be started on any day',
          'A default added weight per exercise, set from the routine editor',
        ],
        shot: '/img/ironpulse/routine.webp',
        shotAlt:
          'The IronPulse routine editor showing the week schedule with each weekday and its exercise count.',
        side: 'left',
      },
      {
        id: 'library',
        label: 'Exercise library',
        title: '1,333 movements, filtered the way you actually think',
        body: 'Every exercise carries its equipment, muscle group, body part, target muscles and coaching instructions. The list is sorted into muscle groups, equipment and movement type, so searching by body part finds what you actually did.',
        points: [
          'Animation for nearly every exercise',
          'Animations stream and cache on demand — an exercise you never open costs nothing',
          'Search by name, muscle group, equipment or body part',
          'Full instructions and target muscles on every entry',
        ],
        shot: '/img/ironpulse/library.webp',
        shotAlt:
          'The IronPulse exercise library with 1,333 exercises, body-part filters and per-exercise thumbnails.',
        side: 'right',
      },
      {
        id: 'logging',
        label: 'Logging',
        title: 'Logging that survives the session you interrupted',
        body: 'Start a quick workout or follow a saved routine. Every set type is a first-class citizen: standard weight, added weight, pure bodyweight and cardio each have their own fields, their own column headers and their own Progress-tab description. Cardio logs minutes and distance and never asks for a barbell weight.',
        points: [
          'Rest timer with vibration and sound, or tucked into the border',
          'Automatic set numbering as you log',
          'The session is written to disk every few seconds — if the app dies, the next launch offers the workout back with every set and the elapsed time intact',
          'Tap the title to name the workout so it is easy to find in the history',
        ],
        shot: '/img/ironpulse/logging.webp',
        shotAlt: 'An IronPulse quick workout in progress with the exercise set table and the rest timer.',
        side: 'left',
      },
      {
        id: 'progress',
        label: 'Progress',
        title: 'One definition of volume, so two screens never disagree',
        body: 'Volume, estimated one-rep max, max reps, training days and a 12-month activity heat map. Per-exercise analysis comes with an interactive graph you can tap to inspect any point, and weigh-ins are plotted over time and feed every body-weight calculation in the app.',
        points: [
          'Interactive per-exercise graphs you can tap to inspect any point',
          'Units follow your preference everywhere; the stored unit never changes and no history is rewritten when you switch',
          'A set keeps the body weight it was done at — weighing in today does not rewrite last month’s pull-ups',
        ],
        shot: '/img/ironpulse/progress.webp',
        shotAlt:
          'IronPulse progress analytics showing volume, estimated one-rep max, training days and an activity heat map.',
        side: 'right',
      },
      {
        id: 'own-exercises',
        label: 'Your own exercises',
        title: 'Your variation, not somebody else’s',
        body: 'Attach a photo or video of your own exercise to replace the built-in animation, so you see your movement rather than a generic one. The pick is copied into the app’s own storage, so it keeps working after a restart rather than expiring with the gallery’s permission.',
        points: [
          'Photo or video replaces the built-in animation',
          'The file is copied into app storage, so it survives the gallery',
          'Saving says so: a tick draws itself and the editor stays open until you close it',
          'Exercises the AI created are always labelled AI generated',
        ],
        shot: '/img/ironpulse/custom.webp',
        shotAlt:
          'IronPulse creating a custom exercise with the media picker for a photo or video of the movement.',
        side: 'left',
      },
      {
        id: 'ai',
        label: 'AI coach (optional)',
        title: 'A coach that only speaks when you let it',
        body: 'IronPulse is fully usable without Gemini. Add your own key in Settings and you get a coach chat that answers questions about the session you just logged, a routine generator that plans a week, and automatic creation of missing movements with their target muscles and coaching cues. The app applies the scheduling rules itself, so the plan is the same whatever the model returns.',
        points: [
          'Paste any workout in any format and get a structured routine back',
          'Describe a goal and get a plan built from movements the app actually has',
          'A coach chat about the session you just logged',
          'Data sharing is off by default — nothing is sent until you turn it on, and the setting says plainly what is and is not sent',
        ],
        shot: '/img/ironpulse/coach.webp',
        shotAlt: 'The IronPulse AI coach chat screen.',
        side: 'right',
      },
      {
        id: 'profile',
        label: 'Profile',
        title: 'The body-weight timeline and the numbers that matter',
        body: 'A body-weight timeline with a target reference line, BMI, a goal strategy, and three read-only benchmark records — push-ups, pull-ups and a single-leg squat — each with the load it was done at. Those records are handed to the AI, so a progression is based on what you actually lifted.',
        points: [
          'Body-weight timeline with a target reference line',
          'BMI and goal strategy',
          'Benchmark records for push-ups, pull-ups and single-leg squat',
          'Profile picture copied into app storage, so deleting it from the gallery is harmless',
        ],
        shot: '/img/ironpulse/profile.webp',
        shotAlt: 'IronPulse profile and metrics with the body-weight timeline and benchmark records.',
        side: 'left',
      },
    ],
    gallery: [
      {
        src: '/img/ironpulse/dashboard.webp',
        alt: 'The IronPulse home dashboard.',
        caption: 'Home — today’s workout, the week, the last seven days and your numbers.',
      },
      {
        src: '/img/ironpulse/exercise.webp',
        alt: 'An IronPulse exercise detail page with the movement animation.',
        caption: 'Exercise detail — animation, instructions and target muscles.',
      },
      {
        src: '/img/ironpulse/routine.webp',
        alt: 'The IronPulse routine week planner.',
        caption: 'The routine editor, where a routine becomes a week.',
      },
      {
        src: '/img/ironpulse/logging.webp',
        alt: 'An IronPulse quick workout in progress.',
        caption: 'Logging a quick workout with the rest timer and set table.',
      },
      {
        src: '/img/ironpulse/progress.webp',
        alt: 'IronPulse progress analytics.',
        caption: 'Progress — volume, estimated one-rep max and the activity heat map.',
      },
      {
        src: '/img/ironpulse/profile.webp',
        alt: 'IronPulse profile and metrics.',
        caption: 'Profile — body weight, BMI and the benchmark records.',
      },
      {
        src: '/img/ironpulse/library.webp',
        alt: 'The IronPulse exercise library.',
        caption: 'The exercise library — 1,333 movements, filtered by body part.',
      },
      {
        src: '/img/ironpulse/coach.webp',
        alt: 'The IronPulse AI coach chat.',
        caption: 'The optional AI coach.',
      },
      {
        src: '/img/ironpulse/custom.webp',
        alt: 'Creating a custom exercise in IronPulse.',
        caption: 'Your own exercise, with a photo or video of your variation.',
      },
    ],
    workflow: [
      {
        title: 'Set up your week',
        body: 'Pick a routine from the three that ship with the app, or build one: every weekday gets its own slot, and a day you leave empty is a rest day.',
      },
      {
        title: 'Start and log',
        body: 'Open the workout from Home, add the exercises you are doing, and tick the sets off as you go. The rest timer and set numbering are handled for you.',
      },
      {
        title: 'Keep the record',
        body: 'The session is written to disk as you work, so an accidental close never costs you the set. Name it, finish it, and it lands in your history.',
      },
      {
        title: 'Read the trend',
        body: 'Volume, estimated one-rep max and the heat map show whether the last month actually moved. Weigh in when you want the body-weight line to follow.',
      },
    ],
    privacy: [
      'No account, no tracking, no analytics.',
      'Every workout, weigh-in and routine lives in a SQLite database on your device.',
      'AI features are optional and need your own Gemini key.',
      'Athlete data sharing is off until you explicitly enable it.',
      '“Erase all app data” in Settings wipes everything on the device.',
    ],
  },

  {
    slug: 'calcsuite',
    name: 'Calculator Suite',
    tagline: 'Sixty-six calculators, one Android app.',
    summary:
      'A fast everyday keypad, a full calculus workbench, an electrical circuit editor that works out the circuits you draw, and an AI that reads a photograph of a problem. Every tool computes for real and shows its working rather than a bare number.',
    problem: {
      heading: 'A calculator app on a phone does one thing. A second-year module needs sixty-six.',
      body: 'Calculator Suite exists because a single keypad cannot carry a whole syllabus. Every tool in it performs a real computation with the mathematics that suits the problem — exact arithmetic where exact arithmetic is possible, an honest approximation with its method named where it is not — and every tool shows its working instead of a bare number.',
      audience: [
        {
          title: 'Students',
          body: 'Algebra, geometry, calculus, statistics and finance, with the formulas written out next to the answer.',
        },
        {
          title: 'Engineers and technicians',
          body: 'A circuit editor that solves the network you drew, plus eleven electrical calculators for the rest.',
        },
        {
          title: 'Anyone with a calculator app and a grudge',
          body: 'No adverts, no sign-up, no telemetry, and no network round trip unless you ask for one.',
        },
      ],
    },
    platform: 'Android',
    platforms: ['Android'],
    accent: '#2fd39a',
    accentInk: '#022018',
    icon: '/img/calcsuite/icon.png',
    repo: 'https://github.com/JuggyBob/CalculatorSuiteAndroid',
    releases: 'https://github.com/JuggyBob/CalculatorSuiteAndroid/releases/latest',
    version: '3.1.0',
    released: 'October 2026',
    pending: true,
    license: 'PolyForm Noncommercial 1.0.0',
    licenseUrl: 'https://github.com/JuggyBob/CalculatorSuiteAndroid/blob/main/LICENSE',
    size: '≈ 14 MB APK',
    stack: ['Kotlin 2.2', 'Jetpack Compose', 'Material 3', 'BigDecimal / BigInteger', 'DataStore'],
    highlights: [
      '66 tools across algebra, calculus, finance and more',
      'A calculus workbench with 14 focused tools',
      'An electrical circuit editor that solves what you draw',
      'Exact arithmetic, with numerical answers marked ≈',
      'Works with the network off',
    ],
    showcase: {
      label: 'Project 02',
      hero: {
        src: '/img/calcsuite/calculus.webp',
        alt: 'The Calculator Suite function graphing tool with its derivative and the area under the curve.',
        frame: 'phone',
      },
      detail: {
        src: '/img/calcsuite/circuits.webp',
        alt: 'The Calculator Suite circuit builder with a solved network.',
      },
    },
    facts: [
      { label: 'Platform', value: 'Android 8.0+ (API 26)' },
      { label: 'Latest release', value: 'v3.1.0' },
      { label: 'Package size', value: '≈ 14 MB' },
      { label: 'Licence', value: 'PolyForm Noncommercial 1.0.0' },
      { label: 'Arithmetic', value: 'BigDecimal (34-digit context) and BigInteger' },
      { label: 'Network', value: 'Two opt-in features; everything else is offline' },
    ],
    features: [
      {
        id: 'keypad',
        label: 'Everyday',
        title: 'A keypad that keeps up with your typing',
        body: 'The landing screen is a calculator you can actually use: type on the keypad and the result previews live, with four memory keys and an optional full-screen expansion. Above it sits a search field that finds any of the sixty-six tools by the words people actually use — “mortgage”, “kcal”, “octal”, “tip”.',
        points: [
          'Live preview as you type, committed to history with =',
          'Four memory keys and an optional full-screen expansion',
          'Search across every tool by name or by everyday wording',
          'Categories for algebra, geometry, converters, finance, health, dates, circuits, calculus and advanced mathematics',
        ],
        shot: '/img/calcsuite/keypad.webp',
        shotAlt: 'The Calculator Suite home screen with the everyday keypad, search field and tool categories.',
        side: 'right',
      },
      {
        id: 'scientific',
        label: 'Scientific',
        title: 'Trig, logs, powers — and the reference panels that match the keypad',
        body: 'The scientific calculator adds the whole function keypad: trigonometric functions in DEG, RAD or GRAD, natural and base-10 logarithms, powers, factorials, modulus and the full memory set. The collapsible reference panels are laid out to match the keypad exactly, so nothing is hidden in a menu you have to hunt for.',
        points: [
          'DEG / RAD / GRAD, switchable and visible at all times',
          'sin, cos, tan, ln, log, √, x², xʸ, x⁻¹, n! and mod',
          'Four memory keys',
          'Collapsible reference panels that mirror the keypad layout',
        ],
        shot: '/img/calcsuite/scientific.webp',
        shotAlt:
          'The Calculator Suite scientific calculator showing sin(30) + 2^10 evaluated as 1,024.5.',
        side: 'left',
      },
      {
        id: 'calculus',
        label: 'Calculus',
        title: 'Fourteen focused tools, and a graph that shows its working',
        body: 'The calculus workbench is not one generic solver. Derivatives, integrals, limits, Taylor and Maclaurin series, summations and products, infinite series, roots, extrema, an interactive function graph, differential equations, multivariable calculus, Fourier analysis, complex analysis and partial differential equations each get their own tool.',
        points: [
          'Derivatives, definite integrals, limits, Taylor/Maclaurin',
          'Σ and Π notation, infinite series, roots and extrema',
          'An interactive graph with pan, pinch-zoom, an optional f′ layer and a shaded area under the curve',
          'Differential equations solved symbolically or numerically, and graphed',
          'Multivariable calculus, Fourier analysis, complex analysis and PDEs',
        ],
        shot: '/img/calcsuite/calculus.webp',
        shotAlt:
          'The Calculator Suite function graphing tool plotting a quadratic with its derivative as a dashed curve and the area under the curve shaded.',
        side: 'right',
      },
      {
        id: 'circuits',
        label: 'Electrical circuits',
        title: 'Draw a circuit; the app works out the circuit',
        body: 'Place resistors, sources, switches and a ground on the canvas, wire them together, and press Calculate. The app solves the network by nodal analysis and shows the voltage, current and power of every part, with the working. Eleven electrical calculators come with it, for when you only need Ohm’s law.',
        points: [
          'A canvas editor with resistors, voltage and current sources, switches and ground',
          'Solved by nodal analysis, with the equations shown',
          'Voltage, current and power for every part in the circuit',
          'Six example circuits, from a battery and a resistor to a voltage divider',
        ],
        shot: '/img/calcsuite/circuits.webp',
        shotAlt:
          'The Calculator Suite circuit builder with a solved two-resistor network showing 300 ohms and 0.04 amps.',
        side: 'left',
      },
      {
        id: 'categories',
        label: 'The rest of the toolkit',
        title: 'Twenty-three converters and a finance section that does real work',
        body: 'Length, area, volume, mass, temperature, pressure, energy, power, force, torque, speed, acceleration, time, angle, data storage and transfer, flow, fuel economy, numeric bases, Roman numerals, cooking measures, ring sizes and shoe sizes. Six finance tools: currency with live reference rates and an offline cache, loan amortisation, compound interest with EAR, sales tax, tips with cent allocation and unit-price comparison.',
        points: [
          '23 converters, from length and mass to ring sizes',
          '6 finance tools, including a loan amortisation schedule',
          '3 health tools: BMI, caloric burn from MET values and a Navy body-fat estimate',
          '3 date and time tools: exact age, date arithmetic and time intervals',
          '10 algebra tools, 2 geometry tools and 3 advanced-mathematics tools (measure theory, a topology explorer and functional analysis)',
        ],
        shot: '/img/calcsuite/search.webp',
        shotAlt: 'Calculator Suite search results listing the calculus tools.',
        side: 'right',
      },
      {
        id: 'honesty',
        label: 'Exact, or honest about it',
        title: 'Exact where it can be, honest where it cannot',
        body: 'Where the mathematics allows it, the answer is exact: money and general decimals use BigDecimal with a 34-significant-digit evaluation context, and integer maths — factorials, GCD and LCM, primes, permutations — uses BigInteger. Where it does not, the result is prefixed with ≈ and the method is named: adaptive Simpson for definite integrals, RK4 for differential equations, bisection for root scans.',
        points: [
          '34-significant-digit evaluation context',
          'Display rounding happens only at the very end, at 3–15 significant digits',
          'Numerical results carry ≈ and the name of the method that produced them',
          'Every result card can copy a full-precision value or push the calculation into history',
        ],
        shot: '/img/calcsuite/settings.webp',
        shotAlt:
          'Calculator Suite settings showing theme, accent colour, angle unit, result precision and thousands separators.',
        side: 'left',
      },
    ],
    gallery: [
      {
        src: '/img/calcsuite/keypad.webp',
        alt: 'The Calculator Suite home keypad.',
        caption: 'The landing screen — quick arithmetic, search and the tool categories.',
      },
      {
        src: '/img/calcsuite/scientific.webp',
        alt: 'The scientific calculator evaluating sin(30) + 2^10.',
        caption: 'The scientific calculator — sin(30) + 2^10 evaluated as 1,024.5.',
      },
      {
        src: '/img/calcsuite/calculus.webp',
        alt: 'The function graphing tool.',
        caption: 'Function graphing — f, its derivative, and the area under the curve.',
      },
      {
        src: '/img/calcsuite/circuits.webp',
        alt: 'The electrical circuit builder with a solved circuit.',
        caption: 'The circuit editor, solved by nodal analysis.',
      },
      {
        src: '/img/calcsuite/search.webp',
        alt: 'Search results across the tool catalogue.',
        caption: 'Search finds every tool by the words people actually use.',
      },
      {
        src: '/img/calcsuite/settings.webp',
        alt: 'The Calculator Suite settings screen.',
        caption: 'Theme, accent colour, angle unit, precision and separators.',
      },
    ],
    workflow: [
      {
        title: 'Type it',
        body: 'The keypad previews the result as you type. Press = to commit it to the history.',
      },
      {
        title: 'Find the tool',
        body: 'Search by name or by the word you would use — “tip”, “hex”, “mortgage” — or browse a category card.',
      },
      {
        title: 'Work the problem',
        body: 'Most tools recompute live; the rest have an explicit Calculate button. Every tool has a Reset action that restores its defaults.',
      },
      {
        title: 'Take the answer',
        body: 'Copy a full-precision value or push the calculation into the local history. Nothing leaves the device.',
      },
    ],
    privacy: [
      'No analytics, no advertising, no tracking SDK and no account.',
      'Every tool works with the device in aeroplane mode.',
      'The currency converter is the only routine network call, and it caches rates locally.',
      'The AI problem solver is off until you configure a provider and press the button.',
      'Your API key is kept by the phone’s own keystore, encrypted, and never written in plain text.',
    ],
  },

  {
    slug: 'discount-hunter',
    name: 'Discount Hunter',
    tagline: 'Every game discount from Steam, GOG and Epic in one feed.',
    summary:
      'A native Android app that pulls live discounts from the Steam Store, GOG and the Epic Games Store, merges them into a single daily feed, and lets you save games so you hear about them when the price drops.',
    problem: {
      heading: 'A game on sale means checking three storefronts, three times a month.',
      body: 'Discount Hunter does the checking. It reads the live discount feeds of Steam, GOG and the Epic Games Store, merges them into one list, and tells you when a game you saved goes on sale — or becomes free to keep — even when the app is closed. Prices are quoted in the currency the store actually used, and converted prices are marked so they are never mistaken for quoted ones.',
      audience: [
        {
          title: 'People with a backlog',
          body: 'One list of everything on sale across all three stores, sorted by discount or by price.',
        },
        {
          title: 'People waiting for a price drop',
          body: 'Save a game and get told when it drops, with the new price and the discount.',
        },
        {
          title: 'People who hate a cluttered shelf',
          body: 'No account, no tracking, no adverts — and no notification unless something actually changed.',
        },
      ],
    },
    platform: 'Android',
    platforms: ['Android'],
    accent: '#b490ff',
    accentInk: '#120626',
    icon: '/img/discounthunter/icon.png',
    repo: 'https://github.com/JuggyBob/DiscountHunterAndroid',
    releases: 'https://github.com/JuggyBob/DiscountHunterAndroid/releases/latest',
    version: '1.1.0',
    released: '20 October 2026',
    license: 'Apache 2.0',
    licenseUrl: 'https://github.com/JuggyBob/DiscountHunterAndroid/blob/main/LICENSE',
    size: '≈ 3 MB APK',
    stack: ['Kotlin 2.2', 'Jetpack Compose', 'Material 3', 'DataStore', 'AlarmManager + WorkManager'],
    highlights: [
      'Three stores merged into one daily feed',
      'One deduplicated result per game when you search',
      'Prices converted honestly, never just relabelled',
      'Deal alerts that arrive with the app closed',
      'A “Where to buy” comparison on every game',
    ],
    showcase: {
      label: 'Project 03',
      hero: {
        src: '/img/discounthunter/feed.webp',
        alt: 'The Discount Hunter deals feed showing live discounts from Steam, GOG and the Epic Games Store.',
        frame: 'phone',
      },
      detail: {
        src: '/img/discounthunter/detail.webp',
        alt: 'A Discount Hunter game page comparing the price in GOG and in Steam.',
      },
    },
    facts: [
      { label: 'Platform', value: 'Android 7.0+ (API 24), portrait' },
      { label: 'Latest release', value: 'v1.1.0' },
      { label: 'Package size', value: '≈ 3 MB' },
      { label: 'Licence', value: 'Apache 2.0' },
      { label: 'Stores', value: 'Steam · GOG · Epic Games Store' },
      { label: 'Network', value: 'Only the store APIs the app reads' },
    ],
    features: [
      {
        id: 'feed',
        label: 'The feed',
        title: 'Every discount across three stores, in one list',
        body: 'The daily feed merges every discount from Steam, GOG and the Epic Games Store into a single list, sorted and filterable, with a seven-day strip along the top for browsing past and upcoming days. Free games rise to the top.',
        points: [
          'One feed across Steam, GOG and the Epic Games Store',
          'Filter by store, by discount depth and by title',
          'Sort by biggest discount, lowest price or title',
          'A seven-day strip for browsing past and upcoming days',
        ],
        shot: '/img/discounthunter/feed.webp',
        shotAlt:
          'The Discount Hunter deals feed showing 94 live discounts from Steam, GOG and the Epic Games Store.',
        side: 'right',
      },
      {
        id: 'search',
        label: 'Search',
        title: 'One result per game, not one per store',
        body: 'Search all three stores at once and the app returns a single deduplicated result per game, ordered by the cheapest price it found. Each result carries the store badges it came from, so you can see at a glance where the game is actually cheap.',
        points: [
          'Cross-store search with one deduplicated result per game',
          'Results ordered by the cheapest price found',
          'Store badges on every result',
          'Free-to-keep games shown alongside paid discounts',
        ],
        shot: '/img/discounthunter/search.webp',
        shotAlt:
          'Cross-store search in Discount Hunter showing ten results with the cheapest price per game.',
        side: 'left',
      },
      {
        id: 'detail',
        label: 'Game pages',
        title: 'Every game page ends with “Where to buy”',
        body: 'Each detail page carries the hero art, screenshots, trailers, system requirements and genres, and finishes with a comparison of every store that has the game, quoting each price in that store’s own currency. A price history chart records what this device has seen.',
        points: [
          'Hero art, screenshots and trailers',
          'System requirements and genres',
          'A “Where to buy” comparison across every store that has the game',
          'A price history chart of what this device recorded, with deep links to external databases',
        ],
        shot: '/img/discounthunter/detail.webp',
        shotAlt:
          'A Discount Hunter game detail page comparing the GOG and Steam prices for the same game.',
        side: 'right',
      },
      {
        id: 'wishlist',
        label: 'Wishlist & alerts',
        title: 'Saved games, and a notification with the app closed',
        body: 'Save any game from the feed, a search result or a detail page. Saved games rise to the top everywhere they appear. When a saved game goes on sale — or becomes free to keep — the app notifies you with the name, the new price and the discount, checked in the background with the app closed.',
        points: [
          'Save a game from the feed, a search result or a detail page',
          'Saved games rise to the top wherever they appear',
          'Deal alerts for a sale and for a free-to-keep game',
          'Checked in the background, including when the app is closed',
          'Only changes are announced — a game that is still discounted tomorrow is not announced again',
        ],
        shot: '/img/discounthunter/wishlist.webp',
        shotAlt: 'The Discount Hunter wishlist with saved games.',
        side: 'left',
      },
      {
        id: 'honesty',
        label: 'Honest prices',
        title: 'Prices are converted, not relabelled',
        body: 'Steam and Epic re-quote prices per region; GOG publishes in dollars regardless. Discount Hunter converts using the ECB’s daily reference rates and marks the result with a “~” so a converted price is never mistaken for a quoted one. Games are identified by their store id wherever one exists, and titles are never used as cache keys.',
        points: [
          'Prices quoted in the currency the store actually used',
          'Converted prices marked with ~ so they are never confused with quoted ones',
          'Store-native ids, never titles, for identity and caching',
          'A game’s media is only shown when the store confirmed the id',
        ],
        shot: '/img/discounthunter/filters.webp',
        shotAlt:
          'The Discount Hunter filters sheet with store, discount and sorting options.',
        side: 'right',
      },
      {
        id: 'privacy',
        label: 'Settings',
        title: 'Private by design, and honest about what it does',
        body: 'No account, no tracking, no analytics and no API keys — everything the app caches lives on the device. The Settings screen shows which stores are in the feed, the currency the region prices are requested in, and how many deals to request per store.',
        points: [
          'Theme follows the system, edge to edge',
          'Choose the currency the region prices are requested in',
          'Switch individual stores in or out of the feed',
          'Built-in Diagnostics → Export logs for bug reports',
        ],
        shot: '/img/discounthunter/settings.webp',
        shotAlt: 'The Discount Hunter settings screen with theme, currency and included stores.',
        side: 'left',
      },
    ],
    gallery: [
      {
        src: '/img/discounthunter/feed.webp',
        alt: 'The Discount Hunter deals feed.',
        caption: 'The daily feed — every discount across all three stores.',
      },
      {
        src: '/img/discounthunter/search.webp',
        alt: 'Cross-store search results.',
        caption: 'One result per game, cheapest first.',
      },
      {
        src: '/img/discounthunter/detail.webp',
        alt: 'A game detail page with the Where to buy comparison.',
        caption: 'A game page, ending with the store comparison.',
      },
      {
        src: '/img/discounthunter/wishlist.webp',
        alt: 'The Discount Hunter wishlist.',
        caption: 'The wishlist — saved games you want to watch.',
      },
      {
        src: '/img/discounthunter/filters.webp',
        alt: 'The filters and sorting sheet.',
        caption: 'Filters and sorting for the feed.',
      },
      {
        src: '/img/discounthunter/settings.webp',
        alt: 'The Discount Hunter settings screen.',
        caption: 'Settings — theme, currency and which stores are in the feed.',
      },
      {
        src: '/img/discounthunter/tour.webp',
        alt: 'The Discount Hunter first-run tour.',
        caption: 'The first-run tour, on first launch.',
      },
    ],
    workflow: [
      {
        title: 'Open the feed',
        body: 'Every discount from Steam, GOG and the Epic Games Store, already merged and sorted, with free games on top.',
      },
      {
        title: 'Narrow it down',
        body: 'Filter by store, by discount depth or by title, and sort by biggest discount or lowest price.',
      },
      {
        title: 'Compare the offers',
        body: 'Open a game to see the price in every store that has it, plus the screenshots, trailers and system requirements.',
      },
      {
        title: 'Save it and wait',
        body: 'Add the game to the wishlist. When it goes on sale — or becomes free to keep — you are told, even with the app closed.',
      },
    ],
    privacy: [
      'No account, no tracking, no analytics and no API keys.',
      'Everything the app caches lives on the device.',
      'The background deal check is the only recurring network work, and it only announces changes.',
      'Game titles, cover art and store data belong to their respective owners and are displayed as each store’s public API returns them.',
    ],
  },

  {
    slug: 'codescope',
    name: 'CodeScope',
    tagline: 'A native Windows front end for the scc engine.',
    summary:
      'A native Windows desktop application that analyses a codebase with the pinned, frozen scc engine and presents the result either as a rich in-app dashboard or as scc’s own self-contained HTML infographic. It never makes a network request.',
    problem: {
      heading: 'Measuring a codebase should not need a toolchain, a runtime and a terminal window.',
      body: 'CodeScope bundles the scc engine — frozen at a known commit, with its hashes recorded — so that measuring a codebase is a matter of picking a folder and pressing a button. The result is a readable dashboard rather than a wall of terminal output, every optional section has a switch that actually works, and the whole thing never touches the network.',
      audience: [
        {
          title: 'Developers',
          body: 'Metric cards, a language breakdown, a searchable per-file table and hotspots you can jump straight to.',
        },
        {
          title: 'Teams and reviewers',
          body: 'Authors, bus factor, change coupling and timelines, taken from real Git history.',
        },
        {
          title: 'People who need to share a number',
          body: 'Export one self-contained HTML infographic, written wherever you choose.',
        },
      ],
    },
    platform: 'Windows',
    platforms: ['Windows'],
    accent: '#3ad7de',
    accentInk: '#02201f',
    icon: '/img/codescope/icon.png',
    repo: 'https://github.com/JuggyBob/CodeScope',
    releases: 'https://github.com/JuggyBob/CodeScope/releases/latest',
    version: '1.0.0',
    released: '21 October 2026',
    license: 'MIT',
    licenseUrl: 'https://github.com/JuggyBob/CodeScope/blob/main/LICENSE',
    size: '11 MB portable · 68 MB installer',
    stack: ['.NET 8', 'WPF', 'Go (scc 4.1.0, frozen)', 'No NuGet packages'],
    highlights: [
      'Metric cards, language breakdown and a per-file table',
      'Hotspots, coupling, authors and bus factor from real Git history',
      'Every optional report section has a switch that works',
      'One self-contained HTML file to export',
      'The last thirty runs, reopenable without re-running the engine',
    ],
    showcase: {
      label: 'Project 04',
      hero: {
        src: '/img/codescope/report.webp',
        alt: 'The CodeScope report dashboard on Windows, showing the overview metric cards and the language breakdown.',
        frame: 'window',
      },
      detail: {
        src: '/img/codescope/setup.webp',
        alt: 'The CodeScope analysis setup screen with the report content switches.',
      },
    },
    facts: [
      { label: 'Platform', value: 'Windows 10 (1809+) or Windows 11, x64' },
      { label: 'Latest release', value: 'v1.0.0' },
      { label: 'Runtime', value: '.NET 8 Desktop Runtime (x64) required' },
      { label: 'Licence', value: 'MIT' },
      { label: 'Engine', value: 'scc 4.1.0, frozen at commit 36b4729' },
      { label: 'Network', value: 'None — the app never phones home' },
    ],
    features: [
      {
        id: 'setup',
        label: 'Setup',
        title: 'Point it at a folder and choose what the report should contain',
        body: 'CodeScope opens on the analysis setup screen. Browse to a folder with the native Windows picker — the app validates it and tells you whether it lives inside a Git repository. Then choose the report contents: every optional section the pinned backend supports has its own switch, and turning one off omits it from both output modes. The section really is absent, never merely hidden.',
        points: [
          'The native Windows folder picker, with validation',
          'Git repository detection, shown next to the folder',
          'A switch for every optional report section',
          'Fine tuning for ignores, extension filters, large-file limits, minified and generated detection, language remapping, ULOC, cognitive complexity, COCOMO and LOCOMO parameters, Git window depth and worker tuning',
        ],
        shot: '/img/codescope/setup.webp',
        shotAlt:
          'The CodeScope analysis setup screen showing the project folder and the report content switches.',
        side: 'right',
        frame: 'window',
      },
      {
        id: 'report',
        label: 'The report',
        title: 'A dashboard, not a wall of numbers',
        body: 'The in-app report is a sequence of readable cards and tables: the summary metrics, a language distribution bar with the exact counts, the line-length histogram, the hotspot and change-coupling tables, the author rollup with its bus factor, the language and author timelines, the cost models and a searchable per-file table. Every table sorts by its column headings, and the sorted heading carries an arrow that points the way the rows run.',
        points: [
          'Metric cards for files, lines, code, comments, blanks, complexity, size and an estimated build cost',
          'Language distribution with a sortable table underneath',
          'Unique lines of code (ULOC) and DRYness',
          'Per-file statistics in a searchable table',
        ],
        shot: '/img/codescope/report.webp',
        shotAlt:
          'The CodeScope in-app report dashboard showing the overview metric cards and the language breakdown table for the IronPulse codebase.',
        side: 'left',
        frame: 'window',
      },
      {
        id: 'history',
        label: 'History',
        title: 'Every finished run is kept, and can be reopened as it was',
        body: 'Each run is stored in the application-data folder with the folder that was analysed, the totals, the timing and the engine’s own report data. The sidebar lists them; click one to reopen that report exactly as it was produced, without running the engine again. The last thirty runs are kept, so the folder cannot grow without bound.',
        points: [
          'One JSON file per run in %LOCALAPPDATA%\\CodeScope\\history',
          'Reopen a stored report without re-running the analysis',
          'A hard cap of thirty entries',
          'A damaged file never hides the rest of the history',
        ],
        shot: '/img/codescope/report-doc.webp',
        shotAlt:
          'A full CodeScope analysis report showing the metric cards, language breakdown and per-file statistics.',
        side: 'right',
        frame: 'window',
      },
      {
        id: 'export',
        label: 'Export',
        title: 'One self-contained HTML file, written where you choose',
        body: 'Type a report file name, choose the output folder with the native picker, and run the analysis. “Save as” remembers the name and confirms it inline, and an existing file is never replaced without an explicit confirmation. Exporting from the report itself opens a small themed dialog that asks for the file name and the folder; leaving the folder empty writes the report beside the analysed code.',
        points: [
          'scc’s own self-contained HTML infographic',
          'The in-app report writes nothing at all',
          'An existing file is never overwritten without confirmation',
          'A share card for social preview images, unless switched off',
        ],
        shot: '/img/codescope/config-doc.webp',
        shotAlt:
          'The CodeScope configuration view with the report section switches and the analysis options.',
        side: 'left',
        frame: 'window',
      },
      {
        id: 'details',
        label: 'In the details',
        title: 'Double-click a row and the file is in File Explorer',
        body: 'In any file-bearing table — per-file statistics, longest lines, code hotspots or change coupling — double-clicking a row opens that file in File Explorer, and in the coupling table it is the file under the pointer that wins. When the folder is not inside a Git repository, the four history sections say so on their toggle and the report explains which sections could not be produced. Nothing is invented.',
        points: [
          'Per-file statistics, longest lines, hotspots and coupling, all clickable',
          'Sections that need Git are marked when the folder has no repository',
          'Empty history data is shown as empty, never fabricated',
          'Themes resolve through DynamicResource, so switching re-skins the dashboard immediately',
        ],
        shot: '/img/codescope/report.webp',
        shotAlt: 'The CodeScope report dashboard with its sortable tables and metric cards.',
        side: 'right',
        frame: 'window',
      },
    ],
    gallery: [
      {
        src: '/img/codescope/setup.webp',
        alt: 'The CodeScope analysis setup screen.',
        caption: 'Setup — pick a folder and choose the report contents.',
      },
      {
        src: '/img/codescope/report.webp',
        alt: 'The CodeScope in-app report dashboard.',
        caption: 'The in-app report — overview metrics and the language breakdown.',
      },
      {
        src: '/img/codescope/report-doc.webp',
        alt: 'A complete CodeScope analysis report.',
        caption: 'A complete report, with per-file statistics and the cost models.',
      },
      {
        src: '/img/codescope/config-doc.webp',
        alt: 'The CodeScope configuration view.',
        caption: 'The configuration view — section switches and analysis options.',
      },
    ],
    workflow: [
      {
        title: 'Choose a folder',
        body: 'Browse to the codebase with the native picker. CodeScope validates it and tells you whether it is inside a Git repository.',
      },
      {
        title: 'Choose the report',
        body: 'Switch the sections you want on or off, and fine-tune the analysis: ignores, extension filters, complexity models, Git depth and worker tuning.',
      },
      {
        title: 'Analyse',
        body: 'The bundled, frozen engine does the work. The status bar names the real phase it is in.',
      },
      {
        title: 'Read and export',
        body: 'Read the dashboard, sort any table, double-click a row to open a file — or export one self-contained HTML infographic to share.',
      },
    ],
    privacy: [
      'The app makes no network request of any kind.',
      'Nothing about the analysed codebase leaves the machine.',
      'Settings and history live in %LOCALAPPDATA%\\CodeScope, never inside an analysed project.',
      'The app never writes to the folder you analyse.',
    ],
  },
];

export const bySlug = (slug: string): Project => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
};

export const nextProject = (slug: string): Project => {
  const index = projects.findIndex((item) => item.slug === slug);
  return projects[(index + 1) % projects.length];
};

export const prevProject = (slug: string): Project => {
  const index = projects.findIndex((item) => item.slug === slug);
  return projects[(index - 1 + projects.length) % projects.length];
};
