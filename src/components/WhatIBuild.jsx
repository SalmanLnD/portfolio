import { buildCards } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function WhatIBuild() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="systems">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">02 / Systems</p>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.4rem' }}>
          What I build
        </h2>
        <div className="build-grid">
          {buildCards.map((card) => (
            <article className="build-card" key={card.id}>
              <span className="id">{card.id}</span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
