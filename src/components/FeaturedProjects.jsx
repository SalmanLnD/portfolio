import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import ProjectCaseStudy from './ProjectCaseStudy'

export default function FeaturedProjects() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="work">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">03 / Work</p>
        <div className="projects-intro">
          <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.1rem)' }}>
            Things I built because something was broken
          </h2>
          <p className="lede" style={{ marginTop: '0.8rem' }}>
            Case studies from operations, developer infrastructure, automation, and EdTech — not a
            gallery of tutorials.
          </p>
        </div>
        {projects.map((project) => (
          <ProjectCaseStudy key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
