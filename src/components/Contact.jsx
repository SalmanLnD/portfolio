import { links } from '../data/site'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <p className="section-kicker">10 / Contact</p>
        <h2 className="display" style={{ fontSize: 'clamp(2.1rem, 6vw, 3.6rem)', marginBottom: '0.8rem' }}>
          Have a real problem worth solving?
        </h2>
        <p className="lede">
          I’m interested in building useful systems, developer tools, learning products, and
          automation that solve problems beyond the demo.
        </p>
        <div className="hero-actions" style={{ marginTop: '1.5rem' }}>
          <a className="btn btn-primary" href={`mailto:${links.email}`}>
            Let’s Talk
          </a>
          <a className="btn btn-ghost" href={links.github} target="_blank" rel="noreferrer">
            View GitHub
          </a>
          <a className="btn btn-ghost" href={links.resume} download>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
