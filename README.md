# Shubham Jain — Portfolio

A responsive, data-driven portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide.

## Development

Requires Node.js 22.13 or newer.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run lint
npm run build
```

The production build exports a static website to `out/`. Deploy that directory to a static host, or import this repository into Vercel.

## Edit content

All portfolio content is in `data/portfolio.ts`. Project links are only rendered when a real URL is provided. Missing achievement dates and rankings are deliberately omitted. Amazon ML Challenge is described as participation only.

To add your portrait, place your own image in `public/` and set `portfolio.portrait` to its path. The default identity badge uses a monogram; no photograph from the reference site is included.

The site has keyboard-accessible navigation, a theme toggle, reduced-motion support, responsive layouts, and semantic sections. No résumé file or download is included.
