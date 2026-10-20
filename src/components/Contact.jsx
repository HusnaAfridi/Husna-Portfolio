import { profile } from '../data/profile'
import './Contact.css'

export default function Contact() {
  const { contact, contactFormEnabled } = profile

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact__wrap">
        <header className="section-head">
          <p className="section-eyebrow">Connect</p>
          <h2 id="contact-title" className="section-title">
            Contact
          </h2>
          <p className="section-lead">{contact.closing}</p>
        </header>

        <ul className="contact__channels">
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          {contact.phone ? (
            <li>
              <span>Phone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </li>
          ) : null}
          {contact.linkedin ? (
            <li>
              <span>LinkedIn</span>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                linkedin.com/in/husna-afridi-111745430
              </a>
            </li>
          ) : (
            <li>
              <span>LinkedIn</span>
              <em>[LinkedIn URL placeholder]</em>
            </li>
          )}
          {contact.github ? (
            <li>
              <span>GitHub</span>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                GitHub profile
              </a>
            </li>
          ) : (
            <li>
              <span>GitHub</span>
              <em>[GitHub profile to be added]</em>
            </li>
          )}
          {profile.location ? (
            <li>
              <span>Location</span>
              <em style={{ fontStyle: 'normal', color: 'var(--text)' }}>{profile.location}</em>
            </li>
          ) : null}
        </ul>

        {contactFormEnabled ? null : (
          <p className="note contact__form-note">
            Contact form is not connected to a backend. Please use email or LinkedIn to
            reach out. This is not a working submission form.
          </p>
        )}

        {profile.cvPath ? (
          <a className="btn btn-primary" href={profile.cvPath} download>
            Download CV (PDF)
          </a>
        ) : null}
      </div>
    </section>
  )
}
