import { useEffect, useRef, useState } from 'react'
import { metrics } from '../data/site'

function useCount(target, start) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return undefined
    const duration = 1100
    const t0 = performance.now()
    let frame = 0

    const tick = (now) => {
      const p = Math.min(1, (now - t0) / duration)
      const eased = 1 - (1 - p) ** 3
      setValue(Math.round(target * eased))
      if (p < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target])

  return value
}

function Metric({ item, start }) {
  const n = useCount(item.value, start)
  const display = item.value >= 1000 ? n.toLocaleString('en-IN') : n

  return (
    <article className="metric">
      <div className="metric-value">
        {display}
        {item.suffix}
      </div>
      <p className="metric-label">{item.label}</p>
    </article>
  )
}

export default function ImpactMetrics() {
  const ref = useRef(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStart(true)
        observer.disconnect()
      }
    }, { threshold: 0.4 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="wrap" style={{ paddingBottom: '3rem' }} id="impact">
      <p className="section-kicker">00 / Impact</p>
      <div className="metrics" ref={ref}>
        {metrics.map((item) => (
          <Metric key={item.label} item={item} start={start} />
        ))}
      </div>
    </section>
  )
}
