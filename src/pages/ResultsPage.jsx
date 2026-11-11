import { useState } from 'react'
import AppHeader from '../components/AppHeader'
import ButtonIcon from '../components/ButtonIcon'

const RING_RADIUS = 52
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

function ResultsPage({
  selectedPart,
  percentage,
  correctCount,
  totalQuestions,
  passed,
  activeQuestions,
  checkedAnswers,
  onDownloadResultsPdf,
  onHome,
  onRestart
}) {
  const [filter, setFilter] = useState('all')
  const incorrectCount = totalQuestions - correctCount

  const rows = activeQuestions
    .map((question, index) => ({ question, index, result: checkedAnswers[question.id] }))
    .filter(({ result }) => {
      if (filter === 'correct') return result?.isCorrect
      if (filter === 'incorrect') return !result?.isCorrect
      return true
    })

  return (
    <div className="page">
      <AppHeader
        onHome={onHome}
        crumbs={[selectedPart, 'Results']}
      />

      <main className="container stack-lg">
        <section className={`result-hero reveal ${passed ? 'is-pass' : 'is-fail'}`}>
          <div className="ring" style={{ '--offset': RING_CIRCUMFERENCE * (1 - percentage / 100), '--circ': RING_CIRCUMFERENCE }}>
            <svg viewBox="0 0 120 120" aria-hidden="true">
              <circle className="ring-track" cx="60" cy="60" r={RING_RADIUS} />
              <circle className="ring-value" cx="60" cy="60" r={RING_RADIUS} />
            </svg>
            <div className="ring-label">
              <strong>{percentage}%</strong>
              <span>score</span>
            </div>
          </div>

          <div className="result-copy">
            <span className={`chip ${passed ? 'chip-success' : 'chip-danger'}`}>
              <ButtonIcon name={passed ? 'check' : 'restart'} /> {passed ? 'Passed' : 'Not passed yet'}
            </span>
            <h1>{passed ? 'Great job — you passed!' : 'Keep practising, you are close.'}</h1>
            <p className="lead">{selectedPart}</p>

            <dl className="mini-stats inline">
              <div><dt>Correct</dt><dd>{correctCount}</dd></div>
              <div><dt>Incorrect</dt><dd>{incorrectCount}</dd></div>
              <div><dt>Total</dt><dd>{totalQuestions}</dd></div>
            </dl>

            <div className="btn-row">
              <button className="btn btn-primary" onClick={onRestart}><ButtonIcon name="restart" /> Retry</button>
              <button className="btn btn-secondary" onClick={onDownloadResultsPdf}><ButtonIcon name="download" /> Result PDF</button>
              <button className="btn btn-ghost" onClick={onHome}><ButtonIcon name="home" /> Home</button>
            </div>
          </div>
        </section>

        <section className="stack">
          <div className="section-head">
            <h2>Answer review</h2>
            <div className="pill-tabs" role="tablist" aria-label="Filter answers">
              {[
                ['all', `All ${totalQuestions}`],
                ['correct', `Correct ${correctCount}`],
                ['incorrect', `Incorrect ${incorrectCount}`]
              ].map(([key, label]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={filter === key}
                  className={filter === key ? 'active' : ''}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="review-list" key={filter}>
            {rows.length === 0 && <p className="muted center">Nothing to show for this filter.</p>}
            {rows.map(({ question, index, result }, rowIndex) => {
              const selected = result
                ? Array.isArray(result.selected) ? result.selected : [result.selected]
                : []
              const correct = Array.isArray(question.answer) ? question.answer : [question.answer]
              const isCorrect = result?.isCorrect

              return (
                <article
                  key={question.id}
                  className={`review-item reveal ${isCorrect ? 'is-correct' : 'is-incorrect'}`}
                  style={{ '--delay': `${Math.min(rowIndex, 12) * 30}ms` }}
                >
                  <div className="review-head">
                    <span className="review-index">
                      <ButtonIcon name={isCorrect ? 'check' : 'x'} /> {index + 1}
                    </span>
                    <p>{question.question}</p>
                  </div>
                  <div className="review-answers">
                    <div>
                      <span>Your answer</span>
                      <p>{selected.length ? selected.join(', ') : 'Not answered'}</p>
                    </div>
                    <div>
                      <span>Correct answer</span>
                      <p>{correct.join(', ')}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}

export default ResultsPage
