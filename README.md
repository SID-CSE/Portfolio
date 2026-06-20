# Siddharth Kumar Portfolio

A production-ready portfolio built with Next.js, React, Tailwind CSS, and Framer Motion. It presents featured projects, skills, certifications, experience, resume actions, and a contact form in a responsive single-page layout.

## Features

- Fixed navigation with smooth section scrolling and active-section highlighting
- Featured projects with image previews, expandable project details, and a collapsible "View More Projects" flow
- Responsive sections for About, Skills, Projects, Certifications, Experience, and Contact
- Consistent glass-card design system, shared button styles, focus states, and reduced-motion support
- Interactive certificate and project image gallery
- Resume view, share, and download actions
- Contact API route with honeypot spam protection and optional Resend email delivery
- Cloudinary-backed media helpers for optimized remote assets

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons
- Cloudinary
- Resend
- Vercel-ready deployment

## Project Structure

```text
app/
  api/
    cloudinary/      Cloudinary upload and delete routes
    contact/         Contact form API route
  globals.css        Design tokens and shared utility classes
  layout.tsx         Metadata and root layout
  page.tsx           Portfolio page entry
components/
  About.tsx          About section
  ClickableImage.tsx Reusable image preview component
  Portfolio.tsx      Main page composition and navigation
  Skills.tsx         Interactive skills section
data/
  portfolio.ts       Portfolio copy, links, projects, certifications, and experience
lib/
  cloudinary.ts      Cloudinary signing, upload/delete helpers, and asset URLs
public/
  favicon.ico
```

Generated files, local environment files, caches, build output, editor settings, prompt artifacts, and implementation helper notes are ignored by Git. Production source, assets, configuration, lockfiles, and documentation remain trackable.

## Getting Started

### Prerequisites

- Node.js 20 or newer recommended
- npm

### Install

```bash
npm install
```

### Configure Environment

Copy the example environment file and fill in only the services you use:

```bash
cp .env.example .env.local
```

Common variables:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Validate

```bash
npm run lint
npm run build
```

## Deployment

### Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Add the required environment variables in the Vercel project settings.
4. Deploy from the production branch.

### Other Node Hosts

```bash
npm run build
npm start
```

Ensure the host supports Next.js App Router and the required environment variables.

## Updating Content

Most portfolio content lives in `data/portfolio.ts`:

- Navigation labels and section links
- Hero roles, focus areas, and stats
- Skills and categories
- Project cards, links, stack, impact, and architecture images
- Certifications and experience entries
- Social links and About section copy

Shared UI styling lives in `app/globals.css`, while section composition lives in `components/Portfolio.tsx`, `components/About.tsx`, and `components/Skills.tsx`.

## Screenshots

No committed screenshots are currently included. Add production screenshots under a tracked documentation or public assets folder if needed, and reference them here.
