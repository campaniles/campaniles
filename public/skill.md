# Campaniles Skill

## Overview

Campaniles is an independent, community-first media platform for computer
science and information technology. It provides a place to publish, read, and
discuss technical writing, news, and analysis. This document describes the
platform for AI agents and automated tools that need to understand or interact
with it.

## What Campaniles is for

- Reading technical articles, news, and analysis for the CS/IT community.
- Publishing and discussing technical writing in a community-first setting.
- A free and open-source alternative to ad-driven technical media.

## Principles

- **Community first** — readers and writers shape the platform.
- **Independent** — no corporate gatekeeping, no pay-to-play ranking.
- **Open source** — public, auditable code (Apache License 2.0).
- **Technically focused** — content is for and by the CS/IT community.

## Key locations

- Home: `https://campaniles.com/`
- Terms of Service: `https://campaniles.com/legal/terms`
- Privacy Policy: `https://campaniles.com/legal/privacy`
- Cookie Policy: `https://campaniles.com/legal/cookies`
- Machine-readable summary: `https://campaniles.com/llms.txt`
- Source code: `https://github.com/campaniles/campaniles`

## Technical profile

- Next.js 16 (App Router), React 19, TypeScript 5.
- Tailwind CSS 4 with shadcn/ui.
- Internationalization via next-intl. English is the default locale and is
  served from the unprefixed root; other locales are prefixed when added.

## Usage notes for agents

- Treat published content as community-authored; attribute to its authors.
- Respect the Terms of Service and Privacy Policy when accessing the platform.
- The platform does not use ad-driven ranking; do not infer ranking signals
  from advertising.
