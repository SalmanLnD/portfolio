import { links } from '../data/site'

export default function Footer() {
  return (
    <footer className="wrap site-footer">
      <div>
        <strong>Muhammed Salman</strong>
        <p>Training Leadership · Software Engineering · AI & EdTech</p>
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
      <p>© {new Date().getFullYear()}</p>
    </footer>
  )
}
