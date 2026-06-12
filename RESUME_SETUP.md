# Resume Setup Guide

## Current Implementation

The resume functionality has been updated to:
1. **Fetch from Cloudinary** instead of generating locally
2. **Provide two options** when clicked: Download or Share
3. **Display as a dropdown menu** on desktop and hero section buttons

## What You Need to Do

### Update the Resume URL in `components/Portfolio.tsx`

**Location:** Line 353

**Current URL:**
```typescript
const CLOUDINARY_RESUME_URL = "https://res.cloudinary.com/dn37tck9g/image/upload/v1781204850/portfolio/resume.pdf";
```

**Replace with your Cloudinary resume URL format:**
```
https://res.cloudinary.com/{CLOUD_NAME}/image/upload/{VERSION}/{FOLDER}/{FILE}
```

Example:
```typescript
const CLOUDINARY_RESUME_URL = "https://res.cloudinary.com/dn37tck9g/image/upload/v1234567890/portfolio/your-resume.pdf";
```

## Resume Features

### Desktop Navigation Bar
- Click **Resume** button
- Dropdown menu appears with:
  - **Download Resume** - Downloads the PDF file
  - **Share Resume** - Uses native share (mobile) or copies link (desktop)

### Hero Section
- Click **Resume** button
- Same dropdown menu appears with share/download options

### Mobile
- Share button uses native mobile share functionality
- Fallback to clipboard copy on unsupported browsers

## Cloudinary Cloud Name
- Already configured: `dn37tck9g`
- API credentials are in `.env.local`

## Notes
- Resume file should be a PDF for best compatibility
- The download filename is `Siddharth-Kumar-Resume.pdf`
- Web Share API used for native sharing on compatible browsers
