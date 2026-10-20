import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="section-head">
          <p className="section-eyebrow">Featured work</p>
          <h2 id="projects-title" className="section-title">
            Backend Projects
          </h2>
          <p className="section-lead">
            Simple Node.js practice APIs with clear features, routes, and MongoDB design.
            GitHub links will appear when repositories are published.
          </p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} emphasize />
          ))}
        </div>
      </div>
    </section>
  )
}
