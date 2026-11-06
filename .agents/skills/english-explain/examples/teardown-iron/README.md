# Teardown-built Cloth Presser demo

This is a separate proof of using `elvarofficial/teardown` itself, rather than
the repository's `english-explain` runtime. It does not change the existing SPA.

- `runtime.js`, `upstream-hud.js`, `upstream-director.js`, `upstream-util.js`,
  and `stage3d.js` are vendored from teardown. Their import paths are unchanged
  except for the local `english-runtime` filename adaptation.
- `main.js` calls teardown's `runSim` and `createStage`; `demo.html` is produced
  by teardown's unmodified `sims/build.mjs` (Three.js and fonts inlined).
- The 36-second tour links seven parts. Word clicks, real Three.js raycast
  clicks, drag, zoom, manual takeover, and idle tour resume are available.

## Open

Open `demo.html` directly. No server or network is needed.

## Rebuild with upstream teardown

```bash
git clone https://github.com/elvarofficial/teardown.git /tmp/teardown
cd /tmp/teardown && npm install

# The adapted runtime imports local upstream HUD/director/util files.
cp examples/teardown-iron/runtime.js /tmp/teardown/sims/kit/english-runtime.js
cp examples/teardown-iron/upstream-*.js /tmp/teardown/sims/kit/

node /tmp/teardown/sims/build.mjs examples/teardown-iron
```

`review.mjs` checks the built file with the repository's zero-dependency CDP
browser transport; `capture.mjs` from teardown can render its tour frames.

Upstream license: `UPSTREAM-LICENSE`.
