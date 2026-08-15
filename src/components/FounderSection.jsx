import { useInView } from '../hooks/useInView'

export default function FounderSection() {
  const [ref, visible] = useInView()

  return (
    <section className="section positioning" id="position">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">09 / Position</p>
        <h2 className="display">Training Leadership + Software Engineering + AI/EdTech</h2>
        <p className="lede" style={{ marginTop: '1rem' }}>
          I combine hands-on leadership of large academic operations with practical software
          engineering and product building.
        </p>
      </div>
    </section>
  )
}
