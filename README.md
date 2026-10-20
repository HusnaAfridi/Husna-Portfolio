# Husna Afridi — Backend Developer Portfolio

Recruiter-focused portfolio for **Husna Afridi**, Aspiring Backend Developer targeting Node.js / Backend Developer Intern and junior software engineering roles.

## Stack

- React + Vite
- Plain CSS (no UI framework)

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # oxlint
```

## Content configuration

Edit data files under `src/data/`:

| File | Purpose |
|------|---------|
| `profile.js` | Name, about, education, contact, CV path, GitHub |
| `skills.js` | Skill categories (`used` / `learning`) |
| `projects.js` | Practice projects (features, endpoints, MongoDB notes) |
| `journey.js` | Learning roadmap |
| `architecture.js` | Layers, API demo, MongoDB & security copy |

### Updating a project

1. Edit the matching object in `projects` inside `projects.js`.
2. Set `github` / `live` when the repo or docs URL is ready.
3. Use `status: 'completed'` only when the project is actually finished and linked.

### CV download

PDF: `public/Husna_Afridi_Backend_Developer_Resume.pdf`  
Controlled by `profile.cvPath` — leave empty to hide Download CV buttons.

## Placeholders remaining

- GitHub profile URL (`profile.contact.github`)
- Per-project GitHub / live links
- Professional employment (if any)
- Contact form (disabled until a real endpoint exists)
- Optional OG image / deployed canonical URL

## Design

- Dark navy / charcoal with teal accents
- Sections: Home, About, Skills, Projects, Backend Concepts, Learning Journey, Contact
- Expandable project case-study panels
- Reduced-motion and keyboard-friendly navigation
- SEO title, description, and Open Graph tags in `index.html`

## Honesty policy

- Resume practice projects stay labeled **Planned Project**
- Completed project slots stay **Details Needed** until verified
- No fabricated metrics, employers, or live APIs

## License

Personal portfolio project.
