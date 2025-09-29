# Kwaret TN Landing Page

A production-ready, responsive landing page for **Kwaret TN** - a premium digital services provider in Tunisia. Built with Next.js 14, TypeScript, Tailwind CSS, and modern web technologies.

## 🚀 Features

- **Modern Design**: High-contrast yellow/black theme matching Kwaret brand
- **Responsive**: Mobile-first design with sticky Messenger CTA
- **Performance**: Optimized for Core Web Vitals and Lighthouse scores
- **SEO Ready**: Complete meta tags, sitemap, robots.txt, and OpenGraph images
- **PWA Support**: Installable web app with offline capabilities
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Animations**: Smooth Framer Motion animations throughout
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui + custom components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Geist (headings) + Inter (body)
- **PWA**: next-pwa
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
├── app/
│   ├── (sections)/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── SocialBar.tsx
│   │   ├── Pricing.tsx
│   │   ├── Gallery.tsx
│   │   ├── Features.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── manifest.webmanifest # PWA manifest
│   ├── opengraph-image.tsx  # Dynamic OG image
│   ├── robots.txt           # SEO robots
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── accordion.tsx
│   ├── Logo.tsx
│   ├── Container.tsx
│   ├── BrandBadge.tsx
│   └── StickyCTA.tsx
├── lib/
│   ├── socials.ts           # Social media links
│   ├── pricing.ts           # Pricing data
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
    ├── kwaret-logo.png      # Main logo
    ├── foued.jpg            # Founder portrait
    └── icon.png             # PWA icon
```

## 🎨 Brand Colors

The design uses a custom color palette defined in `tailwind.config.ts`:

```typescript
colors: {
  k: {
    yellow: '#FFD23F',       // Primary brand color
    yellowSoft: '#FFF3C4',   // Light backgrounds
    black: '#0B0B0B',        // Primary surface
    ink: '#111111',          // Card backgrounds
    gray: '#2C2C2C',         // Borders
    white: '#FFFFFF',        // Text
    teal: '#00BFA6',         // Accent color
    red: '#FF3B30',          // Sale indicators
  }
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kwaret-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Add your assets**
   
   Replace the placeholder files in `/public` with your actual assets:
   - `kwaret-logo.png` - The round yellow "K" logo
   - `foued.jpg` - Portrait of Foued el Beji
   - Optional: `ss-spotify.jpg`, `ss-chatgpt.jpg`, etc.

4. **Update social links**
   
   Edit `lib/socials.ts` with your actual social media URLs:
   ```typescript
   export const socials = {
     messenger: 'https://m.me/kwaret.tn',
     facebook: 'https://www.facebook.com/kwaret.tn',
     instagram: 'https://www.instagram.com/kwaret.tn',
     discord: 'https://discord.com/invite/4mNjq7We5w'
   }
   ```

5. **Update pricing**
   
   Edit `lib/pricing.ts` to match your current offerings and prices.

6. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Mobile Features

- **Sticky Messenger CTA**: Appears after scrolling 50% of the page
- **Horizontal scroll**: Social buttons scroll horizontally on mobile
- **Touch-friendly**: All buttons and interactions optimized for touch
- **PWA ready**: Can be installed as a native app

## 🔧 Customization

### Changing Colors

Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  k: {
    yellow: '#YOUR_COLOR',    // Change primary color
    // ... other colors
  }
}
```

### Adding New Services

Add new pricing plans in `lib/pricing.ts`:

```typescript
{
  tag: 'New Service',
  product: 'Service Name',
  bullets: ['Feature 1', 'Feature 2', 'Feature 3'],
  tiers: [
    { label: '1 Month', price: 'XX.9 TND' }
  ]
}
```

### Modifying Content

- **Hero section**: Edit `app/(sections)/Hero.tsx`
- **FAQ**: Update questions in `app/(sections)/FAQ.tsx`
- **Features**: Modify feature list in `app/(sections)/Features.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** (if any)
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **Railway**: Connect your GitHub repository
- **DigitalOcean App Platform**: Deploy from GitHub

### Build Commands

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📊 Performance

The site is optimized for:

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Excellent LCP, FID, and CLS
- **SEO**: Complete meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔍 SEO Features

- **Meta tags**: Complete OpenGraph and Twitter cards
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Properly configured
- **Structured data**: Ready for rich snippets
- **Canonical URLs**: Proper canonicalization

## 📱 PWA Features

- **Installable**: Can be added to home screen
- **Offline support**: Basic offline functionality
- **App-like experience**: Standalone display mode
- **Fast loading**: Optimized for mobile networks

## 🛡️ Security

- **HTTPS only**: Secure connections required
- **Content Security Policy**: Configured for security
- **No sensitive data**: All data is public-facing
- **Regular updates**: Dependencies kept up to date

## 📞 Support

For questions or support:

- **Messenger**: [Contact Kwaret TN](https://m.me/kwaret.tn)
- **Email**: contact@kwaret.tn
- **Social Media**: Follow @kwaret.tn

## 📄 License

This project is proprietary to Kwaret TN. All rights reserved.

---

**Built with ❤️ for Kwaret TN by Foued el Beji (JelyfishTN)**
