import { useId, useState } from 'react'
import { statusLabels } from '../data/projects'
import './ProjectCard.css'

export default function ProjectCard({ project, emphasize = false }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const statusText = statusLabels[project.status] || project.status
  const topFeatures = project.features?.slice(0, 4) ?? []

  return (
    <article className={`project-card ${emphasize ? 'project-card--feature' : ''}`}>
      <header className="project-card__head">
        <h3>{project.name}</h3>
        <span className="badge">{statusText}</span>
      </header>

      <p className="project-card__purpose">{project.purpose}</p>
      <p className="project-card__meta">
        <strong>Problem:</strong> {project.problem}
      </p>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {topFeatures.length ? (
        <div className="project-card__block">
          <h4>Key features</h4>
          <ul>
            {topFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        className="project-card__toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? 'Hide case study' : 'View full case study'}
      </button>

      <div
        id={panelId}
        className={`project-card__details ${open ? 'project-card__details--open' : ''}`}
        hidden={!open}
      >
        {project.features?.length > 4 ? (
          <div className="project-card__block">
            <h4>All features</h4>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {project.endpoints?.length ? (
          <div className="project-card__block">
            <h4>API endpoints</h4>
            <ul>
              {project.endpoints.map((ep) => (
                <li key={ep}>
                  <code>{ep}</code>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <dl className="project-card__dl">
          <div>
            <dt>Database</dt>
            <dd>{project.database}</dd>
          </div>
          {project.validation ? (
            <div>
              <dt>Validation & errors</dt>
              <dd>{project.validation}</dd>
            </div>
          ) : null}
          <div>
            <dt>What was learned</dt>
            <dd>{project.learned}</dd>
          </div>
        </dl>
      </div>

      <footer className="project-card__links">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub Repository
          </a>
        ) : (
          <span className="project-card__soon">GitHub — Coming Soon</span>
        )}
        {project.live ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live / Docs
          </a>
        ) : (
          <span className="project-card__soon">Live API — Coming Soon</span>
        )}
      </footer>
    </article>
  )
}
