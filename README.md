# Whiddon Astro Starter

A one-page Astro starter based on the uploaded Whiddon Development website draft.

## Quick start

```bash
npm install
npm run dev
```

## Notes

- Built as a clean static Astro starter with componentized sections.
- Images in `public/assets` are starter placeholders cropped from the design export so you can replace them with production assets later.
- Main page lives in `src/pages/index.astro`.
- Global styles live in `src/styles/global.css`.
- Reusable content is in `src/data/site.ts`.

## Suggested next steps

1. Replace cropped placeholder images with final photography and logo files.
2. Swap the basic form for a live endpoint or email service.
3. Add favicon, OG tags, and a projects detail page if needed.


## Framer Motion included

This starter now includes React + Framer Motion so you can add animated islands anywhere in the Astro app.

Install and run:

```bash
npm install
npm run dev
```

Included examples:

- `src/components/motion/HeroReveal.tsx` for hero entry animation
- `src/components/motion/FadeIn.tsx` for scroll-based reveal animations

Example usage inside an Astro file:

```astro
---
import FadeIn from '../components/motion/FadeIn';
---

<FadeIn client:visible delay={0.1}>
  <div>Your content</div>
</FadeIn>
```
