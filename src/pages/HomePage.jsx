import { useEffect, useState } from 'react'
import AppHeader from '../components/AppHeader'
import ArtifactPanel from '../components/ArtifactPanel'
import ButtonIcon from '../components/ButtonIcon'

const TRACK_META = {
  gh300: { code: 'GH-300', icon: 'layers', tone: 'teal' },
  'claude-associate': { code: 'CCA', icon: 'sparkle', tone: 'clay' },
  'claude-developer': { code: 'CCDV-F', icon: 'compass', tone: 'ink' }
}

const FEATURES = [
  { icon: 'book', title: 'Study flow', text: 'Every question with the correct answer revealed.' },
  { icon: 'target', title: 'Instant feedback', text: 'Check answers and read explanations as you go.' },
  { icon: 'chart', title: 'Track progress', text: 'Live score, pass target, and PDF result export.' }
]

const ROTATING_CERTS = [
  'Claude Certified Associate',
  'Claude Certified Developer',
  'GitHub Copilot (GH-300)'
]

function RotatingWord({ words, interval = 2600 }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="rotating-word" aria-live="polite">
      <span key={index} className="rotating-word-inner">{words[index]}</span>
    </span>
  )
}

function HomePage({ tests, onOpenTest }) {
  return (
    <div className="page">
      <AppHeader onHome={() => {}} />

      <main className="container stack-lg">
        <section className="hero">
          <div className="hero-copy reveal">
            <span className="eyebrow"><ButtonIcon name="sparkle" /> Certified readiness</span>
            <h1>
              Practice with purpose.<br />
              <span className="text-gradient">Pass with confidence.</span>
            </h1>
            <p className="lead">
              Your AI certification journey starts here. Get exam-ready for{' '}
              <RotatingWord words={ROTATING_CERTS} /> with real exam-style questions, instant
              explanations and progress you can measure.
            </p>

            <div className="btn-row">
              <button className="btn btn-primary" onClick={() => onOpenTest('claude-associate')}>
                <ButtonIcon name="sparkle" /> Claude Certified
              </button>
              <button className="btn btn-secondary" onClick={() => onOpenTest('gh300')}>
                <ButtonIcon name="play" /> GitHub Copilot
              </button>
            </div>

            <dl className="stat-strip">
              <div><dt>Tracks</dt><dd>{tests.length}</dd></div>
              <div><dt>GH-300 bank</dt><dd>180</dd></div>
              <div><dt>Pass goal</dt><dd>80%</dd></div>
            </dl>
          </div>

          <ArtifactPanel
            className="hero-artifact reveal"
            style={{ '--delay': '120ms' }}
            title="practice-session.quiz"
            meta={<span className="live-dot">Live</span>}
            aria-hidden="true"
          >
            <div className="demo-progress"><span /></div>
            <p className="demo-label">Question 07 of 60</p>
            <p className="demo-question">Which feature helps a model ground answers in your own documents?</p>
            <ul className="demo-options">
              <li><b>A</b> Temperature sampling</li>
              <li className="is-correct"><b>B</b> Retrieval-augmented generation <ButtonIcon name="check" /></li>
              <li><b>C</b> Token streaming</li>
            </ul>
            <div className="demo-footer">
              <span className="chip chip-success"><ButtonIcon name="check" /> Correct</span>
              <span className="demo-score">Score <strong>86%</strong></span>
            </div>
          </ArtifactPanel>
        </section>

        <section className="stack">
          <div className="section-head">
            <h2>Choose a track</h2>
            <p>Pick a certification to practise or study.</p>
          </div>

          <div className="grid grid-3">
            {tests.map((test, index) => {
              const meta = TRACK_META[test.key] || { code: test.name, icon: 'layers', tone: 'teal' }
              return (
                <article
                  key={test.key}
                  className={`track-card tone-${meta.tone} reveal ${test.ready ? '' : 'is-disabled'}`}
                  style={{ '--delay': `${180 + index * 70}ms` }}
                >
                  <div className="track-card-top">
                    <span className="track-icon"><ButtonIcon name={meta.icon} /></span>
                    <span className={`chip ${test.ready ? 'chip-success' : 'chip-muted'}`}>{test.status}</span>
                  </div>
                  <span className="track-code">{meta.code}</span>
                  <h3>{test.name}</h3>
                  <p>{test.description}</p>
                  {test.ready ? (
                    <button className="btn btn-soft btn-block" onClick={() => onOpenTest(test.key)}>
                      Open track <ButtonIcon name="arrowRight" />
                    </button>
                  ) : (
                    <button className="btn btn-soft btn-block" disabled>
                      <ButtonIcon name="clock" /> Coming soon
                    </button>
                  )}
                </article>
              )
            })}
          </div>
        </section>

        <section className="feature-strip reveal" style={{ '--delay': '420ms' }}>
          {FEATURES.map((feature) => (
            <div className="feature" key={feature.title}>
              <span className="feature-icon"><ButtonIcon name={feature.icon} /></span>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.text}</p>
              </div>
            </div>
          ))}
        </section>

        <footer className="footer-note">Best score wins — pass with 80% or more.</footer>
      </main>
    </div>
  )
}

export default HomePage
