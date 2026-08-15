import { processSteps } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function HowIBuild() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="method">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">04 / Method</p>
        <h2 className="display">
          I don’t build projects just to add them to a portfolio.
        </h2>
        <p className="lede" style={{ marginBottom: '1.8rem' }}>
          I build because something can work better.
        </p>
        <div className="process">
          {processSteps.map((step) => (
            <article className="process-step" key={step.id}>
              <span className="process-id">{step.id}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
