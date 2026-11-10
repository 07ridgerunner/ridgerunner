# 🏔️ Honor Tour & Travels — Kashmir Landing Page

High-converting, mobile-first Next.js 14 landing page built for Google Ads traffic.  
**Goal:** Maximum leads via WhatsApp + Calls.

---

## 📁 Project Structure

```
honor-tour/
├── jsconfig.json               ← Path alias (@/ → src/)
├── next.config.js              ← Image domains (Unsplash)
├── tailwind.config.js          ← Custom colors, fonts, animations
├── postcss.config.js
├── .eslintrc.json
├── .env.example                ← Copy to .env.local and fill in
├── public/
│   ├── robots.txt
│   └── sitemap.xml             ← Update with your real domain
└── src/
    ├── app/
    │   ├── layout.jsx          ← Fonts, SEO metadata, Schema.org, Analytics
    │   ├── globals.css         ← All custom CSS, animations, mobile bar
    │   └── page.jsx            ← Page composition (section order)
    └── components/
        ├── Analytics.jsx       ← GA4 + Google Ads tracking
        ├── Navbar.jsx          ← Transparent → blur-scroll, rating badge
        ├── Hero.jsx            ← Full-screen hero, trust ticker, dual CTAs
        ├── StatsStrip.jsx      ← Animated count-up stats (700+, 4.8★, 10yrs)
        ├── WhyChooseUs.jsx     ← 6 trust reason cards
        ├── Packages.jsx        ← 4 package cards with WhatsApp deep-link CTAs
        ├── Destinations.jsx    ← Srinagar, Gulmarg, Pahalgam, Sonamarg
        ├── Reviews.jsx         ← 6 customer reviews with 4.8★ badge
        ├── FAQ.jsx             ← 7 FAQs with accordion + FAQ schema markup
        ├── LeadForm.jsx        ← 6-field form → opens WhatsApp with pre-fill
        ├── Urgency.jsx         ← Live countdown timer + urgency section
        ├── StickyButtons.jsx   ← Pulsing WhatsApp FAB + mobile bottom bar
        └── Footer.jsx          ← 3-col footer with SEO keyword density
```

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your real WhatsApp number, phone, GA ID, etc.

# 3. Run in development
npm run dev
# → http://localhost:3000

# 4. Build for production
npm run build

# 5. Start production server
npm start
```

---

## ⚙️ Before Going Live — Required Changes

### 1. Replace Phone Numbers
Search for `919999999999` across all components and replace with your real WhatsApp number (with country code, no +):

Files to update:
- `src/components/Hero.jsx`
- `src/components/Navbar.jsx`
- `src/components/Packages.jsx`
- `src/components/Reviews.jsx`
- `src/components/FAQ.jsx`
- `src/components/LeadForm.jsx`
- `src/components/Urgency.jsx`
- `src/components/StickyButtons.jsx`
- `src/components/Footer.jsx`

### 2. Update Analytics IDs
In `src/components/Analytics.jsx`:
```js
const GA_ID = 'G-YOUR_REAL_GA4_ID';
const GADS_ID = 'AW-YOUR_REAL_CONVERSION_ID';
```
Also update the conversion label on this line:
```js
send_to: `${GADS_ID}/YOUR_CONVERSION_LABEL`,
```

### 3. Update Domain in Metadata
In `src/app/layout.jsx` and `public/sitemap.xml`:
- Replace `https://www.honortourtravels.com` with your actual domain.

### 4. Update Business Address
In `src/app/layout.jsx` (Schema.org JSON-LD):
- Update `streetAddress`, `postalCode`, `telephone`, `email`.

### 5. Replace Package Prices (Optional)
In `src/components/Packages.jsx` — update `price` and `priceNote` for each package.

---

## 🌐 Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables on Vercel dashboard:
# NEXT_PUBLIC_WHATSAPP_NUMBER=91XXXXXXXXXX
# NEXT_PUBLIC_PHONE_NUMBER=+91XXXXXXXXXX
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
# NEXT_PUBLIC_GADS_ID=AW-XXXXXXXXX
```

Vercel auto-detects Next.js. Zero config needed.  
Your site will be live in ~2 minutes with a free SSL certificate.

---

## 📱 Conversion Features

| Feature | Implementation |
|---|---|
| WhatsApp FAB | Pulsing green button, always visible, bottom-right |
| Mobile Bottom Bar | Fixed Call + WhatsApp bar on mobile (hidden desktop) |
| Lead Form | Opens WhatsApp with all 6 fields pre-filled in message |
| Countdown Timer | Live urgency timer, auto-resets (client-side) |
| Trust Ticker | Auto-scrolling trust bar below hero |
| Count-up Stats | Animated 700+, 4.8★, 10yrs on scroll into view |
| Reveal Animations | Sections fade-up as user scrolls |
| FAQ Schema | JSON-LD FAQ markup for Google rich results |
| LocalBusiness Schema | Full Schema.org TravelAgency markup |
| GA4 + Ads Tracking | `fireConversion()` helper for CTA tracking |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Display Font | Cormorant Garamond (serif — premium feel) |
| Body Font | DM Sans (clean, modern, highly legible) |
| Primary Blue | `#0c82e7` (kashmir-500) |
| Deep Navy | `#07234a` (kashmir-950) |
| Gold Accent | `#f5c842` |
| WhatsApp Green | `#25d366` |
| CTA Orange | `#ff6b2b` |

---

## 🔍 SEO Keywords Used

- Kashmir tour packages
- Kashmir honeymoon package  
- Kashmir travel agency
- Kashmir trip cost
- Srinagar Gulmarg Pahalgam tour
- Kashmir package from Delhi

---

## 📊 Performance Notes

- **First Load JS:** ~105 kB (excellent for Next.js)
- **Static Generation:** All pages pre-rendered at build time (○)
- **Images:** Next.js `<Image />` with `fill`, `priority`, `sizes` for LCP
- **Fonts:** `display=swap` prevents layout shift
- **Mobile:** Tailwind mobile-first breakpoints throughout

---

## 📞 Support

Built for **Honor Tour & Travels**, Srinagar, Kashmir.  
Designed for Google Ads traffic from Delhi, Noida, Gurgaon, Faridabad.
