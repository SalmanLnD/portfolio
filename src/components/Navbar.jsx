import { useState } from 'react'
import { links } from '../data/site'

const items = [
  ['Work', '#work'],
  ['Method', '#method'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header>
      <nav className="site-nav">
        <a className="mark" href="#top">
          <b>MS</b>
          <span>System / Builder</span>
        </a>
        <div className="nav-links">
          {items.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <a className="nav-cta btn-primary" href={`mailto:${links.email}`}>
          Let’s Talk
        </a>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
        </button>
      </nav>
      <div className={`mobile-drawer ${open ? 'open' : ''}`}>
        {items.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  )
}
