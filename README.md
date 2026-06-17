# Siddharth Kumar - Full Stack & AI/ML Portfolio

A modern, fully responsive portfolio website showcasing engineering projects, skills, certifications, and professional experience.

**Live Demo:** [siddharthkumar.dev](https://siddharthkumar.dev)

## Features

- ✨ Modern glassmorphism design with smooth animations
- 📱 Fully responsive on mobile, tablet, and desktop
- 🎨 Dark mode with gradient accents
- 🖼️ Interactive certificate gallery
- 📧 Contact form with email integration
- 📄 Resume download and sharing
- ⚡ Built with Next.js 16, React 19, Tailwind CSS 4
- 🎬 Framer Motion animations
- 🌐 SEO optimized

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Media:** Cloudinary
- **Email:** Resend API
- **Deployment:** Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
git clone <repository>
cd portfolio
npm install
```

### Environment Setup

Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

Configure optional services:
- **Cloudinary:** Image hosting and optimization
- **Resend:** Email delivery for contact form

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Self-hosted with Node.js

## Customization

### Update Personal Information
Edit `data/portfolio.ts` to customize:
- Hero section and typewriter text
- Skills and categories
- Projects and case studies
- Certifications
- Work experience
- Contact information

### Styling
- Global styles: `app/globals.css`
- Component styles: Individual component files
- Theme colors defined in CSS variables

## Performance

- Optimized images via Cloudinary
- Code splitting and lazy loading
- Smooth animations with reduced motion support
- SEO metadata configured

## License

This project is open source. Feel free to use it as a template for your portfolio.
