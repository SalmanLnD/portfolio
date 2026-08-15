import { useInView } from '../hooks/useInView'

export default function Profile() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="profile">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">01 / Profile</p>
        <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', marginBottom: '1.2rem' }}>
          I work at the intersection of people, processes, and technology.
        </h2>
        <div className="profile-grid">
          <div>
            <p>
              My career started in training and placement education, moved into DSA training, and
              evolved into training leadership. Along the way, I started building software to solve
              the operational problems I encountered firsthand.
            </p>
            <p>
              Today, I manage large-scale academic operations while designing and deploying the
              systems that make those operations more visible, automated, and scalable.
            </p>
            <p>My strongest work comes from problems that are real, repetitive, and worth solving.</p>
          </div>
          <aside className="profile-aside">
            Things I built because something was broken — not because a portfolio needed another
            MERN clone.
          </aside>
        </div>
      </div>
    </section>
  )
}
