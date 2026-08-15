import { techGroups } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function TechnologyStack() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="technology">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">06 / Technology</p>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.6rem' }}>
          Grouped by what they enable
        </h2>
        <p className="lede" style={{ marginBottom: '1.6rem' }}>
          Tools I reach for when a process needs a system, not a slide deck.
        </p>
        <div className="tech-track">
          {techGroups.map((group) => (
            <div className="tech-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="tag-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
