# quintinmintiens.be

Personal portfolio website for Quintin Mintiens — Junior Data Engineer.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- **Anime.js** (scroll animations)
- Deployed on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |

## Project Structure

```
src/
  app/
    layout.js      # Root layout, fonts, dark mode
    page.js        # Main page composing all sections
    globals.css    # Tailwind directives + custom utilities
  components/
    Header.js      # Glassmorphism nav + dark/light toggle
    Hero.js        # Full-screen intro section
    About.js       # Bio with dynamic age calculation
    Skills.js      # Categorized skill chips
    Experience.js  # Timeline (education + work)
    Contact.js     # Mailto CTA + footer
public/
    ProfilePic.jpg
    favicon.png
```
