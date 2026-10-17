import ButtonIcon from '../components/ButtonIcon'

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
  return (
    <div className="app-shell">
      <div className="card summary-card">
        <div className="action-row summary-actions">
          <button className="primary-button" onClick={onHome}><ButtonIcon name="home" /> Home</button>
          <button className="secondary-button" onClick={onDownloadResultsPdf}><ButtonIcon name="download" /> Download Result PDF</button>
          <button className="ghost-button" onClick={onRestart}><ButtonIcon name="restart" /> Restart This Part</button>
        </div>
        <div className="summary-badge">Quiz Complete</div>
        <h1>{selectedPart} Results</h1>
        <div className="summary-grid">
          <div><span>{percentage}%</span><p>Score</p></div>
          <div><span>{correctCount}</span><p>Correct</p></div>
          <div><span>{totalQuestions - correctCount}</span><p>Incorrect</p></div>
        </div>
        <p className={`summary-note ${passed ? 'pass' : 'fail'}`}>
          {passed ? 'Great job! You passed the quiz.' : 'Keep practicing! You did not pass yet.'}
        </p>

        <div className="summary-list">
          {activeQuestions.map((question, index) => {
            const answerData = checkedAnswers[question.id]
            const selected = answerData
              ? Array.isArray(answerData.selected)
                ? answerData.selected
                : [answerData.selected]
              : []
            const correct = Array.isArray(question.answer) ? question.answer : [question.answer]
            const questionCorrect = answerData?.isCorrect

            return (
              <div key={question.id} className={`summary-item ${questionCorrect ? 'correct' : 'incorrect'}`}>
                <div className="summary-row">
                  <span className="summary-index">#{index + 1}</span>
                  <p>{question.question}</p>
                </div>
                <div className="summary-answer-row">
                  <div className="summary-answer">
                    <strong>{questionCorrect ? '✅ Your answer' : '❌ Your answer'}</strong>
                    <p>{selected.length ? selected.join(', ') : 'Not answered'}</p>
                  </div>
                  <div className="summary-answer">
                    <strong>Correct answer</strong>
                    <p>{correct.join(', ')}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default ResultsPage
