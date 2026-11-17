import AppHeader from '../components/AppHeader'
import ButtonIcon from '../components/ButtonIcon'

const STUDY_COURSE_LINKS = [
  {
    testKey: 'gh300',
    label: 'GitHub Copilot Fundamentals',
    href: 'https://learn.microsoft.com/en-us/credentials/certifications/github-copilot/?practice-assessment-type=certification'
  },
  {
    testKey: 'gh300',
    label: 'GH-300 Study Guide',
    href: 'https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/gh-300'
  },
  {
    testKey: 'claude-associate',
    label: 'Claude Associate Path',
    href: 'https://anthropic-partners.skilljar.com/path/claude-associate'
  },
  {
    testKey: 'claude-developer',
    label: 'Claude Developer Path',
    href: 'https://anthropic-partners.skilljar.com/path/claude-developer'
  },
  {
    testKey: 'claude',
    label: 'Anthropic Courses',
    href: 'https://anthropic.skilljar.com/'
  }
]

function SetSelectionPage({
  test,
  mode,
  parts,
  sets,
  onModeChange,
  onBack,
  onStartPractice,
  onStartStudy,
  onDownloadUniquePdf
}) {
  const isGh300 = test.key === 'gh300'
  const isClaudeDeveloper = test.key === 'claude-developer'
  const isClaudeCertification = test.key === 'claude-associate' || isClaudeDeveloper
  const isStudy = mode === 'study'
  const trackCode = isGh300 ? 'GH-300' : isClaudeDeveloper ? 'CCDV-F' : 'Claude Associate'
  const courseLinks = STUDY_COURSE_LINKS.filter((course) =>
    course.testKey === test.key || (course.testKey === 'claude' && isClaudeCertification)
  )

  const items = isGh300
    ? parts.map((part) => ({
        key: part.key,
        label: part.key,
        ready: true,
        count: part.count,
        description: part.label
      }))
    : isClaudeCertification
      ? sets.map((set) => ({
          key: set.key,
          label: set.ready ? set.label : 'Coming soon',
          ready: set.ready,
          count: set.ready ? set.questions.length : 0,
          description: set.description
        }))
      : []

  const readyCount = items.filter((item) => item.ready).length
  const totalQuestions = isGh300 ? 180 : items.reduce(
    (sum, item) => sum + (item.ready && item.key !== 'set-unique' ? item.count : 0),
    0
  )

  const handleStart = (item) => {
    if (!item.ready) return
    if (isStudy) onStartStudy(item.key)
    else onStartPractice(item.key)
  }

  return (
    <div className="page">
      <AppHeader
        onHome={onBack}
        crumbs={[test.name]}
        actions={
          <button className="btn btn-ghost btn-sm" onClick={onBack}>
            <ButtonIcon name="arrowLeft" /> <span className="hide-sm">Home</span>
          </button>
        }
      />

      <main className="container stack-lg">
        <section className="page-hero reveal">
          <div className="page-hero-copy">
            <span className="eyebrow">
              <ButtonIcon name={isStudy ? 'book' : 'target'} />
              {isStudy ? 'Study library' : 'Practice section'}
            </span>
            <h1>{test.name}</h1>
            <p className="lead">
              {isStudy
                ? 'Questions are shown in order with the correct answers clearly marked. Learn at your own pace.'
                : test.description}
            </p>
            <div className="tag-row">
              <span className="tag"><ButtonIcon name="check" /> {isStudy ? 'Answers revealed' : 'Instant feedback'}</span>
              <span className="tag"><ButtonIcon name="check" /> {trackCode} content</span>
            </div>
          </div>

          <dl className="hero-stats">
            <div><dt>{isGh300 ? 'Questions' : 'Total questions'}</dt><dd>{totalQuestions}</dd></div>
            <div><dt>Collections</dt><dd>{readyCount}</dd></div>
          </dl>
        </section>

        <div className="toolbar reveal" style={{ '--delay': '80ms' }}>
          <div
            className={`segmented ${isStudy ? 'is-second' : ''}`}
            role="group"
            aria-label="Choose a learning mode"
          >
            <span className="segmented-thumb" aria-hidden="true" />
            <button aria-pressed={!isStudy} className={!isStudy ? 'active' : ''} onClick={() => onModeChange('practice')}>
              <ButtonIcon name="play" /> Practice quiz
            </button>
            <button aria-pressed={isStudy} className={isStudy ? 'active' : ''} onClick={() => onModeChange('study')}>
              <ButtonIcon name="book" /> Study Materials
            </button>
          </div>
        </div>

        {isStudy && (
          <>
            <section className="stack" aria-labelledby="course-links-heading">
              <div className="section-head">
                <h2 id="course-links-heading">Courses Links</h2>
              </div>
              {courseLinks.length > 0 && (
                <div className="grid study-course-links">
                  {courseLinks.map((course) => (
                    <a
                      className="study-course-link"
                      href={course.href}
                      key={course.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span>{course.label}</span>
                      <ButtonIcon name="open" />
                    </a>
                  ))}
                </div>
              )}
            </section>

            <section className="stack" aria-labelledby="study-pdf-heading">
              <div className="section-head">
                <h2 id="study-pdf-heading">Download Question Answer PDF</h2>
              </div>
              <button className="btn btn-secondary btn-sm study-pdf-button" onClick={onDownloadUniquePdf}>
                <ButtonIcon name="download" /> Download Complete Q&amp;A Sets PDF
              </button>
            </section>
          </>
        )}

        {items.length ? (
          <section className="stack" aria-labelledby="set-list-heading">
            <div className="section-head">
              <h2 id="set-list-heading">{isGh300 ? 'Question parts' : 'Question sets'}</h2>
              <span className="chip chip-muted">{readyCount} available</span>
            </div>

            <div className="grid grid-sets" key={mode}>
              {items.map((item, index) => (
                <button
                  key={item.key}
                  className={`set-card reveal ${item.ready ? '' : 'is-disabled'}`}
                  style={{ '--delay': `${index * 45}ms` }}
                  onClick={() => handleStart(item)}
                  disabled={!item.ready}
                >
                  <span className="set-card-top">
                    <span className="set-card-label">{item.label}</span>
                    <span className="set-card-index">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <strong className="set-card-count">
                    {item.ready ? (item.count ? `${item.count}` : '—') : '—'}
                    <small>{item.ready ? (item.count ? 'questions' : 'unique questions') : 'not available'}</small>
                  </strong>
                  <span className="set-card-desc">
                    {isStudy ? 'Read questions and answers in order' : item.description}
                  </span>
                  <span className="set-card-action">
                    {item.ready ? (isStudy ? 'Start learning' : 'Start practice') : 'Coming soon'}
                    <ButtonIcon name={item.ready ? 'arrowRight' : 'clock'} />
                  </span>
                </button>
              ))}
            </div>
          </section>
        ) : (
          <section className="empty-state reveal">
            <span className="feature-icon"><ButtonIcon name="clock" /></span>
            <h2>New practice content is coming soon.</h2>
            <p>Once available, this track will use the same study and quiz experience.</p>
            <button className="btn btn-primary" onClick={onBack}><ButtonIcon name="home" /> Return to dashboard</button>
          </section>
        )}
      </main>
    </div>
  )
}

export default SetSelectionPage
