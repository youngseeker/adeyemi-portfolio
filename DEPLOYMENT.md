# 🚀 Deployment Guide

Your Next.js portfolio is production-ready and can be deployed to various platforms.

## Quick Deploy Options

### 1. **Vercel** (Recommended - Zero Config)

The easiest option. Vercel is made by the creators of Next.js.

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
# Your site will be live in minutes!
```

**Result**: Your site gets a URL like `adeyemi-portfolio.vercel.app`

**Benefits**:
- Zero configuration
- Automatic deployments from Git
- Free tier available
- Built-in analytics
- Edge functions support

**Connect GitHub for Auto-Deploy**:
```bash
vercel link  # Connect your repo
git push     # Auto-deploys on every push
```

---

### 2. **Netlify**

Another great option for Next.js sites.

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Follow the prompts
```

---

### 3. **Railway**

Simple platform with GitHub integration.

```bash
npm i -g railway
railway link
railway up
```

---

### 4. **Self-Hosted (Docker / VPS)**

For full control:

```bash
# Build
npm run build

# Create Dockerfile
# (Railway, Render, Fly.io handle this automatically)

# Start
npm start
```

---

## Environment Variables

If you add any secrets, create `.env.local`:

```env
# Example (not needed for current setup)
MEDIUM_API_KEY=your_key
DATABASE_URL=your_database_url
```

These are automatically ignored in git and loaded in development.

---

## Custom Domain

Once deployed, connect your custom domain:

1. **Vercel**: Settings → Domains → Add domain
2. **Netlify**: Site settings → Domain management
3. **Other**: Update DNS records to point to your hosting provider

---

## Performance Checklist

Before deploying:

- [ ] `npm run build` succeeds
- [ ] No TypeScript errors
- [ ] Images are optimized
- [ ] Content is updated
- [ ] Links are verified
- [ ] Mobile responsive
- [ ] SEO meta tags are set

---

## Monitoring & Analytics

### Vercel Analytics (Free)
```bash
vercel analytics
```

### Next.js Speed Insights
Built-in with Vercel deployment.

---

## Rollback / Versions

**Vercel**: Automatically keeps previous deployments. Easy one-click rollback.

**Git**: Tag releases:
```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Environment Setup

### Production
```bash
NODE_ENV=production npm run build
npm start
```

### Development
```bash
npm run dev
```

---

## CI/CD Pipeline Example

GitHub Actions (automatic on push):

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@v4
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
```

---

## Troubleshooting Deployments

### Build fails
```bash
npm run build  # Test locally first
```

### Missing dependencies
```bash
npm install
npm i missing-package
```

### Port issues
Next.js automatically picks available ports.

### Memory issues
Increase Node memory:
```bash
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

---

## Cost Estimates

| Platform | Cost | Limits |
|----------|------|--------|
| Vercel | Free | 100 GB/month |
| Netlify | Free | 100 GB/month |
| Railway | Free | $5/month credit |
| Self-Hosted | $5-20/month | Unlimited |

For a portfolio site, **free tiers are more than enough**.

---

## Next Steps

1. **Choose Platform**: Vercel recommended
2. **Test Build**: `npm run build`
3. **Deploy**: Follow platform instructions
4. **Add Domain**: Point to your hosting
5. **Monitor**: Check analytics & performance
6. **Update**: Push changes to redeploy

---

Happy deploying! 🎉
