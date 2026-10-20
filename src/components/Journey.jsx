import { journeyLabels, journeySteps } from '../data/journey'
import './Journey.css'

export default function Journey() {
  return (
    <section id="journey" className="section journey" aria-labelledby="journey-title">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">Growth</p>
          <h2 id="journey-title" className="section-title">
            Learning Journey
          </h2>
          <p className="section-lead">
            A simple roadmap. Progress reflects topics currently studied; nothing is marked
            complete without confirmation.
          </p>
        </header>

        <ol className="journey__list">
          {journeySteps.map((step, i) => (
            <li key={step.id} className={`journey__item journey__item--${step.status}`}>
              <span className="journey__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{step.title}</h3>
                <span className="badge badge-muted">{journeyLabels[step.status]}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
