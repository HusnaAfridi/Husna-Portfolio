import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import './Navbar.css'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#concepts', label: 'Backend Concepts' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#home" className="nav__brand" onClick={close}>
          <span className="nav__mark" aria-hidden="true">
            HA
          </span>
          <span className="nav__name">{profile.name}</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={`nav__burger ${open ? 'nav__burger--open' : ''}`} aria-hidden="true" />
        </button>

        <nav
          id="primary-nav"
          className={`nav__menu ${open ? 'nav__menu--open' : ''}`}
          aria-label="Primary"
        >
          <ul className="nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {profile.cvPath ? (
            <a
              className="btn btn-ghost nav__cv"
              href={profile.cvPath}
              download
              onClick={close}
            >
              Download CV
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  )
}
