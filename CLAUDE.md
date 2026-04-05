# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bukmax.llc company website — a static Next.js 16 site with TypeScript and Tailwind CSS v4. The site is exported as static HTML (no server-side runtime).

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build (static export to `out/`)
- `npm run lint` — run ESLint (flat config, Next.js core-web-vitals + TypeScript rules)

No test framework is configured.

## Architecture

- **Next.js App Router** with static export (`output: 'export'` in `next.config.ts`). Images are unoptimized for static compatibility.
- **Path alias**: `@/*` maps to the project root.
- **Layout**: `app/layout.tsx` wraps all pages with `Navigation` and `Footer` components from `components/`.
- **Pages**: Home (`/`), About (`/about`), Contact (`/contact`) — all currently placeholder content.
- **Styling**: Tailwind CSS v4 via PostCSS. Dark mode uses Tailwind's `dark:` variant. Fonts: Geist Sans and Geist Mono loaded via `next/font/google`.
