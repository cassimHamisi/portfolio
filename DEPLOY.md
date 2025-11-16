## Deployment notes — Vercel

This project is ready to deploy to Vercel. Below are the quick steps I used and the variables you must set in the Vercel dashboard.

1. Push your repo to GitHub (already done).

2. Connect the repository to Vercel (https://vercel.com/new) and import the project.

3. Set environment variables in the Project → Settings → Environment Variables:

   - SMTP_HOST
   - SMTP_PORT
   - SMTP_SECURE
   - SMTP_USER
   - SMTP_PASS
   - SMTP_FROM

4. Build & Deploy: Vercel will run `pnpm install` (or `npm install`) and `next build`.

5. After a successful deployment, update this file with the production URL (replace the placeholder):

   Production URL: https://your-project.vercel.app

## Dev-only test email

I added a development-only API route at `/api/test-email` and a debug button component `components/debug-send-email.tsx` which is rendered in the site layout only when `NODE_ENV=development` (i.e., on your local machine).

How to use locally:

```powershell
copy .env.example .env.local
notepad .env.local
pnpm dev
# open http://localhost:3000 and click the "Send dev test email" floating button
```

The API will create an Ethereal test account and return a preview URL. That URL opens a web preview of the test message.

## Security

Do NOT commit `.env.local` or any file that contains secrets. Use Vercel's environment variable settings to store production secrets.
