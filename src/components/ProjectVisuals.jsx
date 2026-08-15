import { useEffect, useState } from 'react'

const lines = [
  { text: 'def walk(n):', vars: [] },
  { text: '    a = [1, 2, 3]', vars: [{ k: 'a', v: '[1,2,3]' }] },
  { text: '    i = 0', vars: [{ k: 'a', v: '[1,2,3]' }, { k: 'i', v: '0' }] },
  { text: '    while i < n:', vars: [{ k: 'a', v: '[1,2,3]' }, { k: 'i', v: '0' }] },
  { text: '        i += 1', vars: [{ k: 'a', v: '[1,2,3]' }, { k: 'i', v: '1' }] },
]

export function StepWiseVisual() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % lines.length), 1100)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="editor-board stepwise-viz" aria-hidden="true">
      <div className="ops-top">
        <span>StepWise · runtime</span>
        <span>Python · step {step + 1}/{lines.length}</span>
      </div>
      {lines.map((line, i) => (
        <div key={line.text} className={`code-line ${i === step ? 'active' : ''}`}>
          {line.text}
        </div>
      ))}
      <div className="memory">
        {lines[step].vars.map((v) => (
          <div className="mem-box" key={v.k}>
            <small>{v.k}</small>
            {v.v}
          </div>
        ))}
      </div>
    </div>
  )
}

export function OpsVisual() {
  return (
    <div className="ops-board" aria-hidden="true">
      <div className="ops-top">
        <span>MBUTOMS · live ops</span>
        <span>SYS · OK</span>
      </div>
      <div className="ops-grid">
        <div className="ops-cell">
          Trainers online
          <strong>70+</strong>
        </div>
        <div className="ops-cell">
          Students in program
          <strong>10,000+</strong>
        </div>
        <div className="ops-cell">
          Attendance
          <strong>webhook</strong>
        </div>
        <div className="ops-cell">
          Record
          <strong>central</strong>
        </div>
      </div>
    </div>
  )
}

export function PlaygroundVisual() {
  return (
    <div className="sandbox" aria-hidden="true">
      <div className="sandbox-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <pre>{`// playground sandbox
import { run } from './runner'

run({
  lang: 'javascript',
  oauth: ['google', 'github'],
  infra: ['s3', 'cloudfront', 'ec2']
})`}</pre>
    </div>
  )
}

export function PipelineVisual({ steps }) {
  return (
    <div className="pipeline" aria-hidden="true">
      {steps.map((step, i) => (
        <div className="pipe-step" key={step}>
          <span className="pipe-index">{String(i + 1).padStart(2, '0')}</span>
          <span>{step}</span>
        </div>
      ))}
    </div>
  )
}

export function VentureVisual() {
  return (
    <div className="venture-board">
      <p className="ops-top">
        <span>SarkarTech · venture</span>
        <span>Founder</span>
      </p>
      <h4>Learn → Practice → Get Placed</h4>
      <p style={{ marginTop: '0.7rem', color: 'var(--ink-soft)' }}>Campuszen</p>
    </div>
  )
}
