# Kingsley Nyoyoko — Portfolio

Personal portfolio website built with Next.js 15/16 (App Router), TypeScript, Tailwind CSS v4, and Motion. Features light/dark mode toggle, scroll animations, and pages for home, about, experience, projects, certifications, and contact.

## Tech stack

- Next.js (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Motion (framer-motion successor) for animations
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command          | Description                        |
| ---------------- | ---------------------------------- |
| `npm run dev`    | Start development server           |
| `npm run build`  | Production build                   |
| `npm run start`  | Serve production build             |
| `npm run lint`   | Run ESLint                         |

## Structure

```
app/            Pages (home, about, experience, projects, certifications, contact)
components/     Navbar, Footer, Hero, ThemeProvider, ThemeToggle, cards, animations
```