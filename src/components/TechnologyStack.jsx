import { techGroups } from '../data/site'
import { dsaIcons, techLogos } from '../data/techLogos'
import { useInView } from '../hooks/useInView'

function DsaMark({ kind }) {
  return (
    <svg className="tech-mark" viewBox="0 0 24 24" aria-hidden="true">
      {kind === 'grid' && (
        <>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </>
      )}
      {kind === 'link' && (
        <>
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="12" r="3" />
          <path d="M9 12h6" />
        </>
      )}
      {kind === 'stack' && (
        <>
          <rect x="5" y="4" width="14" height="4" rx="1.2" />
          <rect x="5" y="10" width="14" height="4" rx="1.2" />
          <rect x="5" y="16" width="14" height="4" rx="1.2" />
        </>
      )}
      {kind === 'queue' && (
        <>
          <rect x="3" y="8" width="5" height="8" rx="1.2" />
          <rect x="9.5" y="8" width="5" height="8" rx="1.2" />
          <rect x="16" y="8" width="5" height="8" rx="1.2" />
        </>
      )}
      {kind === 'tree' && (
        <>
          <circle cx="12" cy="5" r="2.2" />
          <circle cx="6" cy="18" r="2.2" />
          <circle cx="18" cy="18" r="2.2" />
          <path d="M12 7.2v4.2L6.8 16M12 11.4L17.2 16" />
        </>
      )}
      {kind === 'graph' && (
        <>
          <circle cx="6" cy="7" r="2" />
          <circle cx="18" cy="7" r="2" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="17" r="2" />
          <path d="M8 7h8M7.4 9l.8 7M16.6 9l-.4 6M9 18h6" />
        </>
      )}
      {kind === 'search' && (
        <>
          <circle cx="11" cy="11" r="5.5" fill="none" />
          <path d="M15.5 15.5L20 20" />
        </>
      )}
      {kind === 'sort' && <path d="M8 5v14M8 5l-3 3M8 5l3 3M16 19V5M16 19l-3-3M16 19l3-3" />}
      {kind === 'hash' && <path d="M10 4L8 20M16 4l-2 16M5 9h15M4 15h15" />}
      {kind === 'loop' && (
        <path d="M7 8a6 6 0 1 1 1.5 8.2M7 8H4.5M7 8V5.5" fill="none" />
      )}
    </svg>
  )
}

function TechTile({ name, group }) {
  const logo = techLogos[name]
  const dsa = group === 'Data Structures' ? dsaIcons[name] : null

  return (
    <span className="tech-tile">
      {logo ? (
        <img src={logo} alt="" width="36" height="36" loading="lazy" />
      ) : (
        <DsaMark kind={dsa || 'grid'} />
      )}
      <span>{name}</span>
    </span>
  )
}

export default function TechnologyStack() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="technology">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">06 / Technology</p>
        <h2 className="display">Grouped by what they enable</h2>
        <p className="lede" style={{ marginBottom: '1.6rem' }}>
          Tools I reach for when a process needs a system, not a slide deck.
        </p>
        <div className="tech-track">
          {techGroups.map((group) => (
            <div className="tech-group" key={group.label}>
              <h3>{group.label}</h3>
              <div className="tech-logo-row">
                {group.items.map((item) => (
                  <TechTile key={item} name={item} group={group.label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
