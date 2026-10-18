# simeonlees.com

Personal portfolio and Markdown blog, built with Next.js (Pages Router), React,
TypeScript, and Tailwind CSS. Blog posts live in `_posts/`; project details live
in `config/projects.ts`.

## Development

Use Node.js 24 (also pinned in `.nvmrc` and `package.json`).

```sh
nvm use
npm ci
npm run dev
```

Open http://localhost:3000. The About page is `/`; other routes include `/projects`,
`/blog`, and `/blog/[slug]`. No database, secrets, or environment variables are
required. Google Fonts downloads Inter at build time, so builds need HTTPS access
to `fonts.googleapis.com` and `fonts.gstatic.com`.

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Lint runs separately because Next.js 16 no longer runs ESLint during builds.
TypeScript stays on 5.9 and ESLint on 9 for compatibility with Next's lint plugins.
Run development and production builds separately; both write to `.next/`.

Posts are trusted, repository-authored Markdown with YAML front matter. The
Markdown pipeline preserves embedded HTML and highlights fenced code blocks.
The Prism theme is bundled locally with the site.

## Vercel

Import this repository as a Next.js project with npm. The `engines.node` setting
in `package.json` selects Node.js 24, overriding an older project default. If
Vercel still reports Node.js 16, change **Project Settings → Build and Deployment
→ Node.js Version** to **24.x**, then redeploy. Pull requests trigger preview
builds when the Vercel GitHub integration is enabled; use the Vercel bot's link
on the PR to open a successful preview.
