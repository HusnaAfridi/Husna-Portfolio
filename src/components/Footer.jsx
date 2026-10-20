import { profile } from '../data/profile'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © 2026 {profile.name}. Built as a recruiter-focused backend learning portfolio.
        </p>
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
