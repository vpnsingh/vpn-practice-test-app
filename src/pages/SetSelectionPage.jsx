import ButtonIcon from '../components/ButtonIcon'

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
  const isClaudeAssociate = test.key === 'claude-associate'

  return (
    <div className="app-shell section-screen">
      <main className="card section-card">
        <header className="section-topbar">
          <div>
            <p className="eyebrow">{mode === 'study' ? 'Study library' : 'Practice section'}</p>
            <h1>{test.name}</h1>
          </div>
          <button className="ghost-button" onClick={onBack}><ButtonIcon name="arrowLeft" /> Back Home</button>
        </header>

        <section className="set-selection-hero">
          <div className="set-selection-copy">
            <span className="set-selection-kicker">{mode === 'study' ? 'LEARN AT YOUR OWN PACE' : 'PREPARE WITH CONFIDENCE'}</span>
            <h2>{mode === 'study' ? 'Choose a question collection to study' : 'Choose where to begin'}</h2>
            <p>
              {mode === 'study'
                ? 'Questions are presented in order, ten at a time, with the correct answers clearly marked.'
                : test.description}
            </p>
            <div className="set-selection-tags">
              <span>✓ {mode === 'study' ? 'Answers Revealed' : 'Instant Feedback'}</span>
              <span>✓ {isGh300 ? 'GH-300' : 'Claude Associate'} Content</span>
            </div>
          </div>
          <div className="set-selection-stat">
            <span className="set-stat-icon" aria-hidden="true">{mode === 'study' ? '📚' : '🎯'}</span>
            <strong>{isGh300 ? '180' : `${sets.filter((set) => set.ready).length}`}</strong>
            <span>{isGh300 ? 'GH-300 questions' : 'available sets'}</span>
            <small>{mode === 'study' ? 'Read and learn' : 'Pick your challenge'}</small>
          </div>
        </section>

        <div className="mode-switch" role="group" aria-label="Choose a learning mode">
          <button
            className={mode === 'practice' ? 'active' : ''}
            aria-pressed={mode === 'practice'}
            onClick={() => onModeChange('practice')}
          >
            <ButtonIcon name="play" /> Practice Quiz
          </button>
          <button
            className={mode === 'study' ? 'active' : ''}
            aria-pressed={mode === 'study'}
            onClick={() => onModeChange('study')}
          >
            <ButtonIcon name="book" /> Study Questions
          </button>
        </div>

        <section className="set-list-section" aria-labelledby="set-list-heading">
          <div className="set-list-heading">
            <div>
              <h2 id="set-list-heading">{isGh300 ? 'GH-300 question parts' : 'Claude Associate sets'}</h2>
              <p>{isGh300 ? 'Choose a part, the full question bank, or a deduplicated set.' : 'Select one of the available question collections.'}</p>
            </div>
            <div className="set-list-actions">
              {mode === 'study' && (
                <button className="secondary-button download-pdf-button" onClick={onDownloadUniquePdf}>
                  <ButtonIcon name="download" /> Download Q&amp;A PDF
                </button>
              )}
              <span className="set-count-badge">{isGh300 ? `${parts.length} collections` : `${sets.filter((set) => set.ready).length} sets`}</span>
            </div>
          </div>

          {isGh300 ? (
            <div className="study-grid set-selection-grid">
              {parts.map((part, index) => (
                <button
                  key={part.key}
                  className="study-card set-selection-card"
                  onClick={() => mode === 'study' ? onStartStudy(part.key) : onStartPractice(part.key)}
                >
                  <span className="set-card-topline">
                    <span className="study-label">{part.key}</span>
                    <span className="set-card-index">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <strong>{part.count ? `${part.count} Questions` : 'Unique Questions'}</strong>
                  <small>{mode === 'study' ? 'Read Questions And Answers In Order' : part.label}</small>
                  <span className="set-card-action">{mode === 'study' ? 'Start Learning' : 'Start Practice'} <ButtonIcon name="arrowRight" /></span>
                </button>
              ))}
            </div>
          ) : isClaudeAssociate ? (
            <div className="study-grid set-selection-grid">
              {sets.map((set, index) => (
                <button
                  key={set.key}
                  className={`study-card set-selection-card ${set.ready ? '' : 'disabled-set'}`}
                  onClick={() => {
                    if (!set.ready) return
                    if (mode === 'study') onStartStudy(set.key)
                    else onStartPractice(set.key)
                  }}
                  disabled={!set.ready}
                >
                  <span className="set-card-topline">
                    <span className="study-label">{set.ready ? set.label : 'Coming Soon'}</span>
                    <span className="set-card-index">{String(index + 1).padStart(2, '0')}</span>
                  </span>
                  <strong>{set.ready ? `${set.questions.length} Questions` : 'Not Available'}</strong>
                  <small>{mode === 'study' ? 'Read Questions And Answers In Order' : set.description}</small>
                  <span className="set-card-action">{set.ready ? (mode === 'study' ? 'Start Learning' : 'Start Practice') : 'Coming Soon'} {set.ready ? <ButtonIcon name="arrowRight" /> : <ButtonIcon name="clock" />}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="coming-soon-panel">
              <h2>New practice content is coming soon.</h2>
              <p>This section is ready for the next question set. Once it is available, it can use the same study and quiz experience.</p>
              <button className="primary-button" onClick={onBack}><ButtonIcon name="home" /> Return to Dashboard</button>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default SetSelectionPage
