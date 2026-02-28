# 📸 SnapAura Studio — Premium Photography Website  
## Project Requirement Documentation

---

## 1. Project Overview

This project is a premium, cinematic photography business website built using Next.js (App Router).  

It is a frontend-focused practice project designed to:

- Demonstrate modern Next.js structure
- Showcase advanced aesthetic design decisions
- Implement premium UI/UX principles
- Integrate WhatsApp direct API
- Integrate EmailJS contact functionality
- Deploy successfully on Vercel

This is not a template-style website.  
The final result must feel editorial, cinematic, immersive, and intentional.

---

## 2. Tech Stack

### Core Framework
- Next.js (App Router)
- JavaScript (no TypeScript for this version)

### Styling
- Tailwind CSS
- Custom CSS variables for theme consistency
- Custom animations (CSS-first approach)

### Media Optimization
- next/image for image optimization

### Integrations
- WhatsApp Click-to-Chat API
- EmailJS for contact form submission

### Deployment
- Vercel

---

## 3. Folder Structure

```
app/
 ├── layout.js
 ├── page.js (Home)
 ├── about/
 │    └── page.js
 ├── portfolio/
 │    └── page.js
 ├── services/
 │    └── page.js
 ├── contact/
 │    └── page.js

components/
 ├── Navbar.js
 ├── Footer.js
 ├── Hero.js
 ├── MovingBackground.js
 ├── ServiceCard.js
 ├── PortfolioGrid.js
 ├── WhatsAppButton.js
 ├── ContactForm.js

public/
 ├── images/
 │    ├── hero/
 │    ├── weddings/
 │    ├── portraits/
 │    ├── events/
 │    └── studio/

styles/
 ├── globals.css
```

---

## 4. Aesthetic & Design System

### Core Design Identity
- Cinematic
- Editorial
- Moody
- Elegant
- Premium
- Minimal but expressive

Avoid startup-style UI patterns.

---

### Color System (CSS Variables)

```
--bg-primary: #0b0b0f;
--bg-secondary: #111117;
--text-primary: #f4f1ea;
--text-muted: #b9b4aa;
--accent: #b87333;         /* Burnished Copper */
--accent-soft: #7a4b2c;
```

---

### Typography

Heading Font:
- Cormorant Garamond (serif, dramatic, editorial)

Body Font:
- A refined minimal sans or light serif
- Avoid Inter, Roboto, Arial, Poppins

Typography Rules:
- Large hero headings
- Generous spacing
- Minimal bold usage
- Elegant letter spacing

---

## 5. Background & Depth

No flat backgrounds.

Use layered effects:
- Radial gradient glow
- Subtle vignette
- Soft texture overlay
- Very light grain effect

Create atmosphere and depth.

---

## 6. Motion & Micro-Interactions

### Page Load Animation
- Hero fades in
- Heading slides upward
- Buttons fade in with delay
- Portfolio grid reveals with staggered animation

Use:
- CSS animations
- animation-delay
- transform + opacity
- smooth cubic-bezier easing

### Hover Effects
- Slight image zoom (scale 1.03)
- Copper underline reveal
- Soft glow on primary CTA

No bouncy animations.

---

## 7. Website Pages & Sections

---

# 🏠 Home Page

### 1. Hero Section
- Full-screen background image
- Studio name
- Tagline: “Capturing Stories in Light & Shadow”
- Two CTA buttons:
  - Book via WhatsApp
  - Request a Quote

### 2. About Preview Section
- Short studio introduction
- Elegant editorial layout (image + text offset)

### 3. Services Preview
- 3–4 premium service cards
- Minimal layout
- Copper accent hover state

### 4. Featured Portfolio
- Masonry-style layout
- 6–8 curated images
- Hover overlay with category name

### 5. Testimonial Section
- Minimal typography-focused layout
- Soft fade-in animation

### 6. Final CTA Banner
- Emotional closing message
- Strong accent CTA

---

# 👤 About Page

Sections:
- Studio Philosophy
- Photographer Journey
- Creative Process
- Equipment & Approach
- Behind-the-scenes imagery

Layout:
- Asymmetrical image blocks
- Editorial spacing
- Large typography blocks

---

# 🖼 Portfolio Page

Categories:
- Weddings
- Pre-Wedding
- Portraits
- Events
- Studio

Layout:
- Masonry or editorial staggered grid
- Large, immersive visuals
- Minimal overlay text

Optional:
- Category filter (client-side)

---

# 💼 Services Page

### Premium Photography Services

1. Wedding Photography
   - Full-day coverage
   - 2 photographers
   - Cinematic editing
   - Custom album

2. Pre-Wedding Shoots
   - Outdoor locations
   - Creative concept planning
   - 25–40 edited photos

3. Event Coverage
   - Corporate events
   - Cultural programs
   - Birthday & private gatherings

4. Portrait Sessions
   - Lifestyle portraits
   - Professional headshots
   - Studio portraits

Each service:
- Brief description
- Starting price (optional)
- WhatsApp inquiry button

---

# 📩 Contact Page

### Contact Section
- Minimal editorial form
- Underline-style inputs
- Elegant spacing

Fields:
- Name
- Email
- Phone
- Event Type
- Event Date
- Message

### Functionality
- EmailJS integration
- Success message
- Error handling
- Loading state

---

# 📲 WhatsApp Integration

Use:
```
https://wa.me/<number>?text=<encoded_message>
```

Features:
- Floating WhatsApp button
- CTA button integration
- Pre-filled inquiry message

---

## 8. High-Level Moving Aesthetic Components

### MovingBackground Component
- Subtle animated radial gradient
- Slow parallax shift
- Very light opacity motion

### Image Hover Motion
- Slow zoom-in
- Dark overlay fade

### Section Reveal
- Fade + slight translateY
- Staggered animation timing

---

## 9. Performance Requirements

- Optimized images using next/image
- Lazy loading enabled
- Clean semantic HTML
- Proper alt attributes
- SEO metadata per page

---

## 10. SEO Requirements

Each page must include:
- Unique title
- Meta description
- Open Graph tags
- Clean URL structure
- Proper heading hierarchy

---

## 11. Responsive Design

Must support:
- Mobile-first layout
- Tablet responsiveness
- Desktop widescreen layout

Navigation:
- Mobile hamburger menu
- Smooth open/close animation

---

## 12. Quality Standards

The final website must:
- Feel intentional, not templated
- Avoid generic Tailwind defaults
- Maintain consistent spacing
- Use elegant motion only
- Preserve visual hierarchy
- Maintain aesthetic coherence

---

## 13. Final Deliverables

- Fully responsive website
- Working WhatsApp integration
- Working EmailJS form
- Premium cinematic UI
- Clean GitHub repository
- Live Vercel deployment

---

## 14. Project Goal

This project serves as:
- A Next.js practice build
- A premium UI experiment
- A real-world photography business prototype
- A foundation for future production website

---

END OF DOCUMENT