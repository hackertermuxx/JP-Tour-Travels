# Phase 11: Developer Handbook

## Coding Standards

### General
- TypeScript strict mode enabled
- No `any` types (use `unknown` and cast)
- Components are "use client" only when necessary
- Server components by default (App Router)

### Naming Conventions
- Components: PascalCase
- Functions: camelCase
- Files: kebab-case for pages, PascalCase for components
- Types/Interfaces: PascalCase

### Folder Structure
```
src/
  app/              # Next.js App Router pages
  components/       # Reusable components
    ui/             # shadcn/ui primitives
    layout/         # Navbar, Footer, MobileDrawer
    home/           # Homepage-specific
    packages/       # Package components
    destinations/   # Destination components
    blog/           # Blog components
    gallery/        # Gallery components
    reviews/        # Review components
    shared/         # Shared across pages
    admin/          # Admin dashboard components
  lib/              # Utilities, services, constants
    supabase/       # Supabase clients
    services/       # Business logic services
  types/            # TypeScript type definitions
  hooks/            # React hooks
  styles/           # Additional styles
```

### Import Order
1. React/Next.js
2. Third-party libraries
3. Components (via @/ alias)
4. Utils/services (via @/ alias)
5. Types (via @/ alias)

### Styling
- Tailwind CSS v4
- CSS variables for theme colors
- shadcn/ui design system
- cn() utility for class merging

### State Management
- React state for UI
- Server components for data fetching
- Supabase for backend state
- No global state library (keep it simple)

### Performance Rules
- Use next/image for images (once integrated)
- Lazy load below-fold content
- Minimize client components
- Use React.memo sparingly
