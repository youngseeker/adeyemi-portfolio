# Blog Image Placeholder Code Snippets

## Copy & Paste These Into Your Blog Articles

### Option 1: Markdown Image Syntax (Simplest)

Add this directly in your article's `content` field in `/data/content.ts`:

```typescript
content: `Introduction paragraph here...

![Image description here](https://via.placeholder.com/800x400)
*Optional caption text*

More content after the image...`
```

**For your "Power of Choice" article**:
```typescript
content: `Most people think they're choosing their lives. They're not.

![Man at crossroads in maze looking at digital menu](https://via.placeholder.com/800x400/0a192f/64ffda?text=Power+of+Choice)
*A conceptual illustration depicting the illusion of free will*

They're selecting from a menu they didn't design...`
```

---

### Option 2: Using Local Images from `/public/images/`

**In your article content**:
```typescript
content: `Introduction text...

![Alt text for image](/images/blog/power-of-choice/maze-menu.png)
*Caption goes here*

More content...`
```

**Note**: After adding this, you need to:
1. Add image to: `/public/images/blog/power-of-choice/maze-menu.png`
2. Rebuild: `npm run build`

---

### Option 3: External URLs (Unsplash, Medium, etc)

```typescript
content: `Text here...

![Graph showing options and freedom](https://images.unsplash.com/photo-xxxxxxxxxxxxx)
*Source: Unsplash / Your Source Here*

More text...`
```

---

## Ready-to-Use Templates

### For "Power of Choice" Article

```typescript
{
  id: 3,
  slug: 'power-of-choice-freedom-systems-problem',
  title: 'The Power of Choice: Why Freedom Is a Systems Problem, Not a Feeling',
  excerpt: 'Power isn\'t wealth or willpower. It\'s the alternatives you can actually see, survive, and pursue.',
  content: `Most people think they're choosing their lives. They're not.

![Man in maze with digital menu - power of choice illustration](https://via.placeholder.com/800x400/0a192f/64ffda?text=Menu+Control)
*Illustration: The Illusion of Free Will - AI Generated*

They're selecting from a menu they didn't design, constrained by options they barely notice, mistaking motion for agency. What feels like freedom is often just compliance with better aesthetics.

Real power operates upstream, shaping which options are even visible long before a decision feels like a choice.

## Power is menu control

Power is usually described as possession: money, authority, influence, reach. That definition is convenient — and shallow.

A more precise definition is structural: power is control over the menu of meaningful alternatives available to you.

![Graph - Local vs Global Maximum optimization](https://via.placeholder.com/800x400/0a192f/64ffda?text=Local+vs+Global+Maximum)
*Optimization landscape showing local and global maxima*

Perfection is usually a local maximum — a peak that looks final only because exploration stopped.

[Rest of your content continues...]`,
  category: 'Philosophy & Growth',
  date: '2026-01-16',
  readTime: '5 min read',
  tags: ['Self Improvement', 'Psychology', 'Philosophy'],
  likes: 0,
  comments: [],
}
```

---

## Placeholder Image URLs (Free to Use)

### Generic Placeholders:
```
https://via.placeholder.com/800x400
https://via.placeholder.com/800x400/0a192f/64ffda
https://via.placeholder.com/800x400?text=Your+Text+Here
```

### With Custom Colors (Your Brand):
- Navy background: `#0a192f`
- Cyan text: `#64ffda`

```
https://via.placeholder.com/800x400/0a192f/64ffda?text=Power+of+Choice
https://via.placeholder.com/800x400/112240/64ffda?text=Freedom+Menu
https://via.placeholder.com/600x300/233554/64ffda?text=Systems+Thinking
```

---

## How Images Display in Blog Posts

The blog component automatically renders images from your markdown. They will:
- ✅ Display at full width (responsive)
- ✅ Have rounded corners and borders
- ✅ Be centered in the article
- ✅ Show captions if you add `*caption text*`

---

## Real Image File Structure (When Ready)

```typescript
// Step 1: Add image files
/public/images/blog/power-of-choice/maze-menu.png
/public/images/blog/power-of-choice/graph.png

// Step 2: Update content with local paths
content: `Text...

![Maze menu](​/images/blog/power-of-choice/maze-menu.png)
*Caption*

![Graph](/images/blog/power-of-choice/graph.png)

More text...`
```

---

## Quick Copy-Paste Template

Use this template for any new article:

```typescript
{
  id: 4,
  slug: 'your-article-slug-here',
  title: 'Your Article Title',
  excerpt: 'Article excerpt...',
  content: `Introduction paragraph...

![Image description](PASTE_IMAGE_URL_HERE)
*Optional caption*

Main content...

![Another image if needed](PASTE_IMAGE_URL_HERE)
*Another caption*

More content...`,
  category: 'Category Name',
  date: '2026-01-16',
  readTime: '5 min read',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  likes: 0,
  comments: [],
}
```

---

## Image URL Options Ranked by Speed

1. **Placeholder URLs** - Instant, no setup needed
   ```
   https://via.placeholder.com/800x400
   ```

2. **External URLs** - Fast, immediate
   ```
   https://images.unsplash.com/photo-xxxxx
   https://images.pexels.com/photos/xxxxx
   ```

3. **Local files** - Optimized, best performance
   ```
   /images/blog/power-of-choice/maze.png
   ```

Choose based on your preference - all work perfectly fine!
