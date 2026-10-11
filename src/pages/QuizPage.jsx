function QuizPage({
  selectedPart,
  currentQuestion,
  currentIndex,
  currentChecked,
  selectedAnswers,
  correctAnswers,
  maxSelectableAnswers,
  navigationError,
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
  const isMultiAnswer = maxSelectableAnswers > 1
  const selectionLimitReached = selectedAnswers.length >= maxSelectableAnswers

  return (
    <div className="app-shell quiz-screen">
      <div className="card quiz-card">
        <div className="quiz-header">
          <div className="quiz-header-copy">
            <div className="quiz-topline">
              <span className="quiz-label">{selectedPart}</span>
              <span className={`status-chip ${currentChecked ? (currentChecked.isCorrect ? 'success' : 'danger') : 'neutral'}`}>
                {currentChecked ? (currentChecked.isCorrect ? 'Answered correctly' : 'Review needed') : 'In progress'}
              </span>
            </div>
          </div>

          <div className="score-pill">
            <span>Score</span>
            <strong>{percentage}%</strong>
          </div>
        </div>

        <section className="quiz-progress" aria-label="Quiz progress">
          <div className="quiz-progress-labels">
            <span>Question {currentIndex + 1} of {totalQuestions}</span>
            <span>{correctCount} correct</span>
          </div>
          <div
            className="quiz-progress-track"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-valuenow={currentIndex + 1}
          >
            <span style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }} />
          </div>
        </section>

        <div className="quiz-layout">
          <div className="question-panel">
            <div className="quiz-question">
              <span className="quiz-question-label">Question {currentIndex + 1}</span>
              <h1>{currentQuestion.question}</h1>
            </div>

            <div className="options-list">
              {currentQuestion.options.map((option, optionIndex) => {
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
                    ? '✓'
                    : isSelected
                      ? '×'
                      : ''
                  : isSelected
                    ? '✓'
                    : ''
                const isSelectionDisabled = !isSelected &&
                  isMultiAnswer &&
                  selectionLimitReached

                return (
                  <button
                    key={`${optionIndex}-${option}`}
                    className={`option-button ${optionClass}`}
                    onClick={() => onOptionSelect(option)}
                    disabled={!!currentChecked || isSelectionDisabled}
                    aria-pressed={isSelected}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                    <span className="option-text">{option}</span>
                    {optionIcon && <span className={`option-state ${optionClass}`}>{optionIcon}</span>}
                  </button>
                )
              })}
            </div>
            {!currentChecked && (
              <p className={`quiz-selection-hint ${selectionLimitReached ? 'limit-reached' : ''}`} aria-live="polite">
                {isMultiAnswer
                  ? selectionLimitReached
                    ? `${selectedAnswers.length} answers selected (maximum reached). Deselect an answer to change your selection.`
                    : `${selectedAnswers.length} of ${maxSelectableAnswers} answers selected. Select up to ${maxSelectableAnswers}.`
                  : 'Select one answer.'}
              </p>
            )}
          </div>

          <aside className="quiz-side-panel">
            <div className="mini-stat"><span>Correct</span><strong>{correctCount}</strong></div>
            <div className="mini-stat"><span>Remaining</span><strong>{totalQuestions - currentIndex - 1}</strong></div>
            <div className="mini-stat accent"><span>Pass target</span><strong>80%</strong></div>
            {currentChecked && (
              <div className={`answer-card ${currentChecked.isCorrect ? 'correct' : 'incorrect'}`}>
                <h2>{currentChecked.isCorrect ? '✅ Correct answer' : '❌ Review this one'}</h2>
                <p>{currentQuestion.explanation || (currentChecked.isCorrect ? 'Nice work—this one is correct.' : 'Review the highlighted correct option and keep going.')}</p>
              </div>
            )}
          </aside>
        </div>

        {navigationError && (
          <p className="quiz-navigation-error" role="alert">
            {navigationError}
          </p>
        )}

        <div className="action-row">
          <button className="secondary-button" onClick={onCheckAnswer} disabled={!selectedAnswers.length || !!currentChecked}>
            Check Answer
          </button>
          <div className="nav-buttons">
            <button className="ghost-button" onClick={onHome}>Home</button>
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
