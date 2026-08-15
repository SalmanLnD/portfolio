import { recognition } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function Recognition() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="recognition">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">08 / Recognition</p>
        <div className="recognition-row">
          {recognition.map((item) => (
            <article className="award" key={item.title}>
              <span>{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.org}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
