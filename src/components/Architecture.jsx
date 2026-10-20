import {
  apiExample,
  databaseConcepts,
  httpMethods,
  layers,
  securityPractices,
  statusCodes,
} from '../data/architecture'
import './Architecture.css'

export default function Architecture() {
  return (
    <section id="concepts" className="section concepts" aria-labelledby="concepts-title">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">Backend concepts</p>
          <h2 id="concepts-title" className="section-title">
            How a Request Travels
          </h2>
          <p className="section-lead">
            Conceptual Express.js architecture with MongoDB. Shown as a learning diagram
            unless a featured project demonstrably implements these layers.
          </p>
        </header>

        <ol className="arch-flow" aria-label="Backend request layers">
          {layers.map((layer, index) => (
            <li key={layer.id} className="arch-flow__item">
              <div className="arch-flow__card">
                <span className="arch-flow__index">{index + 1}</span>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.detail}</p>
                </div>
              </div>
              {index < layers.length - 1 ? (
                <div className="arch-flow__connector" aria-hidden="true">
                  ↓
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <div className="concepts__split">
          <article className="concepts__panel">
            <h3>HTTP methods</h3>
            <ul className="concepts__methods">
              {httpMethods.map((m) => (
                <li key={m.method}>
                  <code>{m.method}</code>
                  <span>{m.use}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="concepts__panel">
            <h3>Status codes</h3>
            <ul className="concepts__codes">
              {statusCodes.map((s) => (
                <li key={s.code}>
                  <code>{s.code}</code>
                  <span>{s.meaning}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="api-showcase" aria-labelledby="api-showcase-title">
          <div className="api-showcase__head">
            <h3 id="api-showcase-title">API Showcase</h3>
            {apiExample.illustrative ? (
              <span className="badge badge-muted">Illustrative example</span>
            ) : null}
          </div>
          <p>{apiExample.description}</p>
          <p>
            <strong>Method:</strong> {apiExample.method} · <strong>Endpoint:</strong>{' '}
            <code>{apiExample.endpoint}</code>
          </p>
          <p>
            <strong>Parameters:</strong> {apiExample.parameters}
          </p>
          <pre className="api-showcase__code" tabIndex={0}>
            <code>{JSON.stringify(apiExample.response, null, 2)}</code>
          </pre>
          <p className="api-showcase__errors">
            <strong>Errors:</strong> {apiExample.errors}
          </p>
        </article>

        <div className="concepts__split concepts__split--bottom">
          <article className="concepts__panel" id="database">
            <h3>Database knowledge</h3>
            <p className="concepts__note">{databaseConcepts.note}</p>
            <ul className="concepts__db">
              {databaseConcepts.items.map((item) => (
                <li key={item.title}>
                  <strong>
                    {item.title}
                    {item.learningOnly ? ' (learning)' : ''}
                  </strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="concepts__panel" id="security">
            <h3>Security & reliability</h3>
            <p className="concepts__note">{securityPractices.note}</p>
            {securityPractices.implemented?.length ? (
              <>
                <p className="concepts__note">
                  <strong>Implemented in a verified project</strong>
                </p>
                <ul className="concepts__checklist">
                  {securityPractices.implemented.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="concepts__note">
                No security practices are marked as implemented until a verified project
                demonstrates them.
              </p>
            )}
            <p className="concepts__note">
              <strong>Currently learning / applying</strong>
            </p>
            <ul className="concepts__checklist">
              {securityPractices.learning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
