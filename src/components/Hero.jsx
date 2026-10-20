import { profile } from '../data/profile'
import './Hero.css'

const flow = [
  'Client',
  'Express Router',
  'Middleware',
  'Controller',
  'Database',
  'Response',
]

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-name">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="section-eyebrow">Backend portfolio</p>
          <h1 id="hero-name" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__title">{profile.shortTitle}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <div className="hero__actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
            {profile.contact.github ? (
              <a
                className="btn btn-ghost"
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            ) : null}
            {profile.cvPath ? (
              <a className="btn btn-ghost" href={profile.cvPath} download>
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <aside className="hero__visual" aria-label="Backend request flow overview">
          <p className="hero__visual-label">Request flow</p>
          <ol className="flow">
            {flow.map((step, i) => (
              <li key={step} className="flow__item">
                <span className="flow__step">{step}</span>
                {i < flow.length - 1 ? (
                  <span className="flow__arrow" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="hero__visual-note">
            Conceptual Express.js request path — not a claim of production architecture.
          </p>
        </aside>
      </div>
    </section>
  )
}
