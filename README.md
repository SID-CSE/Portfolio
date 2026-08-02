# Siddharth Kumar Portfolio

A responsive personal portfolio for **Siddharth Kumar**, a final-year Computer Science Engineering student focused on full-stack development, AI/ML, cloud, and DevOps.

## Live Site

**[portfolio-siddharth04.vercel.app](https://portfolio-siddharth04.vercel.app)**

## Overview

This single-page portfolio presents technical strengths, featured work, certifications, internship experience, and ways to get in touch. It is designed with a polished glass-card interface, accessible interaction states, responsive layouts, and motion that respects user preferences.

## Current Highlights

- 15+ projects across full-stack development, AI/ML, cybersecurity, IoT, and Android
- 10+ professional and academic certifications
- 3+ internship experiences
- 9.05 CGPA
- Download, share, and view actions for the resume
- Social links for GitHub, LinkedIn, LeetCode, HackerRank, and email

## Features

- Fixed navigation with smooth in-page scrolling and active-section highlighting
- Animated introduction and typewriter hero roles, with reduced-motion support
- About, skills, projects, certifications, experience, and contact sections
- Expandable featured-project cards with technology stacks, architecture, challenges, impact, and project links
- Clickable certificate and project-media previews
- Responsive layouts for mobile, tablet, and desktop screens
- Contact and feedback API with honeypot protection, input validation, rate limiting, HTML escaping, and optional Resend email delivery
- Cloudinary-hosted images and resume assets optimized with `next/image`
- Security headers for content type protection, referrer policy, permissions policy, HSTS, and uncached API responses
- SEO metadata and Open Graph/Twitter card configuration for `portfolio-siddharth04.vercel.app`

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons
- Cloudinary
- Resend
- Vercel-ready deployment

## Featured Projects

| Project | Focus | Stack |
| --- | --- | --- |
| Contify CMS | Role-based content-management workflows | React, Spring Boot, MySQL, JWT, Cloudinary |
| Taskera (TalentLink) | Freelance marketplace and talent matching | React, Django REST Framework, PostgreSQL, JWT/OAuth2 |
| SmartPay4 | Employee salary prediction | Python, XGBoost, Scikit-Learn, Streamlit |
| Game Arcade | Android games with an AI assistant | Java, Android, OkHttp, Groq API |
| Recon Automation | Ethical security-assessment automation | Python, Nmap, OSINT, Kali Linux |
| IoT Monitoring Systems | Remote livestock and wearable health monitoring | Raspberry Pi, Arduino, sensors, Bluetooth, MQTT/HTTP |

## Project Structure

```text
app/
  api/contact/       Contact and feedback API endpoint
  globals.css        Design tokens and shared styles
  layout.tsx         Root layout and site metadata
  page.tsx           Portfolio page entry
components/
  About.tsx          About section
  ClickableImage.tsx Image preview component
  Portfolio.tsx      Main portfolio composition and navigation
  Skills.tsx         Skills section
data/
  portfolio.ts       Portfolio content, projects, credentials, and links
lib/
  cloudinary.ts      Cloudinary asset URL helpers
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and Run

```bash
npm install
npm run dev
```

### Verify

```bash
npm run lint
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and only configure the services you use.

```bash
cp .env.example .env.local
```

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Public Cloudinary cloud name for media URLs |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name for server-side configuration |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `CLOUDINARY_ADMIN_TOKEN` | Admin token reserved for Cloudinary administration workflows |
| `RESEND_API_KEY` | Enables Resend email delivery |
| `RESEND_FROM_EMAIL` | Verified Resend sender address |
| `RESEND_TO_EMAIL` | Inbox that receives portfolio messages |

When `RESEND_API_KEY` is not configured, the contact endpoint responds in demo mode without sending email.

## Deployment

The portfolio is deployed at **[portfolio-siddharth04.vercel.app](https://portfolio-siddharth04.vercel.app)** and is ready for Vercel deployment.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables in the Vercel project settings.
4. Deploy the production branch.

For another Node-compatible host, build and start the application with:

```bash
npm run build
npm start
```

## Updating Portfolio Content

Most editable content is centralized in `data/portfolio.ts`:

- Hero roles, focus areas, and statistics
- Skills and categories
- Project descriptions, links, architecture, stacks, challenges, and impact
- Certifications and experience entries
- Social links and About-section copy

Shared visual styling lives in `app/globals.css`. Page layout and section composition are maintained in `components/Portfolio.tsx`, `components/About.tsx`, and `components/Skills.tsx`.

## Contact

- LinkedIn: [linkedin.com/in/siddharthkumaryo](https://linkedin.com/in/siddharthkumaryo)
- GitHub: [github.com/SID-CSE](https://github.com/SID-CSE)
- Email: siddharthkumaryo@gmail.com
