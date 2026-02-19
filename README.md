# Cba_capital

This repository is the frontend for the CBA Capital website built with **Next.js**, **TypeScript**, and **Tailwind CSS**.  It provides a clean, scalable starting point for marketing and informational pages.

## 🔧 Getting started

1. Copy `.env.local.example` to `.env.local` and populate any required secrets.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` (or `:3001` if you pass a custom port) to view the app.

## 🏗 Architectural scaffold

The project follows the [App Router](https://nextjs.org/docs/app) conventions introduced in Next.js 13 with a clear separation of concerns.

```
/
├─ next.config.js          # Next.js configuration
├─ package.json
└─ src/
   ├─ app/                # Routes and layouts
   │   ├─ layout.tsx      # Root layout wrapping every page
   │   ├─ page.tsx        # Home page
   │   └─ api/            # Serverless API routes
   │       └─ contact/
   │           └─route.ts # POST handler for contact form
   ├─ components/         # Reusable UI pieces
   │   ├─ layout/
   │   │   ├─Navbar.tsx
   │   │   └─Footer.tsx
   │   ├─ sections/       # Page-specific section components
   │   │   ├─home/
   │   │   └─services/
   │   └─ ui/             # Primitive UI building blocks (Button, Card, etc.)
   ├─ lib/                # Shared utilities and constants
   │   ├─ constants.ts
   │   └─ utils.ts
   └─ types/              # Global TypeScript types and interfaces
```

- **Pages & Routing:** Each folder under `src/app` with a `page.tsx` file becomes a route. Layouts (`layout.tsx`) provide shared structure.
- **API Routes:** Built using the new `route.ts` file format inside `src/app/api`.
- **Components:** Split between higher‑level `sections` (composition of UI for a given page) and low‑level `ui` primitives.
- **Services:** `src/app/services/page.tsx` appears to be a content page for services.
- **Styles:** Tailwind CSS is configured via `tailwind.config.js`; global styles in `app/globals.css`.

## 🗂 Folder summary

- `src/app` – application code: pages, layouts and APIs
- `src/components` – shareable UI
- `src/lib` – constants & helpers
- `src/types` – TypeScript definitions

## 📝 Notes

- The repo uses React 18 and enables `reactStrictMode` in `next.config.js`.
- Environment variables should never be committed; use `.env.local` for local development.

