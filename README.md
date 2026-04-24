# Avadhut Lele — Portfolio

Personal portfolio website for Avadhut Lele, Solutions Architect & Middleware Integration Developer based in Pune, India.

Built with React and deployed via GitHub Pages.

## Tech Stack
- React 18
- CSS Variables (dark/light theme)
- Google Fonts (Space Grotesk + DM Mono)
- gh-pages for deployment

## Local Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then pushes `build/` to the `gh-pages` branch automatically.

## Structure

```
src/
  components/
    Nav.js / Nav.css
    Hero.js / Hero.css
    About.js / About.css
    Skills.js / Skills.css
    Experience.js / Experience.css
    Education.js / Education.css
    Blog.js / Blog.css
    HireMe.js / HireMe.css
    Footer.js / Footer.css
    ScrollProgress.js
  hooks/
    useScrollReveal.js
  App.js / App.css
  index.js / index.css
```
