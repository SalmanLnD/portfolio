import { experience } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function ExperienceTimeline() {
  const [ref, visible] = useInView()
  const { current, progression } = experience

  return (
    <section className="section" id="experience">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">05 / Experience</p>
        <h2 className="display">
          Placement Expert → DSA Trainer → Training Manager + Builder
        </h2>
        <div className="timeline">
          <article className="job-card">
            <h3>{current.title}</h3>
            <p className="job-meta">
              {current.company} · {current.program} · {current.dates}
            </p>
            <ul>
              {current.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="highlight">{current.highlight}</p>
          </article>
          <div className="progress-row">
            {progression.map((item) => (
              <article className="progress-card" key={item.dates}>
                <p className="dates">{item.dates}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
