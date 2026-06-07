# Deploy checklist

Follow these steps to build and deploy the portfolio to Vercel (production):

1. Add environment variables in the Vercel dashboard for your project (Project Settings → Environment Variables):
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` = your Cloudinary cloud name (client-visible)
   - `CLOUDINARY_CLOUD_NAME` = your Cloudinary cloud name (server)
   - `CLOUDINARY_API_KEY` = Cloudinary API key
   - `CLOUDINARY_API_SECRET` = Cloudinary API secret
   - `RESEND_API_KEY` = Resend API key (for contact emails)
   - `RESEND_FROM_EMAIL` = Verified sender email for Resend
   - `RESEND_TO_EMAIL` = Your email that receives contact submissions

2. Locally, create `.env.local` from `.env.local.template` and fill real values. Do NOT commit `.env.local`.

3. Run a local production build to catch TypeScript and bundling errors:

```bash
npm run build
```

4. Test the built production output locally if needed:

```bash
npm start
# or use Vercel CLI for a preview
vercel --prod
```

5. Push to Git and deploy via Vercel (or connect the repo in Vercel and enable automatic deploys).

Notes:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` must be prefixed `NEXT_PUBLIC_` so the client-side code can access it. Missing this is a common cause for missing certificate images.
- The API routes for contact and Cloudinary upload/delete already exist and rely on the env vars above — do not modify them.
