# Copilot Instructions: Adeyemi Portfolio (Next.js)

## Project Overview

A modern, scalable portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion. The site showcases Adeyemi's work as a Computer Science student and Reflective Model Translation Partner.

**Philosophy**: "Structuring Wisdom. Engineering Systems." — technical expertise paired with ethical, human-centered design.

## Architecture & Stack

### Key Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS with custom color config + global CSS animations
- **Animations**: Framer Motion (scroll animations, staggered transitions, hover effects)
- **Data Layer**: TypeScript files in `/data/content.ts` (no external DB)
- **API Routes**: Next.js server functions in `/app/api/`
- **Deployment**: Vercel-ready with Image optimization

### Color Palette (Brand Identity - Preserved)
```typescript
// tailwind.config.ts
colors: {
  navy: '#0a192f',
  'navy-light': '#112240',
  'navy-lighter': '#233554',
  slate: '#8892b0',
  white: '#e6f1ff',
  cyan: '#64ffda',
}
```
All original brand colors maintained 1:1 from vanilla version.

## File Structure & Conventions

### Directory Organization
```
components/          # Reusable React components (one per section)
  ├── Navbar.tsx    # Sticky nav with mobile menu
  ├── Hero.tsx      # Landing section with code block
  ├── About.tsx     # Profile, skills, terminal window
  ├── Projects.tsx  # Project grid with 3-card layout
  ├── Certifications.tsx
  ├── MindshiftLibrary.tsx  # Medium articles (API-driven)
  └── Footer.tsx
  
data/
  └── content.ts    # Centralized content: skills, projects, certs, socials
  
app/
  ├── page.tsx      # Main layout composition
  ├── layout.tsx    # Root layout with metadata
  ├── globals.css   # Global styles + animations
  └── api/
      └── articles/route.ts  # Server-side Medium fetch
```

## Component Patterns

### React/TypeScript Conventions

**1. Client Components**
All interactive components use `'use client'` directive (event handling, state, animations):
```typescript
'use client'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TerminalWindow() { ... }
```

**2. Server Components**
Server-rendered by default unless `'use client'` is specified. Used for static content only.

**3. Animation Patterns (Framer Motion)**
```typescript
// Staggered container + child animations
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// Usage in JSX
<motion.div variants={container} initial="hidden" whileInView="visible">
  {items.map(i => <motion.div key={i} variants={item}>{i}</motion.div>)}
</motion.div>
```

### Key Component Logic

**TerminalWindow**: 
- Reads from `terminalCommands` array in `data/content.ts`
- Uses `useEffect` to stagger line rendering at 1200ms intervals
- Renders command + output pairs with color styling
- Cursor animation defined in `globals.css` (@keyframes blink)

**MindshiftLibrary**:
- Fetches articles from `/api/articles` endpoint
- Server-side RSS parsing (no XSS exposure)
- Shows loading state during fetch
- Error fallback with static message

**About**:
- Combines profile image (Next.js Image component) with TerminalWindow
- Grid layout: 2/3 text content + 1/3 visual stack
- Skills grid auto-responsive with hover effects

## Data Management

### Content Source: `data/content.ts`

All content is centralized here—no hardcoding in components:

```typescript
export const skills = [{ icon, text }] // Skills grid
export const terminalCommands = [{ cmd, out }] // Terminal typewriter
export const projects = [{ id, title, tech, github, live, ... }] // Project cards
export const certifications = [{ id, title, issuer, icon, year }]
export const socials = [{ name, url, icon }]
export const contactEmail = 'danieladeniji001@gmail.com'
```

**Pattern**: Import these arrays in components → map over them → render. Changes here automatically propagate to UI.

## Styling Approach

### Tailwind CSS + Global CSS

**Tailwind (90% of styles)**:
- Utility-first (e.g., `className="flex gap-4 hover:text-cyan transition-colors"`)
- Responsive variants: `md:grid-cols-2 lg:grid-cols-3`
- Custom colors via `tailwind.config.ts` → `className="text-cyan bg-navy"`

**Global CSS in `globals.css` (10% of styles)**:
- Animations: `@keyframes blink`, `@keyframes glow`
- Base resets: `* { box-sizing: border-box }`
- Font imports: Google Fonts (Fira Code, Inter)

**Hover/Interaction Patterns**:
```jsx
// Tailwind hover + Framer whileHover
className="hover:text-cyan hover:bg-cyan/10 transition-colors"
whileHover={{ y: -8, scale: 1.02 }}
```

## Image Handling

### Next.js Image Component

```jsx
import Image from 'next/image'

<Image
  src="https://via.placeholder.com/..."
  alt="description"
  width={300}
  height={300}
  className="..."
/>
```

**Key Points**:
- Automatic responsive image serving
- Lazy loading by default
- WebP/AVIF format support
- Placeholder URLs used for missing local images (matching old site behavior)

## API Routes & Server Functions

### `/api/articles` Route

**Purpose**: Fetch Medium feed server-side (avoids CORS, more secure)

```typescript
// app/api/articles/route.ts
export async function GET() {
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@adeyemiadeniji`
  // Fetch + cache for 1 hour
  // Return JSON with articles array
}
```

**Caching**: `next: { revalidate: 3600 }` — ISR (Incremental Static Regeneration) refreshes every hour.

## Mobile Responsiveness

### Breakpoint Strategy

- **Mobile-first**: Base styles for mobile, scale up
- **Breakpoint**: 768px (`md:` prefix)
- **Tailwind responsive**:
  ```jsx
  className="grid md:grid-cols-2 lg:grid-cols-3"
  // 1 column mobile, 2 desktop, 3 on large screens
  ```

### Components with Mobile Handling
- **Navbar**: Mobile menu with hamburger toggle (`md:hidden` nav links)
- **Hero**: Stack vertically on mobile, 2-col on desktop
- **Project Grid**: Responsive `auto-fill` with `minmax()`

## Development Workflow

### Running Locally
```bash
npm install
npm run dev  # http://localhost:3000
```

### Building
```bash
npm run build  # Optimizes for production
npm start      # Runs production server
```

### Common Tasks

**Add a new project:**
1. Update `data/content.ts` → `projects` array
2. Component auto-renders from data

**Update brand colors:**
1. Edit `tailwind.config.ts` → `colors` section
2. All components using `text-cyan` / `bg-navy` auto-update

**Add new skill:**
1. Push to `data/content.ts` → `skills` array
2. About section auto-renders

**Modify animations:**
1. Edit component's `motion.div` props
2. Or add `@keyframes` to `globals.css`

## Performance & SEO

### Next.js Optimizations
- **Image optimization**: Automatic WebP/AVIF conversion
- **Code splitting**: Each route loads only needed code
- **Server-side rendering**: Better SEO + fast first paint
- **Static generation**: `page.tsx` pre-rendered at build time

### SEO Setup (`app/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Adeyemi Adeniji | System & Soul',
  description: '...',
  keywords: [...],
  openGraph: { ... }
}
```

## Integration Points

### External Services
- **Medium API**: RSS2JSON wrapper (free tier) → `/api/articles`
- **Vercel**: Hosting platform (git-connected auto-deploy)
- **Font Awesome CDN**: Icons (via HTML `<i>` tags, no package)
- **Google Fonts**: Inter + Fira Code (async-loaded in layout)

### Configuration Files
- `next.config.ts`: Image domains, optimizations
- `tailwind.config.ts`: Color system, fonts
- `tsconfig.json`: Path aliases (`@/*`)
- `postcss.config.js`: Tailwind + Autoprefixer

## Known Architectural Decisions

1. **Client Components Over Pages**: Content sections are components for reusability and easier testing
2. **Centralized Data**: All content in one TypeScript file for easy updates (no CMS needed yet)
3. **Framer Motion for Animations**: Declarative, performant, scroll-aware
4. **API Route for Medium**: Server-side fetching avoids CORS, faster for client
5. **Tailwind as Primary**: Utility-first reduces custom CSS burden
6. **No Database**: Portfolio is mostly static—JSON data layer is sufficient

## Scalability Path

If expanding:
1. **CMS Integration**: Contentful/Sanity → replace `data/content.ts` with API calls
2. **Contact Form**: Add `app/api/contact/route.ts` with email service (Resend/SendGrid)
3. **Blog**: Extend `MindshiftLibrary` to local markdown posts in `/app/blog/[slug]`
4. **Authentication**: NextAuth.js for admin panel if needed
5. **Database**: Prisma + PostgreSQL if tracking metrics/comments

---

**Last Updated**: January 2026 | **Version**: Next.js 15 + TypeScript | **Status**: Production-ready
