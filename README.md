# Thing Explainer — English Learning Site

An interactive English-learning website inspired by Randall Munroe's *Thing Explainer*.
Every complex thing is explained using only simple, common English words,
presented as an immersive sci-fi HUD dashboard with a 3D wireframe model.

## Concept

Each "thing" gets its own page laid out like a technical instrument panel:

```
┌──────────────────────────────────────────────┐
│  STATUS BAR (nav · system info)              │
├──────────┬───────────────────┬───────────────┤
│  LEFT    │   CENTRAL 3D      │   RIGHT       │
│  PANEL   │   WIREFRAME       │   PANEL       │
│  (data:  │   (drag to rotate,│   (subsystem  │
│  wave,   │   hover labels)   │    registry)  │
│  radar,  │                   │               │
│  gauges) │                   │               │
├──────────┴───────────────────┴───────────────┤
│  EXPLANATION (simple words + glossary)       │
└──────────────────────────────────────────────┘
```

- **Visual style**: aged parchment canvas (`#F4F1EA`) + engineering grid + cyan wireframe
  accents + HUD panels, referencing Papers With Code's warm academic palette
  (Newsreader serif / Inter / JetBrains Mono) crossed with sci-fi dashboard aesthetics.
- **3D models**: procedural Three.js wireframes via React Three Fiber — every
  thing's geometry is hand-built in code, no external assets.
- **Content**: 5 prototype things, each with a simple-word description, part
  annotations (simple name → real name), fun facts, and HUD metrics.

## Prototype Things

| Simple Name | Real Name |
|---|---|
| Heavy Metal Power Building | Nuclear Reactor |
| Sky Boat with Turning Wings | Helicopter |
| Shared Space House | International Space Station |
| Red World Space Car | Curiosity Rover |
| Boxes That Make Clothes Smell Better | Washing Machine & Dryer |

## Tech Stack

- React 19 + TypeScript + Vite 8
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Three.js + @react-three/fiber + @react-three/drei (3D wireframes)
- react-router-dom (routing)
- Plain Canvas 2D API for waveform/radar panels (no chart lib needed)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Project Structure

```
src/
├── data/
│   └── things.ts           # data-driven registry — single source of truth
├── components/
│   ├── ThingScene.tsx      # 3D wireframe viewer + annotation labels
│   ├── LeftPanel.tsx       # waveform · power gauge · radar · timeline · facts
│   ├── RightPanel.tsx      # subsystem registry tree
│   ├── ThingDescription.tsx# bottom explanation + glossary
│   ├── StatusBar.tsx       # top HUD bar
│   └── Scanline.tsx        # scanline overlay (CSS-driven)
├── pages/
│   ├── HomePage.tsx        # thing gallery + category filters
│   └── ThingPage.tsx       # immersive dashboard layout
├── styles/
│   └── design-tokens.css   # Tailwind theme + HUD design system
└── App.tsx / main.tsx
```

## Extending

Add a new thing by appending to `src/data/things.ts` and, if it needs a custom
wireframe, adding a geometry component in `ThingScene.tsx` keyed by thing id.

## Attribution

Content inspired by *Thing Explainer: Complicated Stuff in Simple Words* by
Randall Munroe (Houghton Mifflin Harcourt, 2015). Simple-word descriptions here
are original paraphrases written in the book's spirit for English learning.
This is a personal learning project, not affiliated with the author.