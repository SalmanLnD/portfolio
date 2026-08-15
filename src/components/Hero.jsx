import { links } from '../data/site'

export default function Hero() {
  return (
    <section className="wrap hero" id="top">
      <div>
        <p className="hero-meta">
          <span>
            <i className="status-dot" />
            Builder in operations
          </span>
          <span>File / 00 · Hero</span>
        </p>
        <h1 className="display">
          <span>Muhammed</span>
          <span>Salman</span>
        </h1>
        <p className="role-line">Training Leader · Software Engineer · AI & EdTech Builder</p>
        <p className="hero-copy">
          I turn real-world operational problems into software that works.
        </p>
        <p className="hero-copy">
          Training leader managing large-scale academic operations by day. Software engineer
          building automation, developer tools, and AI-powered EdTech products by choice.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#work">
            Explore My Work
          </a>
          <a className="btn btn-ghost" href={links.resume} download>
            Download Resume
          </a>
        </div>
        <div className="socials">
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a href={`mailto:${links.email}`}>Email</a>
        </div>
      </div>
      <figure className="portrait-frame">
        <span className="corner tl" />
        <span className="corner tr" />
        <span className="corner bl" />
        <span className="corner br" />
        <img src="/portrait.png" alt="Portrait of Muhammed Salman" />
        <figcaption className="frame-label">
          <span>Portrait / 01</span>
          <span>MS · 2026</span>
        </figcaption>
      </figure>
    </section>
  )
}
