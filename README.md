# MIRA. — Personal Portfolio

A personal developer portfolio showcasing my interests, projects, and learning journey across cybersecurity, generative AI, and software development.

**Live site:** [sangamithirai-rs.vercel.app](https://sangamithirai-rs.vercel.app/)

**MIRA** is customized from the open-source ECHO portfolio template created by Jishnu Mondal.

## About

I'm Sangamithirai RS, a Computer Science Engineering student specializing in Big Data Analytics. I'm interested in cybersecurity, generative AI, and software engineering. I use personal projects and hands-on experimentation to explore technologies and develop practical skills.

## Features

- **Interactive Hero Section** — Introduction and navigation to key portfolio sections.
- **About Section** — Background, interests, and technical focus.
- **Experience Timeline** — Learning milestones, coursework, and project experience.
- **Project Carousel** — Showcases selected projects.
- **My Work Section** — Visual presentation of projects.
- **Interests Section** — Areas of technology I'm exploring.
- **Contact Form** — Allows visitors to send messages.
- **Responsive Navigation** — Navigation for desktop and mobile devices.
- **Interactive Animations** — Scroll-based effects and WebGL elements.

## Tech Stack

- HTML5 and TypeScript (ES modules)
- [Vite](https://vite.dev) for the dev server and production build
- [Tailwind CSS](https://tailwindcss.com) 3, compiled at build time
- OGL / WebGL and [string-tune](https://www.npmjs.com/package/@fiddle-digital/string-tune) for motion effects
- ESLint 10, Prettier and `tsc` for code quality
- GitHub Actions for CI, deployed on Vercel

## Featured Projects

### Afterglow

A privacy-focused platform for creating, preserving, and sharing personal experiences.

**Technologies:** React, TypeScript, Vite, Tailwind CSS, Supabase.

[View Repository](https://github.com/sangamithirai-rs/Afterglow)

### Tab Zero

A productivity-focused new-tab experience.

[View Repository](https://github.com/sangamithirai-rs/tab-zero)

### AWAKEN

A productivity RPG concept that combines quests, personal attributes, and game-inspired progression.

**Status:** Concept stage.

### YARUKI

A backend development project exploring TypeScript, Supabase, and PostgreSQL.

**Status:** In development.

## Areas of Interest

- Cybersecurity
- Generative AI
- Software Engineering
- Full-Stack Development
- Cloud Technologies

## Run Locally

### Prerequisites

- Git
- Node.js 20.19 or newer (Node 22 recommended; see `.nvmrc`)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sangamithirai-rs/portfolio.git
   ```

2. Navigate to the project directory and install dependencies:

   ```bash
   cd portfolio
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:5173` in your browser.

### Scripts

| Command                   | What it does                                        |
| ------------------------- | --------------------------------------------------- |
| `npm run dev`             | Start the dev server                                |
| `npm run build`           | Create a production build in `dist/`                |
| `npm run preview`         | Preview the production build locally                |
| `npm run lint`            | Run ESLint (`lint:fix` to auto-fix)                 |
| `npm run typecheck`       | Type-check the TypeScript with `tsc`                |
| `npm run format`          | Format all files (`format:check` to verify only)    |
| `npm run optimize-images` | Convert PNG/JPEG in `assets/` and `public/` to WebP |

Every push and pull request to `main` runs lint, type checking, a Prettier check and a production build through GitHub Actions.

## Connect

- **GitHub:** [sangamithirai-rs](https://github.com/sangamithirai-rs)
- **LinkedIn:** [Sangamithirai RS](https://www.linkedin.com/in/sangamithirai-rs)

## Credits and License

This portfolio is a customized version of the open-source **ECHO portfolio template** created by **Jishnu Mondal**.

The original template's design and implementation served as the foundation for this project. The branding, content, project information, and selected sections have been customized for my personal portfolio.

The original template is distributed under the MIT License. The original copyright and license notices should be retained in accordance with the license terms.

---

**MIRA. — Building beyond the interface.**
