# Tahreem Fatima — Portfolio

Premium portfolio built with React + Vite, Framer Motion, GSAP, Lenis, and Tailwind CSS.

---

## Quick Start

### 1. Install

```bash
cd tahreem-portfolio
npm install
```

### 2. Dev Server

```bash
npm run dev
# Open http://localhost:5173
```

---

## EmailJS Setup (Contact Form)

1. Sign up at https://www.emailjs.com
2. Create an Email Service + Template
   - Template variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
3. Open src/sections/Contact.jsx and replace:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
```

---

## Folder Structure

```
src/
  components/
    ui/          Button.jsx · GlassCard.jsx · SectionHeader.jsx
    layout/      Navbar.jsx · Footer.jsx
  sections/      Hero · About · Skills · Projects · Experience
                 Education · Certifications · Showcase · Resume · Contact
  hooks/         useLenis · useReveal · useScrollProgress
  constants/     data.js  ← edit ALL content here
```

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub → import at vercel.com → Deploy (auto-detects Vite).

---

## Resume PDF

Place your PDF in public/ as Tahreem_Fatima_Resume.pdf.
The download button already links to /Tahreem_Fatima_Resume.pdf.

---

Built with love by Tahreem Fatima · Lahore, Pakistan
