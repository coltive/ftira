# Ftira Japan — Website

Single-page bilingual site for Ftira フティーラ Japan.

## Files

- `index.html` — entry point (open in browser or deploy)
- `site-shared.css` — shared brand styles
- `dir-a.css` — editorial direction styles
- `site-data.jsx` — all bilingual content (edit here to change copy)
- `site-components.jsx` — shared components (nav, logo, etc.)
- `dir-a.jsx` — page layout

## Deploy on GitHub Pages

1. Upload all files to the root of your repository
2. Go to **Settings → Pages**
3. Source: **Deploy from a branch** → Branch: **main** → Folder: **/ (root)**
4. Save. Wait 1–2 minutes for the build.

The `.nojekyll` file prevents GitHub from running Jekyll, which is what you want for a JSX-based site.

## Local preview

You cannot just double-click `index.html` — browsers block JSX file loading over `file://`.
Run a local server first:

```bash
# Python (already installed on Mac/Linux)
python3 -m http.server 8000

# Or Node
npx serve .
```

Then open http://localhost:8000

## Editing settings

Open `index.html` and find the `SITE_SETTINGS` object near the bottom. Change:
- `langPrimary`: `"ja"` (Japanese first) or `"en"` (English first)
- `accent`: `"terra"` (Malta Terra orange) or `"gold"` (Heritage Gold)
- `density`: `"comfortable"` or `"tight"`

## Editing content

All copy lives in `site-data.jsx`. Bilingual entries follow this pattern:

```js
{ ja: '日本語のテキスト', en: 'English text' }
```
