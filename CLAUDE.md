# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Basily is a minimal expense tracking application built as a pnpm monorepo with three packages:
- **basily-backend**: Hono API server running on Bun (port 3000)
- **basily-web**: Next.js 16 web dashboard (port 3001)
- **basily-mobile**: Expo/React Native mobile app

## Common Commands

### Development
```bash
# From root - run backend and web together
pnpm dev:backend   # Starts Hono server with hot reload on port 3000
pnpm dev:web       # Starts Next.js dev server on port 3001

# From basily-backend/
bun run --hot src/index.ts   # or: pnpm dev

# From basily-web/
pnpm dev                     # Next.js on port 3001
pnpm lint                    # ESLint

# From basily-mobile/
pnpm start                   # Expo dev server
pnpm ios                     # iOS simulator
pnpm android                 # Android emulator
pnpm test                    # Jest tests (watch mode)
pnpm lint                    # Expo lint
```

### Database (Drizzle)
```bash
# From basily-backend/ or basily-web/
pnpm db:generate   # Generate migrations from schema changes
pnpm db:migrate    # Run migrations
pnpm db:push       # Push schema directly (dev only)
pnpm db:studio     # Open Drizzle Studio GUI
```

### Build
```bash
# Backend
cd basily-backend && bun build --target=bun --outfile=dist/server.js src

# Web
cd basily-web && pnpm build
```

## Architecture

### Tech Stack
- **Backend**: Hono + Bun + Drizzle ORM + PostgreSQL + Better Auth
- **Web**: Next.js 16 + React 19 + TanStack Query + Tailwind + shadcn/ui
- **Mobile**: Expo 54 + React Native + Expo Router + Nativewind + TanStack Query

### Authentication
All apps share Better Auth with GitHub OAuth as the only provider. The backend handles auth at `/api/auth/**` endpoints. CORS is configured for localhost dev ports (3000, 3001, 5173), Expo schemes, and production origins.

### Data Flow
- Backend exposes REST APIs consumed by both web and mobile clients
- Both clients use TanStack React Query for data fetching and caching
- Drizzle ORM manages PostgreSQL with cascade deletes for referential integrity

### Key Directories
```
basily-backend/
  src/
    index.ts          # Hono app entry, route registration
    routes/           # API route handlers
    db/schema.ts      # Drizzle schema definitions
    utils/env.ts      # Zod-validated environment variables

basily-web/
  src/
    app/              # Next.js App Router pages
    components/       # React components + shadcn/ui
    db/               # Drizzle config and schema
    lib/              # Utilities (auth-client, api helpers)

basily-mobile/
  app/                # Expo Router file-based routing
  components/         # React Native components
  lib/                # Auth client, utilities
```

## Git Conventions

Prepend all commit messages with "CLAUDE:" (e.g., "CLAUDE: Fix authentication bug").

## Important Constraints

**React Version Lock**: All packages must use React 19.1.0. Do not upgrade React versions - pnpm catalogs are disabled due to Railway deployment issues.

**Environment Files**: `.env` files are symlinked to `.env.dev` for local development. Production uses separate `.env.prod` files.
