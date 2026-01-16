# How to Add Images to Your Blog Articles

## Quick Guide: 3 Methods

### Method 1: Using External URLs (Easiest - Recommended for Now)

**Use Case**: Images already hosted on Medium, Unsplash, or other CDNs

**Steps**:
1. Open `/data/content.ts`
2. In your blog article's `content` field, add an image URL:

```typescript
content: `Your article introduction...

![Alt text for accessibility](https://images.unsplash.com/photo-xxxxx)
*Caption text here (optional)*

More article content...`
```

**Example for your new "Power of Choice" article**:
```typescript
content: `Most people think they're choosing their lives. They're not.

![A man at a crossroads in a maze looking at a digital menu](https://via.placeholder.com/800x400/0a192f/64ffda?text=Power+of+Choice)
*Illustration: The illusion of free will - AI Generated*

They're selecting from a menu they didn't design...`
```

**Pros**: Instant, no build changes, works immediately
**Cons**: External dependency, slower load times

---

### Method 2: Using Next.js Public Folder (Best for Production)

**Use Case**: High-quality images you own, want optimized loading

**Steps**:

#### 1. Add image to project
```bash
# Navigate to public/images folder (create if doesn't exist)
cd /home/samsoyombopa/adeyemi-portfolio/public/images

# Create blog subfolder
mkdir -p blog

# Copy your image there (example)
cp ~/Downloads/power-of-choice-menu.png ./blog/power-of-choice-menu.png
```

#### 2. Update blog article in `/data/content.ts`

Add an `image` property to the article:
```typescript
{
  id: 3,
  slug: 'power-of-choice-freedom-systems-problem',
  title: 'The Power of Choice...',
  image: '/images/blog/power-of-choice-menu.png', // Add this line
  excerpt: '...',
  content: `...`
}
```

#### 3. Update blog detail page to show the image

Edit `/app/blog/[slug]/page.tsx` (around line 125, after the title):

```tsx
<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
  {article.title}
</h1>

{/* Add this block */}
{article.image && (
  <div className="mb-8 rounded-lg overflow-hidden border border-cyan/20">
    <Image
      src={article.image}
      alt={article.title}
      width={800}
      height={400}
      className="w-full h-auto"
      priority
    />
  </div>
)}

<div className="flex flex-col sm:flex-row sm:items-center gap-4...">
```

Don't forget to import Image at the top of the file:
```tsx
import Image from 'next/image'
```

**Pros**: 
- Automatic optimization (WebP/AVIF)
- Lazy loading
- Responsive sizes
- Faster performance

**Cons**: Requires rebuild (`npm run build`)

---

### Method 3: Multiple Images in Article Body

**For articles with multiple inline images**

#### Option A: Markdown syntax in content (simple)
```typescript
content: `Introduction text...

## Section 1
Content here...

![Description](https://example.com/image1.jpg)
*Caption for image 1*

More content...

![Another image](/images/blog/image2.png)
*Caption for image 2*

Final content...`
```

Then update the blog detail page to render markdown properly (requires markdown parser).

#### Option B: Create custom image array (advanced)
```typescript
{
  id: 3,
  slug: 'power-of-choice',
  title: 'The Power of Choice',
  images: [
    { src: '/images/blog/maze-menu.png', alt: 'Man in maze', caption: 'AI Generated' },
    { src: '/images/blog/graph.png', alt: 'Local vs Global Maximum', caption: 'Shutterstock' }
  ],
  content: `...`
}
```

---

## Recommended Workflow for Your Articles

### For the "Power of Choice" article specifically:

1. **Quick placeholder** (do this now):
   ```typescript
   // In data/content.ts, update article 3
   content: `![Power of Choice Visualization](https://via.placeholder.com/800x400/0a192f/64ffda?text=Menu+Control+System)
   
   Most people think they're choosing their lives. They're not...`
   ```

2. **Add actual images later**:
   - Save your images to: `/public/images/blog/power-of-choice/`
   - Name them: `menu-control.png`, `local-maximum-graph.png`, etc.
   - Update content with: `![Alt text](/images/blog/power-of-choice/menu-control.png)`

---

## Image Best Practices

### File Organization
```
public/
  images/
    blog/
      power-of-choice/
        hero.png
        maze-menu.png
        graph.png
      outdated-os/
        education-ai.png
      physics-new-year/
        momentum.png
```

### File Naming
- ✅ `power-of-choice-hero.png` (lowercase, hyphens)
- ✅ `local-maximum-graph.jpg`
- ❌ `Power Of Choice.PNG` (avoid spaces, uppercase)
- ❌ `IMG_1234.jpg` (not descriptive)

### Image Sizes
- **Hero images**: 1200x630px (social media optimized)
- **Inline images**: 800x400px or 800x600px
- **Thumbnails**: 400x300px
- **Keep under 500KB** for web performance

### Format Recommendations
- **Photos**: JPG (smaller file size)
- **Illustrations/Icons**: PNG (transparency)
- **Diagrams**: SVG (scalable, crisp at any size)
- Next.js will auto-convert to WebP/AVIF anyway

---

## Quick Commands Reference

```bash
# Create blog images folder
mkdir -p /home/samsoyombopa/adeyemi-portfolio/public/images/blog/power-of-choice

# Copy image from Downloads
cp ~/Downloads/my-image.png /home/samsoyombopa/adeyemi-portfolio/public/images/blog/power-of-choice/hero.png

# Optimize image size (if imagemagick installed)
convert hero.png -resize 800x -quality 85 hero-optimized.jpg

# Check image size
ls -lh /home/samsoyombopa/adeyemi-portfolio/public/images/blog/power-of-choice/
```

---

## Example: Complete Article with Image

```typescript
{
  id: 3,
  slug: 'power-of-choice-freedom-systems-problem',
  title: 'The Power of Choice: Why Freedom Is a Systems Problem, Not a Feeling',
  image: '/images/blog/power-of-choice/hero.png', // Featured image
  excerpt: 'Power isn\'t wealth or willpower. It\'s the alternatives you can actually see, survive, and pursue.',
  content: `Most people think they're choosing their lives. They're not.

![Man at crossroads in dark maze](/images/blog/power-of-choice/maze-menu.png)
*A conceptual illustration depicting the illusion of free will - AI Generated*

They're selecting from a menu they didn't design, constrained by options they barely notice...

## Power is menu control

Power is usually described as possession...

![Graph showing local vs global maximum](/images/blog/power-of-choice/optimization-graph.png)
*Local minimum, maximum, and Global maximum - Shutterstock*

Perfection is usually a local maximum...`,
  category: 'Philosophy & Growth',
  date: '2026-01-16',
  readTime: '5 min read',
  tags: ['Self Improvement', 'Psychology', 'Philosophy'],
  likes: 0,
  comments: []
}
```

---

## Current Status for Your 3 Articles

| Article | Slug | Has Images? | Recommendation |
|---------|------|-------------|----------------|
| Outdated OS Trap | `outdated-os-trap-education-ai-era` | ❌ No | Add AI/education themed image |
| Physics of New Year | `physics-why-new-year-fails` | ❌ No | Add momentum/physics diagram |
| **Power of Choice** | `power-of-choice-freedom-systems-problem` | ❌ No | **You mentioned maze + graph images - let's add them!** |

---

## Next Steps

### For "Power of Choice" article:

1. **Save your images** (the maze menu + graph) to your computer
2. **Upload to project**:
   ```bash
   # From your terminal in VS Code
   mkdir -p public/images/blog/power-of-choice
   
   # Then drag images into that folder via VS Code file explorer
   # Or use cp command if images are in Downloads
   ```

3. **Update the article** in `data/content.ts`:
   ```typescript
   image: '/images/blog/power-of-choice/maze-menu.png',
   ```

4. **Add inline images** in the content:
   ```typescript
   content: `Introduction...
   
   ![Maze menu visualization](/images/blog/power-of-choice/maze-menu.png)
   *The illusion of free will - AI Generated*
   
   ...more content...
   
   ![Local vs global maximum](/images/blog/power-of-choice/graph.png)
   *Optimization landscape - Shutterstock*
   `
   ```

5. **Rebuild**:
   ```bash
   npm run build
   npm start
   ```

---

**Need help?** Just tell me:
1. Where your images are located (Downloads folder?)
2. What you want to name them
3. Which article sections should have which images

I can help you move them to the right place and update your blog articles!
