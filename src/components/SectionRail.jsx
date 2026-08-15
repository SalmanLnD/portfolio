import { useEffect, useState } from 'react'

const rails = [
  ['01', 'Profile', '#profile'],
  ['02', 'Systems', '#systems'],
  ['03', 'Work', '#work'],
  ['04', 'Method', '#method'],
  ['05', 'Experience', '#experience'],
]

export default function SectionRail() {
  const [active, setActive] = useState('#profile')

  useEffect(() => {
    const ids = rails.map(([, , href]) => href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.1, 0.25, 0.5] },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="section-rail" aria-label="Section index">
      {rails.map(([num, label, href]) => (
        <a key={href} href={href} className={active === href ? 'active' : ''}>
          {num} / {label}
        </a>
      ))}
    </aside>
  )
}
