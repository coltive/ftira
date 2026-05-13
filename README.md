# Ftira フティーラ Japan

Official website for Ftira Japan — Malta's oldest bread, now in Osaka.

## About

Ftira (フティーラ) is a traditional Maltese sourdough bread introduced to Japan at the 2025 Osaka World Expo (大阪万博2025). This site promotes Ftira's permanent presence in Japan and invites expansion partners.

## Structure

```
ftira-japan/
├── index.html        # Complete single-page website (self-contained)
└── README.md         # This file
```

## Deployment

This is a **single self-contained HTML file** — all images, fonts (via Google Fonts CDN), and JavaScript are embedded or loaded inline. No build step required.

### Option 1 — GitHub Pages (recommended)

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/ftira-japan`

### Option 2 — Netlify Drop

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `index.html` file into the browser
3. Live instantly — no account required for temporary hosting

### Option 3 — Any static host

Upload `index.html` to any static hosting provider (Vercel, Cloudflare Pages, Render, etc.)

## Customisation

Before publishing, update the following in `index.html`:

| Item | Search for | Replace with |
|------|-----------|--------------|
| Contact email | `hello@ftira.jp` | Your actual email address |
| Instagram link | `@ftira.japan` | Your confirmed Instagram handle |
| Google Maps | Already linked to Orange Fields, Tenjinbashi | Update if address changes |

## Tech stack

- Plain HTML5 / CSS3 / Vanilla JavaScript
- No frameworks, no build tools, no dependencies
- Fonts: Noto Serif JP, Noto Sans JP, Cormorant Garamond (Google Fonts)
- All food photography embedded as base64

## Brand

- **Colour palette:** Cream `#FAF8F4` · Gold `#9A7B3C` · Terracotta `#B85C2C` · Deep `#1A1410`
- **Typography:** Noto Serif JP (JP body) · Cormorant Garamond (display) · Noto Sans JP (UI)
- **Language:** Japanese primary · English secondary throughout

## Sections

1. Hero — full-viewport food photography with hero text
2. Story — brand origin and cultural narrative  
3. Photo gallery — 5-photo carousel with touch swipe
4. Locations — Orange Fields (permanent) · Abeno Harukas (event) · Coming Soon
5. Menu — Tuna Ftira · Bacon & Egg Ftira
6. Malta Pavilion — Expo 2025 feature
7. News — 6 editorial articles
8. Expand — franchise/partnership section
9. Contact form — mailto form for partner enquiries

## Contact

Instagram: [@ftira.japan](https://www.instagram.com/ftira.japan)  
Partner enquiries: Use the contact form on the website

---

© 2025 Ftira フティーラ Japan · Malta × Osaka
