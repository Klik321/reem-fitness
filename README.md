# Reem Fitness

Premium Hebrew RTL landing page for a fitness coach brand, built with `Next.js 16`, `React 19`, `Tailwind CSS 4`, and `Framer Motion`.

## Stack

- `Next.js` App Router
- `Tailwind CSS` v4
- `Framer Motion` for subtle reveal animations
- `lucide-react` for lightweight iconography
- Google Fonts CSS with `Assistant` + `Heebo`

## Local Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Image Assets

Add the real coach photos into:

`public/images/reem/`

Use these exact filenames:

- `hero-wide.png`
- `hero-body.png`
- `hoodie-portrait.png`
- `side-profile.png`
- `dumbbell-training.png`
- `gym-portrait.png`
- `crossed-arms.png`
- `before-after-story.png`
- `testimonials-board.png`

If any file is missing, the site renders a branded dark placeholder automatically.

## Contact Number

- Phone: `0543600009`
- WhatsApp link in the site uses: `https://wa.me/972543600009`

## Deploy To Vercel

1. Push this folder to your GitHub repository.
2. Import the repository into Vercel.
3. Framework preset should auto-detect as `Next.js`.
4. No environment variables are required for the current version.
5. Add the real image assets before final production deployment.

## Suggested GitHub Structure

If this project is going into your existing repository, place this app at the repository root.

Then run:

```bash
npm install
npm run build
```

## Notes

- The full UI is in Hebrew and uses global RTL.
- The contact form opens WhatsApp with the submitted message prefilled.
- The design system is tuned to the dark black/red palette from the supplied image references.
