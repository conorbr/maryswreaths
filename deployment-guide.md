# Complete Guide: Deploy React/Vite Site to GitHub Pages + Cloudflare

This guide covers the complete process of setting up a React/Vite project for GitHub Pages deployment with Cloudflare DNS integration.

## Prerequisites

- Node.js 18+ installed
- GitHub account
- Cloudflare account
- Custom domain (optional)
- Existing React/Vite project

## Important Notes

- Replace `your-repo-name` with your actual repository name
- Replace `yourusername` with your actual GitHub username
- Replace `yourdomain.com` with your actual domain

## Step 1: Project Setup & Configuration

### 1.1 Configure Vite for Dual Deployment

Update `vite.config.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production" && !process.env.CUSTOM_DOMAIN
      ? "/your-repo-name/"
      : "/",
  optimizeDeps: {
    exclude: ["lucide-react"], // Remove this line if not using lucide-react
  },
});
```

### 1.2 Update Package.json Scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && gh-pages -d dist",
    "deploy:manual": "gh-pages -d dist",
    "build:custom-domain": "CUSTOM_DOMAIN=true npm run build"
  }
}
```

### 1.3 Install gh-pages

```bash
npm install --save-dev gh-pages
```

## Step 2: GitHub Pages Configuration

### 2.1 Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build:custom-domain

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 2.2 Configure GitHub Pages Settings

1. Go to repository Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Choose Branch: `gh-pages`
4. Choose Folder: `/ (root)`
5. Click Save

## Step 3: Cloudflare DNS Configuration

### 3.1 Add Domain to Cloudflare

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click "Add a site"
3. Enter your domain name
4. Choose Free plan

### 3.2 Update Nameservers

1. Cloudflare provides nameservers (e.g., `ns1.cloudflare.com`)
2. Update your domain registrar with these nameservers
3. Wait 5-15 minutes for propagation

### 3.3 Configure DNS Records

Add these DNS records in Cloudflare:

```
Type: CNAME
Name: www
Target: yourusername.github.io
Proxy: ✅ (Orange cloud)

Type: CNAME
Name: @ (root domain)
Target: yourusername.github.io
Proxy: ✅ (Orange cloud)
```

### 3.4 Configure GitHub Pages Custom Domain

1. Go to GitHub repo → Settings → Pages
2. Under "Custom domain", enter your domain
3. Check "Enforce HTTPS"

## Step 4: Cloudflare Optimization Settings

### 4.1 SSL/TLS Configuration

- Go to SSL/TLS → Overview
- Set encryption mode to "Full (strict)"

### 4.2 Speed Optimizations

- Go to Speed → Optimization:
  - ✅ Auto Minify (HTML, CSS, JS)
  - ✅ Brotli Compression
  - ✅ HTTP/2
  - ✅ HTTP/3

### 4.3 Security Settings

- Go to Security → Settings:
  - Security Level: Medium
  - ✅ Bot Fight Mode
  - ✅ DDoS Protection: Automatic

## Step 5: Performance Headers (Optional)

Create `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

## Step 6: Deploy and Test

### 6.1 Initial Deployment

```bash
# Commit and push changes
git add .
git commit -m "Configure GitHub Pages and Cloudflare deployment"
git push origin main
```

### 6.2 Manual Deployment (Backup)

```bash
npm run deploy:manual
```

### 6.3 Test URLs

- **GitHub Pages**: `https://yourusername.github.io/your-repo-name/`
- **Custom Domain**: `https://yourdomain.com`

### 6.4 Verify Deployment

1. Check GitHub Actions tab for successful deployment
2. Verify GitHub Pages settings show "Your site is live at..."
3. Test both URLs load correctly
4. Check browser console for any 404 errors

## Step 7: Troubleshooting

### Common Issues:

1. **404 Errors for Assets**:

   - Ensure `CUSTOM_DOMAIN=true` is set in GitHub Actions
   - Check that base path is `/` for custom domains

2. **SSL Certificate Issues**:

   - Set Cloudflare SSL mode to "Full (strict)"
   - Enable "Always Use HTTPS" in Cloudflare

3. **DNS Propagation**:

   - Wait 5-15 minutes after updating nameservers
   - Use `dig` or online DNS checker to verify

4. **GitHub Pages Not Updating**:
   - Check GitHub Actions tab for deployment status
   - Verify Pages settings point to `gh-pages` branch

## Benefits You Get:

- ⚡ **Global CDN**: Faster loading worldwide
- 🔒 **SSL Certificate**: Automatic HTTPS
- 🛡️ **DDoS Protection**: Automatic protection
- 📊 **Analytics**: Cloudflare Web Analytics
- 🚀 **Performance**: Auto-minification, compression
- 🔐 **Security**: WAF, bot protection
- 🔄 **Automatic Deployments**: Deploy on every git push

## File Structure Summary:

```
your-project/
├── .github/workflows/deploy.yml
├── public/_headers
├── vite.config.ts
├── package.json
└── dist/ (generated)
```

This setup gives you the best of both worlds: GitHub Pages for hosting and Cloudflare for performance and security!
