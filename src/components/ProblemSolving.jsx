import { links } from '../data/site'
import { useInView } from '../hooks/useInView'

export default function ProblemSolving() {
  const [ref, visible] = useInView()

  return (
    <section className="section" id="problems">
      <div className={`wrap reveal ${visible ? 'in' : ''}`} ref={ref}>
        <p className="section-kicker">07 / Fundamentals</p>
        <h2 className="display">
          I still solve problems.
        </h2>
        <p className="lede">
          Building products taught me how important fundamentals are. I continue practicing Data
          Structures and Algorithms through problem solving, particularly arrays, linked lists,
          trees, graphs, recursion, searching, and sorting.
        </p>
        <a className="lc-card" href={links.leetcode} target="_blank" rel="noreferrer">
          <div>
            <strong>LeetCode</strong>
            <p>leetcode.com/u/SagoSalman0268</p>
          </div>
          <span className="btn btn-ghost">Open profile</span>
        </a>
      </div>
    </section>
  )
}
