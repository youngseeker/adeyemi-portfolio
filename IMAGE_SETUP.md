# 🖼️ Image Setup - Step by Step

## The Most Important Step!

Your portfolio won't look right without images. Here's exactly how to set it up:

---

## Current Project Structure

```
/home/samsoyombopa/adeyemi-portfolio/
├── app/
├── components/
├── data/
├── lib/
├── public/
│   └── (currently empty or has favicon)
├── package.json
├── tailwind.config.ts
└── ... other files
```

---

## What You Need to Do

### Step 1: Create `images` Folder

Navigate to the `public` folder and create a new folder called `images`.

**Path**: `/public/images/`

### Step 2: Place Your 4 Images

Copy these exact files to `/public/images/`:

```
/public/images/
├── me.jpg          ← Your profile photo
├── athalia.jpg     ← Athalia Inn Events screenshot
├── sam.jpg         ← Sam Soyombo Platform screenshot
└── student-os.jpg  ← Student OS project screenshot
```

### Step 3: Verify File Names

⚠️ **IMPORTANT**: File names are **case-sensitive** on Linux!

✅ Correct:
- `me.jpg`
- `athalia.jpg`
- `sam.jpg`
- `student-os.jpg`

❌ Wrong (will NOT work):
- `Me.jpg` (capital M)
- `Athalia.jpg` (capital A)
- `athalia.JPG` (capital extension)
- `athalia.jpeg` (wrong extension)
- `sample-athalia.jpg` (wrong name)

---

## Where Each Image Is Used

### me.jpg
**File**: `components/About.tsx`
**Line**: Image component loads from `/images/me.jpg`
**Display**: About section (profile photo)
**Size**: ~300x300px ideal

### athalia.jpg
**File**: `components/Projects.tsx`
**Line**: Projects array with `image: 'athalia.jpg'`
**Display**: Projects grid card #2
**Size**: ~400x300px ideal

### sam.jpg
**File**: `components/Projects.tsx`
**Line**: Projects array with `image: 'sam.jpg'`
**Display**: Projects grid card #3
**Size**: ~400x300px ideal

### student-os.jpg
**File**: `components/Projects.tsx`
**Line**: Projects array with `image: 'student-os.jpg'`
**Display**: Projects grid card #1
**Size**: ~400x300px ideal

---

## Full Directory Tree

After you add the images, your structure should be:

```
/home/samsoyombopa/adeyemi-portfolio/
│
├── app/
│   ├── api/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components/
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── Certifications.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MindshiftLibrary.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── TerminalWindow.tsx
│   └── ...
│
├── data/
│   └── content.ts
│
├── lib/
│   └── ...
│
├── public/
│   ├── images/
│   │   ├── me.jpg          ← YOUR PROFILE
│   │   ├── athalia.jpg     ← ATHALIA PROJECT
│   │   ├── sam.jpg         ← SAM PROJECT
│   │   └── student-os.jpg  ← STUDENT OS PROJECT
│   ├── favicon.ico
│   └── ...
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── ... other files
```

---

## How the Code References Images

### In About.tsx:
```jsx
<Image
  src="/images/me.jpg"    ← Reference from /public/
  alt="Adeyemi Adeniji"
  fill
  className="object-cover"
/>
```

### In Projects.tsx:
```jsx
{projects.map((project) => (
  <Image
    src={`/images/${project.image}`}  ← Uses image field from data
    alt={project.title}
    fill
    className="object-cover"
  />
))}
```

### In data/content.ts:
```typescript
{
  id: 1,
  title: 'Universal CGPA Calculator',
  image: 'student-os.jpg',  ← Just the filename
  ...
},
{
  id: 2,
  title: 'Athalia Inn Events',
  image: 'athalia.jpg',     ← Just the filename
  ...
},
{
  id: 3,
  title: 'Sam Soyombo Platform',
  image: 'sam.jpg',         ← Just the filename
  ...
},
```

---

## Testing Your Setup

### Step 1: Add images to `/public/images/`
### Step 2: Run locally
```bash
npm run dev
```

### Step 3: Check these sections
- ✅ About section: See your profile photo
- ✅ Projects section: See your project screenshots
- ✅ No broken image icons ✕

### Step 4: Test on mobile
Open on a phone or use DevTools (F12) to view mobile

---

## Troubleshooting

### Images Not Showing?

**Problem**: Broken image icon appears
**Solution**:
1. Check file path: `/public/images/filename.jpg`
2. Check spelling matches exactly (case-sensitive!)
3. Check extension is `.jpg` not `.jpeg`
4. Try `npm run dev` again
5. Hard refresh browser (Ctrl+Shift+R)

**Problem**: 404 error in console
**Solution**:
1. Check file exists in folder
2. Check folder is named `images` (not `image`)
3. Check public/images path is correct
4. Run `npm run build` to check build errors

**Problem**: Images load but look weird
**Solution**:
1. Image might be wrong size (should be ~400x300 or ~300x300)
2. Try resizing images to correct dimensions
3. Check image format is actually JPEG

---

## Image Requirements

### Recommended Specifications:

| Image | Size | Dimensions | Format |
|-------|------|-----------|--------|
| me.jpg | <300KB | 300x300px | JPEG |
| athalia.jpg | <300KB | 400x300px | JPEG |
| sam.jpg | <300KB | 400x300px | JPEG |
| student-os.jpg | <300KB | 400x300px | JPEG |

### Why These Specs?
- **< 300KB**: Faster loading
- **Correct dimensions**: Prevents stretching/distortion
- **JPEG**: Best for photos/screenshots
- **Square for profile**: Circles look better
- **Landscape for projects**: Fits card layout

---

## If You Don't Have Images Yet

You have two options:

### Option 1: Use Placeholder Images
Create simple images and save as JPEGs:
- me.jpg: Your selfie or photo
- athalia.jpg: Screenshot of Athalia website
- sam.jpg: Screenshot of Sam's website
- student-os.jpg: Screenshot of Student OS app

### Option 2: Temporary Placeholders
Edit the image paths in components to use URLs temporarily:
```jsx
src={`https://via.placeholder.com/400x300?text=${project.title}`}
```
(Not recommended - slower and looks generic)

---

## Next Steps After Adding Images

1. ✅ Add images to `/public/images/`
2. ✅ Run `npm run dev`
3. ✅ Verify all images load
4. ✅ Test on mobile
5. ✅ Deploy: `git push`

---

## Quick Copy/Paste Test

After adding images, your browser should show:

**About section:**
```
┌─────────────────┐
│   [YOUR PHOTO]  │  ← me.jpg
│                 │
│  Name appears   │
└─────────────────┘
```

**Projects section:**
```
┌───────────────┐ ┌───────────────┐ ┌───────────────┐
│ [Student OS]  │ │ [Athalia]     │ │ [Sam]         │
│               │ │               │ │               │
│ Project 1     │ │ Project 2     │ │ Project 3     │
└───────────────┘ └───────────────┘ └───────────────┘
     ↑ student-os.jpg ↑ athalia.jpg ↑ sam.jpg
```

---

## File Permissions (Linux)

If images won't show after placement, check permissions:

```bash
# Make sure images are readable
chmod 644 /path/to/public/images/*.jpg
```

---

## Final Checklist

- [ ] Created `/public/images/` folder
- [ ] Placed `me.jpg` in folder
- [ ] Placed `athalia.jpg` in folder
- [ ] Placed `sam.jpg` in folder
- [ ] Placed `student-os.jpg` in folder
- [ ] File names match exactly (case-sensitive)
- [ ] All files are `.jpg` format
- [ ] Ran `npm run dev`
- [ ] Verified images load in browser
- [ ] Tested on mobile
- [ ] Ready to deploy! ✅

---

**Once images are in place, your portfolio is ready to shine! 🌟**

See [QUICK_START.md](./QUICK_START.md) for next steps.
