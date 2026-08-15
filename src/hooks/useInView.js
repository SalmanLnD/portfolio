import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.01, rootMargin: '0px 0px -40px 0px' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return [ref, visible]
}
