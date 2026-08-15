import {
  OpsVisual,
  PipelineVisual,
  PlaygroundVisual,
  StepWiseVisual,
  VentureVisual,
} from './ProjectVisuals'

function Visual({ project }) {
  if (project.visual === 'ops') return <OpsVisual />
  if (project.visual === 'stepwise') return <StepWiseVisual />
  if (project.visual === 'playground') return <PlaygroundVisual />
  if (project.visual === 'pipeline') return <PipelineVisual steps={project.flow} />
  if (project.visual === 'venture') return <VentureVisual />
  return null
}

export default function ProjectCaseStudy({ project }) {
  return (
    <article className={`project ${project.featured ? 'flagship' : ''}`}>
      <div className={`project-inner ${project.featured ? 'flagship-grid' : 'split'}`}>
        <div className="project-copy">
          <span className="badge">
            {project.number} · {project.badge}
          </span>
          <h3>{project.title}</h3>
          <p className="subtitle">{project.subtitle}</p>
          <p>{project.description}</p>
          {project.tagline && <p className="impact-line" style={{ marginTop: '0.7rem' }}>{project.tagline}</p>}
          {project.role && <p className="subtitle">Role · {project.role}</p>}
          {project.mention && <p style={{ marginTop: '0.7rem' }}>{project.mention}</p>}
          {project.note && <p className="impact-line" style={{ marginTop: '0.7rem' }}>{project.note}</p>}
          {project.impact && <p className="impact-line" style={{ marginTop: '0.8rem' }}>{project.impact}</p>}
          {project.transform && (
            <div className="transform">
              <div className="node">{project.transform[0]}</div>
              <span className="arrow">→</span>
              <div className="node active">{project.transform[1]}</div>
              <span className="arrow">→</span>
              <div className="node">{project.transform[2]}</div>
            </div>
          )}
          {project.concepts && (
            <div className="chip-row">
              {project.concepts.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
          )}
          <div className="tag-row">
            {project.stack.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            {project.live && (
              <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">
                Live / Demo
              </a>
            )}
            {project.extra && (
              <a className="btn btn-ghost" href={project.extra.href} target="_blank" rel="noreferrer">
                {project.extra.label}
              </a>
            )}
          </div>
          {(project.modules || project.features) && (
            <details className="details">
              <summary>Expand details</summary>
              <ul>
                {(project.modules || project.features).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          )}
        </div>
        <div className="project-visual">
          <Visual project={project} />
        </div>
      </div>
    </article>
  )
}
