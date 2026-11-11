import { useState } from 'react'
import AppHeader from '../components/AppHeader'
import ButtonIcon from '../components/ButtonIcon'
import StudyQuestionCard from '../components/StudyQuestionCard'

const PAGE_SIZE_OPTIONS = [10, 20, 50, 100]

function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1)

  const pages = new Set([1, totalPages, currentPage - 1, currentPage, currentPage + 1])
  return [...pages].filter((page) => page >= 1 && page <= totalPages).sort((a, b) => a - b)
}

function StudyPage({ questions, title, onBack, onDownloadUniquePdf }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [questionsPerPage, setQuestionsPerPage] = useState(PAGE_SIZE_OPTIONS[0])
  const [pageInput, setPageInput] = useState('1')
  const totalPages = Math.max(1, Math.ceil(questions.length / questionsPerPage))
  const firstQuestionIndex = (currentPage - 1) * questionsPerPage
  const pageQuestions = questions.slice(firstQuestionIndex, firstQuestionIndex + questionsPerPage)
  const pageNumbers = getPageNumbers(currentPage, totalPages)
  const pageStart = firstQuestionIndex + 1
  const pageEnd = Math.min(firstQuestionIndex + questionsPerPage, questions.length)

  const goToPage = (page) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages)
    setCurrentPage(nextPage)
    setPageInput(String(nextPage))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePageSizeChange = (event) => {
    const nextPageSize = Number(event.target.value)
    const firstVisibleQuestionIndex = (currentPage - 1) * questionsPerPage
    const nextPage = Math.floor(firstVisibleQuestionIndex / nextPageSize) + 1

    setQuestionsPerPage(nextPageSize)
    setCurrentPage(nextPage)
    setPageInput(String(nextPage))
  }

  const handlePageJump = (event) => {
    event.preventDefault()
    const page = Number(pageInput)
    if (Number.isInteger(page) && page >= 1 && page <= totalPages) goToPage(page)
  }

  return (
    <div className="page">
      <AppHeader
        onHome={onBack}
        crumbs={[title, 'Study']}
        actions={
          <button className="btn btn-ghost btn-sm" onClick={onBack}>
            <ButtonIcon name="arrowLeft" /> <span className="hide-sm">Sets</span>
          </button>
        }
      />

      <main className="container stack-lg">
        <section className="page-hero compact reveal">
          <div className="page-hero-copy">
            <span className="eyebrow"><ButtonIcon name="book" /> Study mode</span>
            <h1>{title}</h1>
            <p className="lead">Review each question, compare every option and learn at your own pace.</p>
          </div>
          <button className="btn btn-secondary" onClick={onDownloadUniquePdf}>
            <ButtonIcon name="download" /> Q&amp;A PDF
          </button>
        </section>

        <div className="study-toolbar reveal" style={{ '--delay': '60ms' }}>
          <div className="study-toolbar-info">
            <strong>{pageStart}–{pageEnd}</strong>
            <span>of {questions.length} questions · page {currentPage}/{totalPages}</span>
            <div className="progress" aria-hidden="true">
              <span style={{ width: `${(pageEnd / questions.length) * 100}%` }} />
            </div>
          </div>

          <div className="study-toolbar-controls">
            <label className="field">
              <span>Per page</span>
              <select value={questionsPerPage} onChange={handlePageSizeChange}>
                {PAGE_SIZE_OPTIONS.map((pageSize) => (
                  <option key={pageSize} value={pageSize}>{pageSize}</option>
                ))}
              </select>
            </label>
            <form className="field" onSubmit={handlePageJump}>
              <label htmlFor="study-page-input">Page</label>
              <input
                id="study-page-input"
                type="number"
                min="1"
                max={totalPages}
                required
                value={pageInput}
                onChange={(event) => setPageInput(event.target.value)}
              />
              <button className="icon-button" type="submit" aria-label="Go to page">
                <ButtonIcon name="arrowRight" />
              </button>
            </form>
          </div>
        </div>

        <div className="study-list" key={`${currentPage}-${questionsPerPage}`}>
          {pageQuestions.map((question, index) => (
            <StudyQuestionCard
              key={`${question.id}-${firstQuestionIndex + index + 1}`}
              question={question}
              questionNumber={firstQuestionIndex + index + 1}
              delay={Math.min(index, 8) * 40}
            />
          ))}
        </div>

        <nav className="pagination" aria-label="Study question pages">
          <button
            className="btn btn-ghost"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ButtonIcon name="arrowLeft" /> <span className="hide-sm">Previous</span>
          </button>
          <div className="page-numbers">
            {pageNumbers.map((page, index) => {
              const previousPage = pageNumbers[index - 1]
              return (
                <span className="page-number-group" key={page}>
                  {previousPage && page - previousPage > 1 && <span className="page-ellipsis">…</span>}
                  <button
                    className={`page-number ${page === currentPage ? 'active' : ''}`}
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
            className="btn btn-primary"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <span className="hide-sm">Next</span> <ButtonIcon name="arrowRight" />
          </button>
        </nav>
      </main>
    </div>
  )
}

export default StudyPage
