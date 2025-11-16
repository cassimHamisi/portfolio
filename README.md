# Cassim Hamisi - Software Engineer Portfolio

A production-ready, modern portfolio website built with Next.js 16, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Responsive Design**: Mobile-first approach optimized for all screen sizes
- **Dark Mode**: Built-in theme switching with localStorage persistence
- **SEO Optimized**: Metadata, Open Graph tags, and structured data
- **Contact Form**: Server-side email integration with nodemailer
- **Project Showcase**: Dynamic project cards with modal details
- **Smooth Animations**: Subtle transitions and interactions
- **Accessible**: WCAG 2.1 compliant markup and ARIA labels
- **Performance**: Optimized images, code splitting, and fast load times

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Email**: Nodemailer with SMTP
- **Hosting**: Vercel (recommended)

## Installation

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn

### Steps

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Edit `.env.local` with your actual values:
   - **SMTP Configuration**: Set up using Gmail, SendGrid, Mailtrap, or any SMTP provider
   - For Gmail: Use [App Password](https://support.google.com/accounts/answer/185833) (not your regular password)

4. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`
   
   Open [http://localhost:3000](http://localhost:3000)

## Email Configuration

### Option 1: Gmail (Recommended for testing)

1. Enable 2-Factor Authentication on your Gmail account
2. Create an [App Password](https://support.google.com/accounts/answer/185833)
3. Add to `.env.local`:
   \`\`\`
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   SMTP_FROM=your-email@gmail.com
   \`\`\`

### Option 2: Mailtrap (Best for development)

1. Sign up at [Mailtrap.io](https://mailtrap.io)
2. Create a new inbox
3. Copy SMTP credentials from Integration tab
4. Add to `.env.local`:
   \`\`\`
   SMTP_HOST=live.smtp.mailtrap.io
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-mailtrap-username
   SMTP_PASS=your-mailtrap-password
   SMTP_FROM=noreply@yourdomain.com
   \`\`\`

### Option 3: SendGrid, AWS SES, etc.

Refer to your provider's SMTP documentation and update `.env.local` accordingly.

## Customization

### Update Project Data

Edit `data/projects.json` to add, remove, or modify projects:

\`\`\`json
{
  "id": "unique-id",
  "title": "Project Title",
  "shortDescription": "Brief description",
  "longDescription": "Detailed description",
  "tech": ["Tech1", "Tech2"],
  "github": "https://github.com/...",
  "liveDemo": "https://...",
  "images": ["/path/to/image.jpg"],
  "year": 2024,
  "tags": ["tag1", "tag2"]
}
\`\`\`

### Add Project Images

1. Upload images to `/public/images/projects/`
2. Reference in `data/projects.json`:
   \`\`\`json
   "images": ["/images/projects/project-screenshot.png"]
   \`\`\`

### Theme Colors

Edit `app/globals.css` to customize the color scheme. The design uses:
- **Primary**: `--color-accent` (#0d47a1)
- **Success**: `--color-success` (#4caf50)
- **Light**: `--color-background` (#ffffff)
- **Dark**: `--color-background-dark` (#0f172a)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard (Settings > Environment Variables)
4. Deploy automatically on push

\`\`\`bash
npm run build
npm run start
\`\`\`

### Other Platforms

The project is a standard Next.js app compatible with any Node.js hosting:
- **Netlify**: Add `next-on-netlify` adapter
- **AWS Amplify**: Connect GitHub repo
- **DigitalOcean**: Deploy using App Platform

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_HOST` | Yes | SMTP server hostname |
| `SMTP_PORT` | Yes | SMTP port (usually 587 or 465) |
| `SMTP_SECURE` | No | Use TLS (true/false) |
| `SMTP_USER` | Yes | SMTP username/email |
| `SMTP_PASS` | Yes | SMTP password/token |
| `SMTP_FROM` | No | From email address |
| `NEXT_PUBLIC_SITE_URL` | No | Site URL for links |

## Performance Optimization

- Images are optimized with `next/image`
- Non-critical images are lazy-loaded
- CSS is minified and autoprefixed
- JavaScript is code-split by route
- Font loading is optimized with `next/font`

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus-visible outlines
- Color contrast compliant
- Skip-to-content link available

## Testing

Test the contact form:

1. Run dev server: `npm run dev`
2. Navigate to Contact section
3. Fill out form and submit
4. Check Mailtrap inbox or email for test message

## SEO

The portfolio includes:
- Dynamic meta tags with project titles/descriptions
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- XML sitemap (auto-generated)
- Robots.txt configuration
- Optimized page titles and descriptions

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Email not sending
1. Check SMTP credentials in `.env.local`
2. Verify firewall/ISP allows SMTP connections
3. Check email provider's activity logs
4. Test with Mailtrap first for debugging

### Images not loading
1. Ensure images exist in `/public/images/`
2. Check image paths in `data/projects.json`
3. Verify image formats are supported (jpg, png, webp)

### Dark mode not persisting
1. Clear localStorage in DevTools
2. Check browser's privacy settings
3. Ensure localStorage is not disabled

## License

MIT - Feel free to use this template for your own portfolio.

## Support

For issues or questions, open a GitHub issue or contact cassimjumahamisi2@gmail.com

---

Built with ❤️ by Cassim Hamisi
