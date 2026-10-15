<div align="center">

# Campaniles

**An independent, community-first media platform for computer science and information technology.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8.svg)](https://tailwindcss.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

[Repository](https://github.com/campaniles/campaniles) · [Report a Bug](https://github.com/campaniles/campaniles/issues) · [Request a Feature](https://github.com/campaniles/campaniles/issues) · [Roadmap](./ROADMAP.md)

</div>

---

## About

Campaniles is an **independent, community-first media platform for computer science and information technology**. It exists to give the CS/IT community a place to publish, read, and discuss technical writing, news, and analysis without the noise and incentives of ad-driven feeds.

This is a **free and open-source project**, released under the [Apache License 2.0](./LICENSE). Contributions, ideas, and feedback from the community are welcome and encouraged.

### Principles

- **Community first** — the people who read and write here shape the platform.
- **Independent** — no corporate gatekeeping, no pay-to-play ranking.
- **Open source** — the code is public, auditable, and built in the open.
- **Technically focused** — content is for and by the CS/IT community.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI library | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Linting | [ESLint 9](https://eslint.org/) with `eslint-config-next` |

---

## Project Structure

```
campaniles/
├── app/                      # Next.js App Router (routes, layouts, pages)
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles + Tailwind + theme tokens
│   ├── layout.tsx            # Root layout (fonts, metadata, shell)
│   └── page.tsx              # Home page
├── components/               # React components
│   └── ui/                   # shadcn/ui primitives
│       └── button.tsx        # Button component
├── lib/                      # Shared utilities and helpers
│   └── utils.ts              # `cn` class-name helper
├── public/                   # Static assets served at the web root
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .env.example              # Documented template of environment variables
├── .env.local                # Local environment variables (git-ignored)
├── .gitignore                # Ignored files and folders
├── AGENTS.md                 # Guidance for AI coding agents
├── CLAUDE.md                 # Guidance for Claude / Claude Code
├── CHANGELOG.md              # Human-readable record of notable changes
├── CODE_OF_CONDUCT.md        # Community standards
├── CONTRIBUTING.md           # How to contribute
├── LICENSE                   # Apache License 2.0
├── README.md                 # This file
├── ROADMAP.md                # Planned direction and milestones
├── SECURITY.md               # Security policy and disclosure process
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint flat config
├── next.config.ts            # Next.js configuration
├── next-env.d.ts             # Next.js TypeScript ambient types
├── package.json              # Scripts and dependencies
└── tsconfig.json             # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm (ships with Node.js) — or your preferred package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/campaniles/campaniles.git
   cd campaniles
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Then open `.env.local` and fill in the values. See [Environment Variables](#environment-variables) below.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page auto-updates as you edit files. Start with `app/page.tsx`.

---

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the local development server at `http://localhost:3000`. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run ESLint across the project. |

---

## Environment Variables

Environment variables are documented in [`.env.example`](./.env.example). Copy it to `.env.local` for local development:

```bash
cp .env.example .env.local
```

`.env.local` is git-ignored and should never be committed. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser — never put secrets behind that prefix.

---

## Adding UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/). Add new components with:

```bash
npx shadcn@latest add <component>
```

For example, to add a card and an input:

```bash
npx shadcn@latest add card input
```

Components land in `components/ui/`. Icons come from [lucide-react](https://lucide.dev/):

```tsx
import { Newspaper } from "lucide-react";
```

---

## Contributing

Campaniles is community-first, and contributions are the heart of the project. Please read:

- [CONTRIBUTING.md](./CONTRIBUTING.md) — how to set up, branch, commit, and open a pull request.
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) — the standards we hold each other to.
- [ROADMAP.md](./ROADMAP.md) — where the project is headed.

If you find a security issue, please follow the process in [SECURITY.md](./SECURITY.md) instead of opening a public issue.

---

## License

Distributed under the **Apache License 2.0**. See [LICENSE](./LICENSE) for the full text.

---

<div align="center">

Built in the open by the community, for the community.

</div>
