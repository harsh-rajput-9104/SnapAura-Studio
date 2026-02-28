# SnapAura Studio — Photography Portfolio Website

A production-ready, multi-page photography portfolio website built with Next.js 14 (App Router). Designed for a premium photography studio offering wedding, pre-wedding, portrait, event, and aerial shoot services.

---

## Overview

SnapAura Studio is a client-facing portfolio and enquiry website for a boutique Indian photography practice. The site presents a cinematic editorial aesthetic, showcases service offerings with pricing, displays a filterable portfolio gallery, and allows prospective clients to submit booking enquiries directly via a contact form integrated with EmailJS.

The site is built for direct deployment to Vercel with no backend infrastructure required.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 14.2.18 | Framework — App Router, SSR, image optimization |
| React | 18.3.x | UI rendering |
| @emailjs/browser | latest | Contact form email delivery |
| CSS (custom properties) | — | Design system and responsive layout |
| Tailwind CSS | 3.x | Utility base reset (minimal usage) |
| Google Fonts | — | Cormorant Garamond, Raleway |
| Vercel | — | Deployment target |

---

## Pages

| Route | File | Rendering |
|---|---|---|
| `/` | `app/page.js` | Server Component |
| `/about` | `app/about/page.js` | Server Component |
| `/services` | `app/services/page.js` | Server Component |
| `/portfolio` | `app/portfolio/page.js` | Server Component |
| `/contact` | `app/contact/page.js` | Server Component |

All pages are Server Components. Client-side interactivity is isolated into dedicated Client Components using the `"use client"` directive.

---

## Features

- **Multi-page structure** — Home, About, Services, Portfolio, and Contact pages, each with dedicated metadata and SEO configuration
- **8 premium services** — Wedding Photography, Pre-Wedding Shoot, Event Coverage, Portrait Sessions, Drone Aerial Shoot, Engagement Ceremony, Corporate Photography, and Maternity & Lifestyle
- **Filterable portfolio grid** — Masonry layout with category filter (Weddings, Pre-Wedding, Portraits, Events, Studio)
- **EmailJS contact form** — Validated multi-field form with fields mapped to EmailJS template variables (`name`, `email`, `phone`, `event_type`, `event_date`, `message`)
- **WhatsApp direct contact** — Floating button and contextual CTA links with pre-filled message text
- **Responsive layout** — Mobile-first CSS with breakpoints at 480px, 560px, 640px, 768px, 900px, and 1024px
- **Cinematic animations** — Intersection Observer-driven section reveals, hero fade-up sequences, slow-zoom background image, and CSS keyframe animations
- **Premium design system** — CSS custom properties for colour tokens, typography scale (`clamp()`-based headings), and reusable component classes
- **SEO metadata** — Per-page `metadata` exports, Open Graph tags, canonical base URL, and keyword configuration via `layout.js`
- **Client/Server component separation** — No hydration mismatches; interactive logic confined to Client Components
- **next/image** — All images use `next/image` with `fill`, `sizes`, `quality`, and `priority` props configured appropriately
- **Vercel-ready** — Zero additional configuration required for Vercel deployment

---

## Project Structure

```
snapaura-studio/
├── app/
│   ├── layout.js              # Root layout — Navbar, Footer, WhatsAppButton, metadata base
│   ├── page.js                # Home page — Hero, About preview, Services preview, Portfolio preview, Testimonials, CTA
│   ├── about/
│   │   └── page.js            # About page — Philosophy, Journey, Process, Equipment
│   ├── services/
│   │   └── page.js            # Services page — 8 service cards, Custom packages section
│   ├── portfolio/
│   │   └── page.js            # Portfolio page — Full filterable masonry grid
│   └── contact/
│       └── page.js            # Contact page — Contact info sidebar, EmailJS form
│
├── components/
│   ├── Navbar.js              # Client Component — scroll-aware nav, mobile hamburger menu
│   ├── Footer.js              # Client Component — brand, navigation links, social links
│   ├── Hero.js                # Client Component — full-viewport hero with animated content
│   ├── PortfolioGrid.js       # Client Component — filterable masonry portfolio grid
│   ├── ServiceCard.js         # Client Component — individual service card with hover effects
│   ├── ServiceGrid.js         # Client Component — services preview grid (home page)
│   ├── ContactForm.js         # Client Component — EmailJS form with validation
│   ├── ContactInfo.js         # Client Component — contact info links with hover handlers
│   ├── CustomPackageList.js   # Client Component — custom package feature list with hover
│   ├── MovingBackground.js    # Animated radial gradient background wrapper
│   ├── RevealObserver.js      # Client Component — Intersection Observer for .reveal elements
│   └── WhatsAppButton.js      # Client Component — fixed floating WhatsApp CTA button
│
├── styles/
│   └── globals.css            # Full design system: CSS variables, resets, animations,
│                              # component classes, and all responsive media queries
│
├── public/                    # Static assets
├── .env.local                 # Environment variables (not committed)
├── next.config.js             # Image remote pattern allowlist (Unsplash)
├── jsconfig.json              # Path alias — @/ maps to project root
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

---

## Installation

**Prerequisites:** Node.js 18 or later, npm.

```bash
# Clone the repository
git clone https://github.com/your-username/snapaura-studio.git
cd snapaura-studio

# Install dependencies
npm install

# Create environment variables file
cp .env.local.example .env.local
# (or create .env.local manually — see Environment Variables section)

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`.

---

## Environment Variables

Create a `.env.local` file in the root of the project with the following variables:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are obtained from your [EmailJS](https://www.emailjs.com/) account dashboard (see EmailJS Configuration below).

> These variables are prefixed with `NEXT_PUBLIC_` and are therefore exposed to the browser. Do not use them to store sensitive server-side secrets.

After creating or modifying `.env.local`, restart the development server for the changes to take effect.

---

## EmailJS Configuration

### 1. Create an EmailJS account

Sign up at [emailjs.com](https://www.emailjs.com/) and create a free account.

### 2. Add an email service

In the EmailJS dashboard, go to **Email Services** and connect your email provider (Gmail, Outlook, or custom SMTP). Note the **Service ID**.

### 3. Create an email template

Go to **Email Templates** and create a new template. The template must include the following variables exactly as written — any mismatch will result in blank fields in received emails:

```
{{name}}
{{email}}
{{phone}}
{{event_type}}
{{event_date}}
{{message}}
```

Note the **Template ID**.

### 4. Obtain your Public Key

Go to **Account > API Keys** and copy your **Public Key**.

### 5. Update `.env.local`

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
```

Restart the dev server after updating the file.

---

## Deployment — Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/snapaura-studio.git
git push -u origin main
```

### 2. Import into Vercel

- Go to [vercel.com](https://vercel.com) and sign in
- Click **Add New Project**
- Import your GitHub repository
- Vercel will automatically detect Next.js and configure the build settings

### 3. Add environment variables

In the Vercel project dashboard, go to **Settings > Environment Variables** and add:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Set these for **Production**, **Preview**, and **Development** environments as required.

### 4. Deploy

Click **Deploy**. Vercel will build and deploy the project. Subsequent pushes to the `main` branch will trigger automatic redeployments.

**Build command:** `next build`  
**Output directory:** `.next`  
**Node.js version:** 18.x (recommended)

---

## Production Considerations

**Responsive design**  
The site is fully responsive from 320px to large desktop viewports. All grid layouts use CSS classes with explicit breakpoints. No inline grid styles override the responsive rules.

**No hydration mismatches**  
All components using `useState`, `useEffect`, or browser event handlers are marked with `"use client"`. Server Components contain no client-side logic. There are no inline `<style>` blocks or template-literal CSS injections.

**SEO**  
Each page exports a `metadata` object with `title`, `description`, and `openGraph` fields. The root layout defines a `metadataBase` URL and a title template.

**Image handling**  
All images use `next/image` with appropriate `sizes` attributes for responsive loading. External images from Unsplash are allowlisted in `next.config.js`.

**Environment variable security**  
EmailJS credentials use the `NEXT_PUBLIC_` prefix, making them browser-accessible, which is required for client-side email dispatch. These credentials allow only email sending — they do not grant access to your email account.

**Build validation**  
Run `npm run build` locally to validate the production build before deploying. Check for any type errors, missing metadata, or image configuration issues.

---

## Available Scripts

```bash
npm run dev       # Start development server on http://localhost:3000
npm run build     # Build for production
npm run start     # Start production server (after build)
npm run lint      # Run ESLint
```

---

## Potential Future Improvements

- **CMS integration** — Connect a headless CMS (Sanity, Contentful) to allow the studio owner to manage portfolio images and service content without code changes
- **Booking system** — Integrate a calendar-based availability and booking flow with payment collection
- **Admin dashboard** — Internal portal to view and manage enquiry form submissions
- **Analytics** — Add privacy-respecting page analytics (Vercel Analytics or Plausible)
- **Image optimisation** — Migrate portfolio images from Unsplash to a managed CDN with project-specific assets
- **Portfolio lightbox** — Full-screen image viewer for portfolio grid items
- **Multi-language support** — Internationalisation for regional language variants

---

## License

This project is proprietary. All rights reserved by SnapAura Studio.
