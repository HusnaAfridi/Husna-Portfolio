import { profile } from '../data/profile'
import './About.css'

export default function About() {
  const { about } = profile

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">About</p>
          <h2 id="about-title" className="section-title">
            About Me
          </h2>
          <p className="section-lead">
            A concise introduction focused on backend fundamentals and growth mindset.
          </p>
        </header>

        <div className="about__grid">
          <div className="about__copy">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="about__aside">
            <div className="about__panel">
              <h3>Education</h3>
              <ul className="about__list">
                {about.education.map((ed) => (
                  <li key={ed.title + ed.dates}>
                    <strong>{ed.title}</strong>
                    <span>
                      {ed.org} · {ed.dates}
                    </span>
                    {ed.note ? <em>{ed.note}</em> : null}
                  </li>
                ))}
              </ul>
            </div>

            <div className="about__panel">
              <h3>Experience</h3>
              <p className="about__placeholder">{about.experiencePlaceholder}</p>
            </div>

            <div className="about__panel">
              <h3>Languages</h3>
              <ul className="about__chips">
                {about.languages.map((lang) => (
                  <li key={lang.name}>
                    {lang.name} — {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
