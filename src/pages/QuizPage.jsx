import AppHeader from '../components/AppHeader'
import ArtifactPanel from '../components/ArtifactPanel'
import ButtonIcon from '../components/ButtonIcon'

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
  const isLast = currentIndex >= totalQuestions - 1
  const progress = ((currentIndex + 1) / totalQuestions) * 100
  const statusTone = currentChecked ? (currentChecked.isCorrect ? 'success' : 'danger') : 'muted'
  const statusText = currentChecked ? (currentChecked.isCorrect ? 'Correct' : 'Review needed') : 'In progress'

  return (
    <div className="page">
      <AppHeader
        onHome={onHome}
        crumbs={[selectedPart]}
        actions={
          <div className="score-badge" aria-label={`Score ${percentage}%`}>
            <span>Score</span>
            <strong>{percentage}%</strong>
          </div>
        }
      />

      <div className="progress-strip">
        <div className="container progress-strip-inner">
          <span>Question <strong>{currentIndex + 1}</strong> / {totalQuestions}</span>
          <div
            className="progress"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-valuenow={currentIndex + 1}
          >
            <span style={{ width: `${progress}%` }} />
          </div>
          <span className="hide-sm">{correctCount} correct</span>
        </div>
      </div>

      <main className="container quiz-layout">
        <ArtifactPanel
          key={currentQuestion.id ?? currentIndex}
          className="quiz-card reveal"
          title={`question-${String(currentIndex + 1).padStart(2, '0')}`}
          meta={<span className={`chip chip-${statusTone}`}>{statusText}</span>}
        >
          <div className="question-head">
            <span className="question-kicker">
              {isMultiAnswer ? `Choose ${maxSelectableAnswers}` : 'Choose one'}
            </span>
            <h1 className="question-title">{currentQuestion.question}</h1>
          </div>

          <div className="options">
            {currentQuestion.options.map((option, optionIndex) => {
              const isSelected = selectedAnswers.includes(option)
              const isCorrectOption = correctAnswers.includes(option)
              const showCorrect = currentChecked && selectedAnswers.length > 0
              const optionClass = showCorrect
                ? isCorrectOption ? 'is-correct' : isSelected ? 'is-incorrect' : 'is-dim'
                : isSelected ? 'is-selected' : ''
              const icon = showCorrect
                ? isCorrectOption ? 'check' : isSelected ? 'x' : null
                : isSelected ? 'check' : null
              const isSelectionDisabled = !isSelected && isMultiAnswer && selectionLimitReached

              return (
                <button
                  key={`${optionIndex}-${option}`}
                  className={`option ${optionClass}`}
                  style={{ '--delay': `${60 + optionIndex * 40}ms` }}
                  onClick={() => onOptionSelect(option)}
                  disabled={!!currentChecked || isSelectionDisabled}
                  aria-pressed={isSelected}
                >
                  <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                  <span className="option-text">{option}</span>
                  {icon && <span className="option-state"><ButtonIcon name={icon} /></span>}
                </button>
              )
            })}
          </div>

          {!currentChecked && (
            <p className={`hint ${selectionLimitReached && isMultiAnswer ? 'is-warn' : ''}`} aria-live="polite">
              {isMultiAnswer
                ? selectionLimitReached
                  ? `${selectedAnswers.length} selected (maximum). Deselect one to change your choice.`
                  : `${selectedAnswers.length} of ${maxSelectableAnswers} selected.`
                : 'Select one answer.'}
            </p>
          )}

          {navigationError && <p className="alert" role="alert">{navigationError}</p>}

          <div className="quiz-actions">
            <button
              className="btn btn-secondary"
              onClick={onCheckAnswer}
              disabled={!selectedAnswers.length || !!currentChecked}
            >
              <ButtonIcon name="check" /> Check
            </button>
            <div className="btn-row">
              <button className="btn btn-ghost" onClick={onPrevious} disabled={currentIndex === 0} aria-label="Previous question">
                <ButtonIcon name="arrowLeft" /> <span className="hide-sm">Previous</span>
              </button>
              {isLast ? (
                <button className="btn btn-primary" onClick={onFinish}><ButtonIcon name="check" /> Finish</button>
              ) : (
                <button className="btn btn-primary" onClick={onNext}>Next <ButtonIcon name="arrowRight" /></button>
              )}
            </div>
          </div>
        </ArtifactPanel>

        <aside className="quiz-aside">
          <dl className="mini-stats">
            <div><dt>Correct</dt><dd>{correctCount}</dd></div>
            <div><dt>Remaining</dt><dd>{totalQuestions - currentIndex - 1}</dd></div>
            <div className="is-accent"><dt>Target</dt><dd>80%</dd></div>
          </dl>

          {currentChecked ? (
            <div className={`feedback ${currentChecked.isCorrect ? 'is-correct' : 'is-incorrect'}`} key={`fb-${currentIndex}`}>
              <h2>
                <ButtonIcon name={currentChecked.isCorrect ? 'check' : 'x'} />
                {currentChecked.isCorrect ? 'Correct answer' : 'Review this one'}
              </h2>
              <p>
                {currentQuestion.explanation ||
                  (currentChecked.isCorrect
                    ? 'Nice work — this one is correct.'
                    : 'Review the highlighted correct option and keep going.')}
              </p>
            </div>
          ) : (
            <div className="feedback is-idle">
              <h2><ButtonIcon name="sparkle" /> Explanation</h2>
              <p>Check your answer to reveal the explanation here.</p>
            </div>
          )}
        </aside>
      </main>
    </div>
  )
}

export default QuizPage
