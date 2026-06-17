# Deployment Guide

Your portfolio is fully configured and ready for deployment. Follow the steps below based on your hosting platform.

## Pre-Deployment Checklist

- ✅ All instructional files removed
- ✅ Design is responsive and consistent
- ✅ Environment variables configured
- ✅ SEO metadata added
- ✅ Build tested locally

## Environment Variables Required

Create a `.env.local` file with the following (optional but recommended):

```env
# Cloudinary - for image optimization
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name

# Email - for contact form
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=your_email@domain.com
RESEND_TO_EMAIL=your_email@domain.com
```

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the official Next.js hosting platform with zero-config deployment.

**Steps:**
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in the Vercel dashboard
5. Deploy

Your site will be live at a `vercel.app` domain. Configure a custom domain in project settings.

### 2. Netlify

**Steps:**
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add environment variables
5. Deploy

### 3. AWS Amplify

**Steps:**
1. Connect GitHub repository
2. Set build settings: `npm run build`
3. Add environment variables
4. Deploy

### 4. Self-Hosted (VPS)

**Requirements:**
- Node.js 18+
- npm or yarn
- PM2 (process manager)

**Steps:**
```bash
# Clone repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
npm install -g pm2
pm2 start "npm start" --name portfolio
pm2 startup
pm2 save
```

Use Nginx as a reverse proxy:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

## Domain Configuration

1. Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Point nameservers to your hosting provider
3. Configure DNS records if needed
4. Enable SSL/TLS (automatic on Vercel, Netlify, Amplify)

## Performance Optimization

- Images are optimized via Cloudinary
- Next.js automatically handles code splitting
- CSS is minified with Tailwind
- Animations respect `prefers-reduced-motion`

## Monitoring & Maintenance

### Vercel Analytics
1. Enable Web Analytics in Vercel dashboard
2. Track Core Web Vitals

### Sentry (Optional)
Configure error tracking:
```bash
npm install @sentry/nextjs
```

### Uptime Monitoring
Use services like:
- UptimeRobot (free)
- Pingdom
- StatusPage.io

## Troubleshooting

### Build Fails
```bash
# Clear build cache
rm -rf .next
npm run build
```

### Images Not Loading
- Verify Cloudinary cloud name in `.env.local`
- Check image URLs are accessible
- Verify Cloudinary CDN is configured

### Contact Form Not Working
- Verify Resend API key is correct
- Check email addresses in environment variables
- Test with a simple fetch request

## Post-Deployment

1. Test all functionality in production
2. Verify responsive design on mobile
3. Check SEO with Google Search Console
4. Set up analytics
5. Monitor performance and errors

## Support

For issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Review Vercel deployment docs: https://vercel.com/docs
3. Check component console for errors
4. Review environment variable setup

---

Your portfolio is now deployment-ready! 🚀
