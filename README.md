# Cassim Hamisi - Software Engineer Portfolio

Welcome to my personal portfolio website. I'm a Software Engineer specializing in **real-time systems** and **mobile-first architecture**. This site showcases my projects, skills, and experience in building scalable backends and responsive applications.

🔗 **Live Site**: [cassimhamisi.dev](https://cassimhamisi.dev)  
📧 **Email**: cassimjumahamisi2@gmail.com  
💼 **LinkedIn**: [cassim-hamisi](https://www.linkedin.com/in/cassim-hamisi)  
🐙 **GitHub**: [@cassimHamisi](https://github.com/cassimHamisi)

## About This Project

This is a modern, production-ready portfolio website built with cutting-edge web technologies. It demonstrates my expertise in full-stack development, responsive design, and user experience.

### Key Features

✨ **Modern Design**: Clean, minimalist interface with smooth animations  
📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop  
🌙 **Dark Mode**: Built-in theme switching with localStorage persistence  
📧 **Contact Form**: Server-side email integration for inquiries  
♿ **Accessible**: WCAG 2.1 compliant with semantic HTML and ARIA labels  
⚡ **High Performance**: Optimized images, code splitting, and fast load times  
🔍 **SEO Ready**: Metadata, Open Graph tags, and structured data

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React, TypeScript
- **Styling**: Tailwind CSS v4, shadcn/ui components
- **Backend**: Node.js API routes, Nodemailer for email
- **Database**: JSON data structures
- **Hosting**: Vercel
- **Icons**: Lucide React

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cassimHamisi/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your SMTP credentials

# Run development server
pnpm dev
```

Visit `http://localhost:3000` to see your changes in real-time.

### Build & Deploy

```bash
# Build for production
pnpm build

# Start production server locally
pnpm start
```

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── api/               # Server-side API routes
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact form
│   ├── footer.tsx         # Footer with social links
│   ├── navigation.tsx     # Header navigation
│   ├── projects.tsx       # Projects showcase
│   └── skills.tsx         # Skills section
├── data/                  # Static data
│   └── projects.json      # Project information
├── lib/                   # Utilities
├── public/                # Static assets
│   └── images/           # Project images
├── styles/               # Global styles
└── types/                # TypeScript type definitions
```

## Environment Setup

Copy `.env.example` to `.env.local` and add your SMTP credentials:

```bash
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email
SMTP_PASS=your-password
SMTP_FROM=noreply@yourdomain.com
```

For testing, use [Mailtrap.io](https://mailtrap.io) (free SMTP service for development).

## Customization

### Update Projects

Edit [data/projects.json](data/projects.json) to add or modify projects.

### Update About Section

Edit [components/about.tsx](components/about.tsx) to personalize your bio.

### Change Theme Colors

Edit [app/globals.css](app/globals.css) for custom color scheme.

## Deployment

### Deploy to Vercel (One-click)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import this repository
4. Add environment variables in Project Settings
5. Deploy!

The site will auto-deploy on every push to main branch.

### Other Platforms

- **Netlify**: Connect GitHub repo, add `next-on-netlify`
- **AWS Amplify**: Connect and deploy
- **Self-hosted**: Run `pnpm build && pnpm start`

## Contributing

This is a personal portfolio. Feel free to fork and adapt for your own use!

## License

MIT License - feel free to use this as a template for your own portfolio.

---

**Made with ❤️ by Cassim Hamisi | Nairobi, Kenya**

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
