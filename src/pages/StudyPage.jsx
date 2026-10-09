import { useState } from 'react'
import StudyQuestionCard from '../components/StudyQuestionCard'

const QUESTIONS_PER_PAGE = 10

function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1)

  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1])
  return [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b)
}

function StudyPage({ questions, title, onBack }) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(questions.length / QUESTIONS_PER_PAGE)
  const firstQuestionIndex = (currentPage - 1) * QUESTIONS_PER_PAGE
  const pageQuestions = questions.slice(firstQuestionIndex, firstQuestionIndex + QUESTIONS_PER_PAGE)
  const pageNumbers = getPageNumbers(currentPage, totalPages)
  const pageStart = firstQuestionIndex + 1
  const pageEnd = Math.min(firstQuestionIndex + QUESTIONS_PER_PAGE, questions.length)

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell study-screen">
      <main className="card study-page">
        <header className="study-page-header">
          <div className="study-heading">
            <p className="eyebrow">Study mode</p>
            <h1>{title}</h1>
            <p>Review the questions, compare every option, and learn at your own pace.</p>
          </div>
          <button className="ghost-button" onClick={onBack}>
            Back to sets
          </button>
        </header>

        <section className="study-progress" aria-label="Study progress">
          <div>
            <span className="study-progress-icon" aria-hidden="true">📖</span>
            <span><strong>{questions.length}</strong> questions in this set</span>
          </div>
          <span className="study-page-count">Page {currentPage} of {totalPages}</span>
          <div className="study-progress-track" aria-hidden="true">
            <span style={{ width: `${(currentPage / totalPages) * 100}%` }} />
          </div>
          <p>Showing questions {pageStart}–{pageEnd}</p>
        </section>

        <div className="study-question-list">
          {pageQuestions.map((question, index) => (
            <StudyQuestionCard
              key={`${question.id}-${firstQuestionIndex + index + 1}`}
              question={question}
              questionNumber={firstQuestionIndex + index + 1}
            />
          ))}
        </div>

        <nav className="study-pagination" aria-label="Study question pages">
          <button
            className="secondary-button"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>
          <div className="study-page-numbers">
            {pageNumbers.map((page, index) => {
              const previousPage = pageNumbers[index - 1]
              return (
                <span className="study-page-number-group" key={page}>
                  {previousPage && page - previousPage > 1 && <span className="study-page-ellipsis">…</span>}
                  <button
                    className={`study-page-number ${page === currentPage ? 'active' : ''}`}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? 'page' : undefined}
                    onClick={() => goToPage(page)}
                  >
                    {page}
                  </button>
                </span>
              )
            })}
          </div>
          <button
            className="primary-button"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </nav>
      </main>
    </div>
  )
}

export default StudyPage
