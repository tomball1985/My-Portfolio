# Tom Ball — Portfolio

Personal portfolio site showcasing campaigns, frameworks, team work, and writing.

Built with **Vite + React 19 + TypeScript + Tailwind CSS**. Deployed via **Vercel**.

## Local development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview production build locally
npm run lint
```

## Project layout

- `src/pages/` — top-level page components (one per route)
- `src/components/` — shared layout (`Nav`, `Footer`) and UI primitives
- `public/` — static assets served as-is (images, videos, logos)
- Routing is hash-based — no router library; see `src/App.tsx`

## Asset notes

- Images >2000px on the long edge are resized down with `sips` before commit
- Long video assets are compressed with `ffmpeg` (H.264, CRF 26, 1280px max width)
- Source notes and working `.docx` files live outside the repo (see `.gitignore`)
