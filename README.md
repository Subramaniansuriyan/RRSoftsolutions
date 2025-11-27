# RR soft solutions Website

A professional, SEO-optimized static website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Built with Next.js 14 App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first design that looks great on all devices
- **SEO Optimized**: Comprehensive metadata, sitemap, and robots.txt for better search engine visibility
- **Fast Loading**: Static site generation for optimal performance
- **Professional UI**: Clean, modern design with blue/indigo theme
- **Client-side Form Validation**: Contact form with real-time validation

## Pages

- **Home** (`/`) - Hero section, core offerings, and call-to-actions
- **About** (`/about`) - Company information, vision, mission, and industries served
- **Services** (`/services`) - Detailed service offerings with benefits
- **Industries** (`/industries`) - Industry-specific solutions
- **Contact** (`/contact`) - Contact form and company contact information
- **Careers** (`/careers`) - Career opportunities and company culture

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd /home/subu/Documents/rrsoftsolutions-website
```

2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Project Structure

```
rrsoftsolutions-website/
├── app/
│   ├── layout.tsx           # Root layout with metadata and navigation
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles and theme
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── services/
│   │   └── page.tsx         # Services page
│   ├── industries/
│   │   └── page.tsx         # Industries page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── careers/
│   │   └── page.tsx         # Careers page
│   └── sitemap.ts           # Dynamic sitemap generation
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section component
│   ├── ContactForm.tsx      # Contact form with validation
│   ├── ServiceCard.tsx      # Service display card
│   └── IndustryCard.tsx     # Industry display card
├── public/
│   └── robots.txt           # Search engine crawling rules
└── package.json
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Inter Font** - Professional Google Font

## Customization

### Colors

The website uses a blue/indigo color scheme defined in `app/globals.css`. To change colors, modify the CSS variables:

```css
--color-primary: #4f46e5;
--color-primary-dark: #4338ca;
--color-secondary: #3b82f6;
--color-accent: #6366f1;
```

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Content

Edit page content directly in the respective page files under the `app/` directory.

## Contact Form Integration

The contact form currently has client-side validation only. To integrate with a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the `handleSubmit` function in `components/ContactForm.tsx`
3. Add your email service (SendGrid, Resend, etc.) or database integration

Example API route structure:

```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json();
  // Process form data
  // Send email or save to database
  return Response.json({ success: true });
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Node.js

## SEO

The website includes:
- Comprehensive meta tags on all pages
- Open Graph tags for social sharing
- Twitter Card metadata
- Dynamic sitemap (`/sitemap.xml`)
- Robots.txt for search engine crawling
- Semantic HTML structure

## Performance

- Static Site Generation (SSG) for all pages
- Optimized images (when added, use Next.js Image component)
- Minimal JavaScript bundle
- Fast Time to First Byte (TTFB)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 RR soft solutions. All rights reserved.

## Support

For questions or support, contact: rahul@rrsoftsolutions.com
