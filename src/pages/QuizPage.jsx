function QuizPage({
  selectedPart,
  currentQuestion,
  activeQuestions,
  currentIndex,
  currentChecked,
  selectedAnswers,
  correctAnswers,
  isMultiAnswer,
  percentage,
  correctCount,
  totalQuestions,
  onOptionSelect,
  onCheckAnswer,
  onHome,
  onPrevious,
  onNext,
  onFinish
}) {
  return (
    <div className="app-shell">
      <div className="card quiz-card">
        <div className="quiz-header">
          <div className="quiz-header-copy">
            <div className="quiz-topline">
              <span className="quiz-label">{selectedPart}</span>
              <span className={`status-chip ${currentChecked ? (currentChecked.isCorrect ? 'success' : 'danger') : 'neutral'}`}>
                {currentChecked ? (currentChecked.isCorrect ? 'Answered correctly' : 'Review needed') : 'In progress'}
              </span>
            </div>
            <h1>{currentQuestion.question}</h1>
            <div className="quiz-meta">
              <span>Question {currentIndex + 1}/{totalQuestions}</span>
              {isMultiAnswer && <span>Multi-select</span>}
            </div>
          </div>

          <div className="score-pill">
            <span>Score</span>
            <strong>{percentage}%</strong>
          </div>
        </div>

        <div className="quiz-layout">
          <div className="question-panel">
            <div className="progress-rail" aria-label="question progress">
              {activeQuestions.map((_, index) => (
                <span key={index} className={index === currentIndex ? 'active' : index < currentIndex ? 'done' : ''} />
              ))}
            </div>

            <div className="options-list">
              {currentQuestion.options.map((option) => {
                const isSelected = selectedAnswers.includes(option)
                const isCorrectOption = correctAnswers.includes(option)
                const showCorrect = currentChecked && selectedAnswers.length > 0
                const optionClass = showCorrect
                  ? isCorrectOption
                    ? 'correct'
                    : isSelected
                      ? 'incorrect'
                      : ''
                  : isSelected
                    ? 'selected'
                    : ''
                const optionIcon = showCorrect
                  ? isCorrectOption
                    ? '✅ '
                    : isSelected
                      ? '❌ '
                      : ''
                  : isSelected
                    ? '• '
                    : ''

                return (
                  <button
                    key={option}
                    className={`option-button ${optionClass}`}
                    onClick={() => onOptionSelect(option)}
                    disabled={!!currentChecked}
                  >
                    <span className="option-icon">{optionIcon}</span>
                    {option}
                  </button>
                )
              })}
            </div>
          </div>

          <aside className="quiz-side-panel">
            <div className="mini-stat"><span>Correct</span><strong>{correctCount}</strong></div>
            <div className="mini-stat"><span>Remaining</span><strong>{totalQuestions - currentIndex - 1}</strong></div>
            <div className="mini-stat accent"><span>Pass target</span><strong>80%</strong></div>
            {currentChecked && (
              <div className={`answer-card ${currentChecked.isCorrect ? 'correct' : 'incorrect'}`}>
                <h2>{currentChecked.isCorrect ? '✅ Correct answer' : '❌ Review this one'}</h2>
                <p>{currentQuestion.explanation || (currentChecked.isCorrect ? 'Nice work—this one is correct.' : 'This one is incorrect. Review the answer and keep going!')}</p>
              </div>
            )}
          </aside>
        </div>

        <div className="action-row">
          <button className="secondary-button" onClick={onCheckAnswer} disabled={!selectedAnswers.length || !!currentChecked}>
            Check Answer
          </button>
          <div className="nav-buttons">
            <button className="ghost-button" onClick={onHome}>🏠 Home</button>
            <button className="secondary-button" onClick={onPrevious} disabled={currentIndex === 0}>Previous</button>
            {currentIndex < totalQuestions - 1 ? (
              <button className="primary-button" onClick={onNext}>Next</button>
            ) : (
              <button className="primary-button" onClick={onFinish}>Finish</button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizPage
