# 📸 How to Add Your Images to the Portfolio

## Step 1: Create the Images Folder

Your images should go in the `/public/images/` directory:

```bash
# From your project root:
mkdir -p public/images
```

## Step 2: Add Your Images

Place these 4 images in `/public/images/`:

1. **`me.jpg`** - Your profile photo (used in About section)
   - Recommended size: 400x400px or 600x600px
   - Format: JPG or PNG
   - Used in: About section (your profile image)

2. **`student-os.jpg`** - Universal CGPA Calculator project screenshot
   - Recommended size: 1200x800px or similar aspect ratio
   - Format: JPG or PNG
   - Used in: Projects section (Project #1)

3. **`athalia.jpg`** - Athalia Inn Events website screenshot
   - Recommended size: 1200x800px
   - Format: JPG or PNG
   - Used in: Projects section (Project #2)

4. **`sam.jpg`** - Sam Soyombo Platform screenshot
   - Recommended size: 1200x800px
   - Format: JPG or PNG
   - Used in: Projects section (Project #3)

## Step 3: Final Directory Structure

After adding images, your structure should look like:

```
/home/samsoyombopa/adeyemi-portfolio/
├── public/
│   ├── images/
│   │   ├── me.jpg          ← Your profile photo
│   │   ├── student-os.jpg  ← CGPA Calculator screenshot
│   │   ├── athalia.jpg     ← Athalia Inn screenshot
│   │   └── sam.jpg         ← Sam Soyombo screenshot
│   ├── favicon.ico
│   ├── icon.svg
│   ├── apple-touch-icon.svg
│   └── og-image.svg
```

## Step 4: Verify Images Load

After adding the images:

1. **Start the dev server** (if not running):
   ```bash
   npm run dev
   ```

2. **Visit** `http://localhost:3000`

3. **Check**:
   - About section shows your profile photo
   - All 3 project cards show their respective screenshots
   - No broken image icons (404 errors)

## Image Optimization Tips

✅ **Do**:
- Use JPG for photos (smaller file size)
- Optimize images before uploading (use tools like TinyPNG or ImageOptim)
- Keep images under 500KB each for fast loading
- Use consistent aspect ratios for project screenshots

❌ **Don't**:
- Upload extremely large images (over 2MB)
- Use different naming (file names must match exactly: `me.jpg`, not `Me.jpg`)
- Change file extensions (if code expects .jpg, don't use .png)

## Quick Copy Command (if images are elsewhere)

If your images are in another folder:

```bash
# Example: Copy from Downloads
cp ~/Downloads/me.jpg public/images/
cp ~/Downloads/student-os.jpg public/images/
cp ~/Downloads/athalia.jpg public/images/
cp ~/Downloads/sam.jpg public/images/
```

## Troubleshooting

**Images not showing?**
1. Check file names match exactly (case-sensitive on Linux)
2. Restart dev server: Stop (Ctrl+C) and run `npm run dev` again
3. Clear browser cache (Ctrl+Shift+R)
4. Check browser console for 404 errors

**Images too large/slow?**
- Resize to max 1920px width
- Compress using online tools
- Consider converting to WebP format

---

**Status**: Once images are in `/public/images/`, Next.js will automatically optimize them! 🚀
