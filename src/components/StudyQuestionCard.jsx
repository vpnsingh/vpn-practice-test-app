function StudyQuestionCard({ question, questionNumber }) {
  const answers = Array.isArray(question.answer) ? question.answer : [question.answer]

  return (
    <article className="study-question-card">
      <div className="study-question-heading">
        <span className="study-question-number">{String(questionNumber).padStart(2, '0')}</span>
        <div>
          <span className="study-question-label">Question {questionNumber}</span>
          <h2>{question.question}</h2>
        </div>
        {answers.length > 1 && <span className="study-multi-answer">Choose {answers.length}</span>}
      </div>

      <ol className="study-choice-list">
        {question.options.map((option, optionIndex) => {
          const isCorrect = answers.includes(option)
          return (
            <li className={`study-choice ${isCorrect ? 'correct' : ''}`} key={`${optionIndex}-${option}`}>
              <span className="study-choice-letter">{String.fromCharCode(65 + optionIndex)}</span>
              <span>{option}</span>
              {isCorrect && <span className="study-correct-label">Correct answer</span>}
            </li>
          )
        })}
      </ol>

      {question.explanation && (
        <div className="study-explanation">
          <strong>Why this is correct</strong>
          <p>{question.explanation}</p>
        </div>
      )}
    </article>
  )
}

export default StudyQuestionCard
