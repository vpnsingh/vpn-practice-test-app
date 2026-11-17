import ButtonIcon from './ButtonIcon'
import { getCorrectOptionLetters } from '../utils/getCorrectOptionLetters'

function StudyQuestionCard({ question, questionNumber, delay = 0 }) {
  const answers = Array.isArray(question.answer) ? question.answer : [question.answer]
  const correctOptionLetters = getCorrectOptionLetters(question)
  const correctOptionLabel = correctOptionLetters.length === 1 ? 'Correct Option' : 'Correct Options'

  return (
    <article className="study-card reveal" style={{ '--delay': `${delay}ms` }}>
      <header className="study-card-head">
        <span className="study-num">{String(questionNumber).padStart(2, '0')}</span>
        <h2>{question.question}</h2>
        {answers.length > 1 && <span className="chip chip-clay">Choose {answers.length}</span>}
      </header>

      <ol className="study-choices">
        {question.options.map((option, optionIndex) => {
          const isCorrect = answers.includes(option)
          return (
            <li className={`study-choice ${isCorrect ? 'is-correct' : ''}`} key={`${optionIndex}-${option}`}>
              <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
              <span className="option-text">{option}</span>
              {isCorrect && <span className="option-state"><ButtonIcon name="check" /></span>}
            </li>
          )
        })}
      </ol>

      {question.explanation && (
        <details className="study-explain" open>
          <summary><ButtonIcon name="sparkle" /> Explanation</summary>
          <p><strong>{correctOptionLabel}:</strong> {correctOptionLetters.join(', ')}</p>
          <p><strong>Why:</strong> {question.explanation}</p>
        </details>
      )}
    </article>
  )
}

export default StudyQuestionCard
