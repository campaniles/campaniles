# Project Structure

## Layout

```
campaniles/
├── app/                      # Next.js App Router (routes, layouts, pages)
│   ├── favicon.ico           # Site favicon
│   ├── globals.css           # Global styles + Tailwind + theme tokens
│   ├── layout.tsx            # Root layout (fonts, metadata, shell)
│   └── page.tsx              # Home page
├── components/               # React components
│   └── ui/                   # shadcn/ui primitives (e.g. button.tsx)
├── lib/                      # Shared utilities and helpers
│   └── utils.ts              # `cn` class-name helper
├── public/                   # Static assets served at the web root
├── .env.example              # Documented template of environment variables
├── .env.local                # Local environment variables (git-ignored)
├── AGENTS.md                 # Guidance for AI coding agents
├── CLAUDE.md                 # Guidance for Claude / Claude Code
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs         # ESLint flat config
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Scripts and dependencies
```

## Where things go

- **Routes, pages, layouts** → `app/`. Follow Next.js 16 App Router conventions (see `tech.md`).
- **Reusable components** → `components/`. Generic shadcn/ui primitives go in `components/ui/`; feature or app-specific components go directly under `components/`.
- **Shared utilities and helpers** → `lib/`.
- **Static assets** (images, SVGs, fonts served as files) → `public/`, referenced from the web root (`/file.svg`).
- **Global styles and theme tokens** → `app/globals.css`.

## Conventions

- Use the `@/` path alias for imports from the project root (configured in `tsconfig.json`).
- Keep UI primitives (shadcn/ui) separate from composed, app-specific components.
- Project documentation (README, CONTRIBUTING, CHANGELOG, ROADMAP, SECURITY, CODE_OF_CONDUCT, LICENSE) lives at the repo root.
