# Mathew Shereni — Portfolio

Personal portfolio site showcasing my work as a software engineer, tech lead, and open-source contributor. Built with React and TypeScript, deployed to Cloudflare Pages.

**Live site:** [mathewshereni.com](https://mathewshereni.com/)

## Features

- **Hero section** — Intro with rotating roles and quick links to projects and resume
- **Projects** — Selected work with live demos, GitHub links, and previews (ZJSPT, Real-Time Chat, Material-Derailleur, and more)
- **Skills** — DevOps, backend, frontend, databases, and soft skills
- **Experience** — Tech lead, web development, and IT roles with highlights
- **Education & certifications** — Degrees plus Oracle and Microsoft credentials with badge/certificate previews
- **Dark mode** — Toggle between light and dark themes
- **Responsive layout** — Container queries and mobile-friendly navigation

## Tech Stack

| Layer      | Technology                          |
| ---------- | ----------------------------------- |
| UI         | React 19, TypeScript                |
| Build      | Vite 8                              |
| Styling    | CSS (custom properties, no framework) |
| Fonts      | Inter, Lexend Deca (Google Fonts)   |
| CI/CD      | GitHub Actions → Cloudflare Pages   |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm

### Install and run locally

```bash
git clone https://github.com/MATHEW-SHERENI/portfolio-mathew.git
cd portfolio-mathew
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Type-check and production build |
| `npm run preview` | Preview production build locally |
| `npm run lint`    | Run ESLint                     |

Production output is written to `dist/`.

## Project Structure

```
portfolio-mathew/
├── public/              # Static assets (favicon, icons)
├── src/
│   ├── assets/          # Images, resume PDF, certification previews
│   ├── App.tsx          # Main page content and layout
│   ├── App.css          # Component styles
│   ├── index.css        # Global theme and typography
│   └── main.tsx         # App entry point
├── .github/workflows/   # Deploy pipeline
└── index.html
```

## Deployment

Pushes to `main` trigger [.github/workflows/deploy.yml](.github/workflows/deploy.yml), which builds the site and deploys `dist/` to **Cloudflare Pages**.

Required repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

You can also deploy manually by running `npm run build` and uploading the `dist` folder to any static host.

## Updating Content

Most copy and links live in [`src/App.tsx`](src/App.tsx). To change:

- **Projects** — Edit cards in the `#projects` section (URLs, descriptions, tags, preview images in `src/assets/`)
- **Experience** — Update entries under `#experience`
- **Resume** — Replace `src/assets/MATHEWSHERENI_RESUME.pdf`
- **Certifications** — Update links and images in `#certifications`
- **Theme colors** — Adjust CSS variables in [`src/index.css`](src/index.css)

## Contact

- **Website:** [mathewshereni.com](https://mathewshereni.com/)
- **Email:** [mashereni@gmail.com](mailto:mashereni@gmail.com)
- **GitHub:** [@MATHEW-SHERENI](https://github.com/MATHEW-SHERENI)
- **LinkedIn:** [linkedin.com/in/mathew-shereni-213130aa](https://www.linkedin.com/in/mathew-shereni-213130aa/)

## License

This repository is for personal portfolio use. Feel free to use it as a reference for your own site; please do not present my content or projects as your own.
