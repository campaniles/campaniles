# Tech Stack & Conventions

## Important: Next.js version

This project uses **Next.js 16** (App Router), which has breaking changes from older versions. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` (resolved from the repo root). Do not assume APIs, conventions, or file structure match older Next.js knowledge. Heed deprecation notices.

The `AGENTS.md` block about this is written and re-added by `next dev` — commit it with your work to keep the tree clean rather than reverting it.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| UI library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui |
| Icons | lucide-react |
| Linting | ESLint 9 with `eslint-config-next` |

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

Note: `npm run dev`, `npm run start`, and other watch/server commands are long-running — do not run them in blocking command calls. Ask the user to run them, or run them as background processes.

## Conventions

- **TypeScript** everywhere. Prefer explicit types at module boundaries.
- **Styling** is Tailwind CSS 4 utility classes plus theme tokens defined in `app/globals.css`. Avoid ad-hoc CSS files.
- **UI primitives** come from shadcn/ui and live in `components/ui/`. Add new ones with `npx shadcn@latest add <component>` rather than hand-writing them.
- **Class merging** uses the `cn` helper in `lib/utils.ts`.
- **Icons** come from `lucide-react` (`import { Icon } from "lucide-react"`).
- **Environment variables** are documented in `.env.example`; local values go in the git-ignored `.env.local`. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser — never put secrets behind that prefix.

## Prerequisites

- Node.js 20 or newer
- npm (or the user's preferred package manager)
