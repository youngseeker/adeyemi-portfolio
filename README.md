# Adeyemi Portfolio Website

A modern, scalable portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom brand colors
- **Animations**: Framer Motion
- **Deployment**: Vercel (ready to deploy)

## ✨ Features

- ✅ Fully responsive design (mobile-first)
- ✅ Server-side rendering (SSR) for SEO
- ✅ Dynamic Medium article fetching via API route
- ✅ Interactive terminal typewriter effect
- ✅ Smooth animations with Framer Motion
- ✅ Image optimization with Next.js Image
- ✅ Brand color system (navy/cyan/slate)
- ✅ Component-based architecture
- ✅ TypeScript for type safety

## 📁 Project Structure

```
adeyemi-portfolio/
├── app/                      # Next.js App Router
│   ├── api/articles/         # API route for Medium feed
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/               # Reusable React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TerminalWindow.tsx
│   ├── Projects.tsx
│   ├── Certifications.tsx
│   ├── MindshiftLibrary.tsx
│   └── Footer.tsx
├── data/                     # Content/data layer
│   └── content.ts            # All hardcoded content
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript config
├── next.config.ts            # Next.js config
└── package.json
```

## 🎨 Brand Colors

The site uses a carefully crafted color palette (defined in `tailwind.config.ts`):

```css
--navy: #0a192f
--navy-light: #112240
--navy-lighter: #233554
--slate: #8892b0
--white: #e6f1ff
--cyan: #64ffda
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd adeyemi-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📝 Content Management

All content is managed in `data/content.ts`. Update this file to modify:

- **Skills**: Add/remove skills from the About section
- **Projects**: Update project cards with new links and descriptions
- **Certifications**: Add badges and credentials
- **Terminal Commands**: Customize the terminal typewriter effect
- **Social Links**: Update contact information

## 🔌 API Routes

### `/api/articles`

Fetches the 3 latest articles from your Medium feed.

**Response:**
```json
{
  "success": true,
  "articles": [
    {
      "title": "Article Title",
      "link": "https://medium.com/...",
      "pubDate": "2026-01-13T...",
      "author": "@adeyemiadeniji"
    }
  ]
}
```

**Caching**: Articles are cached for 1 hour to avoid rate limiting.

## 🎬 Animations

The site uses Framer Motion for smooth animations:

- **Staggered container animations**: Sections fade in with child elements
- **Hover effects**: Cards lift and scale on interaction
- **Scroll animations**: Elements animate as they enter the viewport
- **Terminal effect**: Typewriter animation for terminal output
- **Glow effects**: Subtle pulsing animations

## 📱 Responsive Design

- Mobile breakpoint: `768px`
- Tailwind's responsive utilities handle all breakpoints
- Mobile menu for navigation on small screens
- Images scale appropriately for all devices

## 🔒 Security

- Next.js automatic sanitization
- Environment variables for sensitive data (if needed)
- API rate limiting via caching (1 hour revalidate)
- Content Security Policy ready

## 🚀 Deployment

Ready to deploy on Vercel (zero-config):

```bash
npm run build
# Deploy to Vercel
vercel
```

Or use the Vercel CLI to connect your repository.

## 📈 Performance

- Automatic code splitting with Next.js
- Image optimization
- Font optimization
- CSS minification with Tailwind
- Server-side rendering for SEO
- Lighthouse ready

## 🛠️ Customization

### Update Contact Email

Edit `data/content.ts` and update:
```typescript
export const contactEmail = 'your-email@example.com'
```

### Add New Projects

Add to the `projects` array in `data/content.ts`:
```typescript
{
  id: 4,
  title: 'New Project',
  description: '...',
  image: 'new-project.jpg',
  tech: ['React', 'Node.js'],
  live: 'https://...',
}
```

### Modify Colors

Update `tailwind.config.ts` in the `colors` section.

## 📧 Support

For questions or issues, reach out at `danieladeniji001@gmail.com`.

---

**Built with ❤️ | Powered by Next.js & Tailwind CSS**
