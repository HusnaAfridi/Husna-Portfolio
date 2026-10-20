import { levelLabels, skillCategories } from '../data/skills'
import './Skills.css'

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">Capabilities</p>
          <h2 id="skills-title" className="section-title">
            Technical Skills
          </h2>
          <p className="section-lead">
            Honest labels only—Used in projects or Currently learning. No percentage bars.
          </p>
        </header>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <article key={cat.id} className="skills__card">
              <h3>{cat.title}</h3>
              <ul>
                {cat.skills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className={`skills__level skills__level--${skill.level}`}>
                      {levelLabels[skill.level]}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
