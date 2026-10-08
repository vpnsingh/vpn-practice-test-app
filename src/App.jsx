import { useMemo, useState } from 'react'
import { quizQuestions } from './data/questions'
import { claudeAssociateQuestions } from './data/claudeAssociateSet2'
import { claudeAssociateSet1Questions } from './data/claudeAssociateSet1'
import { claudeAssociateSet3Questions } from './data/claudeAssociateSet3'
import { claudeAssociateSet4Questions } from './data/claudeAssociateSet4'
import { claudeAssociateSet5Questions } from './data/claudeAssociateSet5'
import { claudeAssociateSet6Questions } from './data/claudeAssociateSet6'
import { claudeAssociateUniqueQuestions } from './data/claudeAssociateUniqueSet'

const shuffleQuestions = (questions) => {
  const copy = [...questions]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const PARTS = [
  { key: 'Part 1', label: 'Part 1 - 60 questions', start: 0, count: 60 },
  { key: 'Part 2', label: 'Part 2 - 60 questions', start: 60, count: 60 },
  { key: 'Part 3', label: 'Part 3 - 60 questions', start: 120, count: 60 },
  { key: 'Full 180', label: 'Full 180 questions', start: 0, count: 180 },
  { key: 'Unique', label: 'Unique', start: 0, count: 0 }
]

const CLAUDE_ASSOCIATE_SETS = [
  {
    key: 'set-1',
    label: 'Set 1',
    description: 'Provided Claude Associate set from the supplied question data.',
    ready: true,
    questions: claudeAssociateSet1Questions
  },
  {
    key: 'set-2',
    label: 'Set 2',
    description: 'Provided Claude Associate set from the supplied Word document.',
    ready: true,
    questions: claudeAssociateQuestions
  },
  {
    key: 'set-3',
    label: 'Set 3',
    description: 'Provided Claude Associate set from the supplied question data.',
    ready: true,
    questions: claudeAssociateSet3Questions
  },
  {
    key: 'set-4',
    label: 'Set 4',
    description: 'Provided Claude Associate set from the supplied question data.',
    ready: true,
    questions: claudeAssociateSet4Questions
  },
  {
    key: 'set-5',
    label: 'Set 5',
    description: 'Provided Claude Associate set from the supplied question data.',
    ready: true,
    questions: claudeAssociateSet5Questions
  },
  {
    key: 'set-6',
    label: 'Set 6',
    description: 'Provided Claude Associate set from the supplied question data.',
    ready: true,
    questions: claudeAssociateSet6Questions
  },
  {
    key: 'set-unique',
    label: 'Unique Set',
    description: 'Combined deduplicated set compiled from Sets 1 through 6.',
    ready: true,
    questions: claudeAssociateUniqueQuestions
  }
]

const PRACTICE_TESTS = [
  {
    key: 'gh300',
    name: 'GH-300 Quiz',
    description: 'Practice your Microsoft GH-300 exam content with multiple part-based study paths.',
    status: 'Available',
    ready: true
  },
  {
    key: 'claude-associate',
    name: 'Claude Associate',
    description: 'Practice the supplied Claude Associate question set with a dedicated study flow.',
    status: 'Available',
    ready: true
  },
  {
    key: 'claude-developer',
    name: 'Claude Developer',
    description: 'Future practice test for Claude Developer-focused prompts, workflows, and coding challenges.',
    status: 'Coming soon',
    ready: false
  }
]

function App() {
  const [mode, setMode] = useState('home')
  const [selectedTest, setSelectedTest] = useState('gh300')
  const [activeQuestions, setActiveQuestions] = useState([])
  const [selectedPart, setSelectedPart] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [checkedAnswers, setCheckedAnswers] = useState({})
  const [showSummary, setShowSummary] = useState(false)

  const currentQuestion = activeQuestions[currentIndex]
  const currentChecked = currentQuestion ? checkedAnswers[currentQuestion.id] : undefined
  const totalQuestions = activeQuestions.length
  const correctCount = useMemo(
    () => Object.values(checkedAnswers).filter((result) => result.isCorrect).length,
    [checkedAnswers]
  )
  const selectedPracticeTest = PRACTICE_TESTS.find((test) => test.key === selectedTest) || PRACTICE_TESTS[0]

  const percentage = totalQuestions ? Math.round((correctCount / totalQuestions) * 100) : 0
  const passed = percentage >= 80
  const correctAnswers = currentQuestion
    ? Array.isArray(currentQuestion.answer)
      ? currentQuestion.answer
      : [currentQuestion.answer]
    : []
  const isMultiAnswer = correctAnswers.length > 1

  const selectedAnswers = currentChecked
    ? Array.isArray(currentChecked.selected)
      ? currentChecked.selected
      : [currentChecked.selected]
    : selectedOptions

  const startQuiz = (partKey) => {
    const part = PARTS.find((item) => item.key === partKey)

    if (partKey === 'Unique') {
      const uniqueMap = new Map()
      quizQuestions.forEach((q) => {
        if (!uniqueMap.has(q.question)) uniqueMap.set(q.question, q)
      })
      const uniqueQuestions = shuffleQuestions(Array.from(uniqueMap.values()))
      setSelectedPart(`Unique - ${uniqueQuestions.length} questions`)
      setActiveQuestions(uniqueQuestions)
    } else {
      const shuffled = shuffleQuestions(quizQuestions)
      const questions = part.count === 180 ? shuffled : shuffled.slice(part.start, part.start + part.count)
      setSelectedPart(partKey)
      setActiveQuestions(questions)
    }

    setCurrentIndex(0)
    setSelectedOptions([])
    setCheckedAnswers({})
    setShowSummary(false)
    setMode('quiz')
  }

  const startClaudeAssociateSet = (setKey) => {
    const set = CLAUDE_ASSOCIATE_SETS.find((item) => item.key === setKey)
    if (!set || !set.ready || !set.questions.length) return

    setSelectedPart(`Claude Associate - ${set.label}`)
    setActiveQuestions(shuffleQuestions(set.questions))
    setCurrentIndex(0)
    setSelectedOptions([])
    setCheckedAnswers({})
    setShowSummary(false)
    setMode('quiz')
  }

  const handleOpenTest = (testKey) => {
    const test = PRACTICE_TESTS.find((item) => item.key === testKey)
    if (!test || !test.ready) return

    setSelectedTest(testKey)
    setMode('section')
  }

  const saveCurrentSelection = () => {
    if (!selectedOptions.length || !currentQuestion || currentChecked) return
    const normalizedSelected = selectedOptions
    const isCorrect =
      normalizedSelected.length === correctAnswers.length &&
      correctAnswers.every((answer) => normalizedSelected.includes(answer))

    setCheckedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: {
        selected: normalizedSelected,
        isCorrect
      }
    }))
  }

  const handleOptionSelect = (option) => {
    if (showSummary || currentChecked) return
    if (isMultiAnswer) {
      setSelectedOptions((prev) =>
        prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
      )
      return
    }
    setSelectedOptions([option])
  }

  const handleCheckAnswer = () => {
    if (!selectedOptions.length) return
    saveCurrentSelection()
  }

  const handleNavigation = (direction) => {
    saveCurrentSelection()
    setSelectedOptions([])
    setShowSummary(false)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + direction
      return Math.min(Math.max(nextIndex, 0), totalQuestions - 1)
    })
  }

  const handleFinish = () => {
    saveCurrentSelection()
    setShowSummary(true)
  }

  const handleRestart = () => {
    if (!selectedPart) {
      setMode('home')
      return
    }

    if (selectedPart.startsWith('Claude Associate')) {
      if (selectedPart.includes('Unique Set')) {
        startClaudeAssociateSet('set-unique')
        return
      }

      const match = selectedPart.match(/Set\s+(\d+)/i)
      const setKey = match ? `set-${match[1].toLowerCase()}` : null
      if (setKey) {
        startClaudeAssociateSet(setKey)
        return
      }
    }

    startQuiz(selectedPart)
  }

  if (mode === 'home') {
    return (
      <div className="app-shell home-screen">
        <div className="card home-card">
          <div className="home-topbar">
            <div className="brand-lockup">
              <span className="brand-badge">VPN</span>
              <span className="brand-text">Practice Test App</span>
            </div>
            <div className="status-pill">Live prep dashboard</div>
          </div>

          <div className="home-layout">
            <div className="hero-copy-panel">
              <p className="eyebrow">Certified readiness</p>
              <h1>Practice with purpose. Pass with confidence.</h1>
              <p className="lead">
                Build exam confidence through structured GH-300 and Claude Associate practice sets designed to keep your learning focused, measurable, and momentum-driven.
              </p>

              <div className="cta-row">
                <button className="primary-button" onClick={() => handleOpenTest('gh300')}>
                  Start GH-300
                </button>
                <button className="secondary-button" onClick={() => handleOpenTest('claude-associate')}>
                  Explore Claude sets
                </button>
              </div>

              <div className="metrics-strip">
                <div className="metric-box">
                  <strong>3</strong>
                  <span>Tracks</span>
                </div>
                <div className="metric-box">
                  <strong>180</strong>
                  <span>GH-300</span>
                </div>
                <div className="metric-box">
                  <strong>80%</strong>
                  <span>Pass goal</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-panel" aria-label="Practice dashboard illustration">
              <svg className="hero-illustration" viewBox="0 0 520 440" role="img" aria-hidden="true">
                <defs>
                  <linearGradient id="heroGlow" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#7c6df5" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                  <linearGradient id="heroPanel" x1="0%" x2="100%" y1="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#edf2ff" stopOpacity="0.7" />
                  </linearGradient>
                </defs>

                <circle cx="260" cy="220" r="170" fill="url(#heroGlow)" opacity="0.12" />
                <circle cx="260" cy="220" r="138" fill="none" stroke="rgba(124,109,245,0.35)" strokeWidth="1.5" strokeDasharray="8 12" className="orbit orbit-large" />
                <circle cx="260" cy="220" r="96" fill="none" stroke="rgba(20,184,166,0.35)" strokeWidth="1.5" strokeDasharray="5 10" className="orbit orbit-small" />

                <g className="floating-node node-1">
                  <circle cx="130" cy="120" r="9" fill="#4f46e5" />
                </g>
                <g className="floating-node node-2">
                  <circle cx="370" cy="130" r="11" fill="#14b8a6" />
                </g>
                <g className="floating-node node-3">
                  <circle cx="390" cy="300" r="8" fill="#a78bfa" />
                </g>

                <g className="dashboard-card">
                  <rect x="150" y="120" width="220" height="160" rx="28" fill="url(#heroPanel)" stroke="rgba(79,70,229,0.18)" />
                  <rect x="178" y="150" width="120" height="12" rx="6" fill="rgba(79,70,229,0.18)" />
                  <rect x="178" y="174" width="150" height="12" rx="6" fill="rgba(148,163,184,0.2)" />
                  <rect x="178" y="202" width="74" height="12" rx="6" fill="rgba(20,184,166,0.2)" />
                  <rect x="178" y="232" width="160" height="12" rx="6" fill="rgba(148,163,184,0.2)" />
                  <circle cx="315" cy="184" r="34" fill="url(#heroGlow)" opacity="0.92" />
                  <path d="M305 184l7 8 18-20" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                <g className="mini-panel">
                  <rect x="82" y="260" width="120" height="70" rx="18" fill="rgba(255,255,255,0.78)" stroke="rgba(79,70,229,0.12)" />
                  <rect x="110" y="286" width="54" height="8" rx="4" fill="rgba(79,70,229,0.18)" />
                  <rect x="110" y="304" width="62" height="8" rx="4" fill="rgba(148,163,184,0.22)" />
                </g>

                <g className="mini-panel">
                  <rect x="320" y="260" width="126" height="70" rx="18" fill="rgba(255,255,255,0.78)" stroke="rgba(20,184,166,0.15)" />
                  <rect x="348" y="284" width="64" height="8" rx="4" fill="rgba(20,184,166,0.2)" />
                  <rect x="348" y="302" width="52" height="8" rx="4" fill="rgba(148,163,184,0.22)" />
                </g>
              </svg>
            </div>
          </div>

          <div className="feature-row">
            <div className="feature-card">
              <span>Study flow</span>
              <strong>Smart quizzes</strong>
              <p>Practice by part, by set, or through a full mixed challenge.</p>
            </div>
            <div className="feature-card highlight-card">
              <span>Focus</span>
              <strong>Immediate feedback</strong>
              <p>Review explanations fast and sharpen the concepts that matter most.</p>
            </div>
            <div className="feature-card">
              <span>Progress</span>
              <strong>Track confidence</strong>
              <p>Measure your score, revisit weak areas, and keep momentum high.</p>
            </div>
          </div>

          <div className="test-grid">
            {PRACTICE_TESTS.map((test) => (
              <div key={test.key} className={`test-card ${test.ready ? 'ready' : 'coming-soon'}`}>
                <div className="test-card-header">
                  <span className={`status-badge ${test.ready ? 'ready' : 'coming-soon'}`}>{test.status}</span>
                </div>
                <h2>{test.name}</h2>
                <p>{test.description}</p>

                {test.ready ? (
                  <button className="primary-button full-width" onClick={() => handleOpenTest(test.key)}>
                    Open test
                  </button>
                ) : (
                  <button className="secondary-button full-width disabled" disabled>
                    Coming soon
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="home-footer">
            <p>Best score wins! ✅ Pass with 80% or more.</p>
          </div>
        </div>
      </div>
    )
  }

  if (mode === 'section') {
    return (
      <div className="app-shell section-screen">
        <div className="card section-card">
          <div className="section-topbar">
            <div>
              <p className="eyebrow">Practice section</p>
              <h1>{selectedPracticeTest.name}</h1>
            </div>
            <button className="ghost-button" onClick={() => setMode('home')}>
              Back home
            </button>
          </div>

          <div className="section-hero">
            <div className="section-copy">
              <p>{selectedPracticeTest.description}</p>
              <div className="pill-row">
                <span className="pill active">{selectedPracticeTest.status}</span>
                {selectedPracticeTest.key === 'gh300' && <span className="pill">Part-based study</span>}
              </div>
            </div>

            <div className="section-summary-box">
              {selectedPracticeTest.key === 'gh300' ? (
                <>
                  <strong>GH-300 pack</strong>
                  <span>Full 180-question bank</span>
                  <small>Practice by part or take the full challenge.</small>
                </>
              ) : selectedPracticeTest.key === 'claude-associate' ? (
                <>
                  <strong>Claude Associate</strong>
                  <span>Multiple available sets</span>
                  <small>Choose any ready set to begin practicing.</small>
                </>
              ) : (
                <>
                  <strong>Question bank</strong>
                  <span>Content pending</span>
                  <small>New question set will be added here when ready.</small>
                </>
              )}
            </div>
          </div>

          {selectedPracticeTest.key === 'gh300' ? (
            <div className="study-grid">
              {PARTS.map((part) => (
                <button key={part.key} className="study-card" onClick={() => startQuiz(part.key)}>
                  <span className="study-label">{part.key}</span>
                  <strong>{part.count ? `${part.count} questions` : 'Custom set'}</strong>
                  <small>{part.label}</small>
                </button>
              ))}
            </div>
          ) : selectedPracticeTest.key === 'claude-associate' ? (
            <div className="study-grid">
              {CLAUDE_ASSOCIATE_SETS.map((set) => (
                <button
                  key={set.key}
                  className={`study-card ${set.ready ? '' : 'disabled-set'}`}
                  onClick={() => set.ready && startClaudeAssociateSet(set.key)}
                  disabled={!set.ready}
                >
                  <span className="study-label">{set.ready ? set.label : 'Coming soon'}</span>
                  <strong>{set.ready ? `${set.questions.length} questions` : 'Not available'}</strong>
                  <small>{set.description}</small>
                </button>
              ))}
            </div>
          ) : (
            <div className="coming-soon-panel">
              <h2>New practice content is coming soon.</h2>
              <p>
                This section is ready for the next question set. Once you provide the Claude Developer questions,
                they can be plugged into the same quiz experience automatically.
              </p>
              <button className="primary-button" onClick={() => setMode('home')}>
                Return to dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (showSummary) {
    return (
      <div className="app-shell">
        <div className="card summary-card">
          <div className="summary-badge">Quiz Complete</div>
          <h1>{selectedPart} Results</h1>
          <div className="summary-grid">
            <div>
              <span>{percentage}%</span>
              <p>Score</p>
            </div>
            <div>
              <span>{correctCount}</span>
              <p>Correct</p>
            </div>
            <div>
              <span>{totalQuestions - correctCount}</span>
              <p>Incorrect</p>
            </div>
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

          <div className="action-row summary-actions">
            <button className="secondary-button" onClick={() => setMode('home')}>
              Home
            </button>
            <button className="primary-button" onClick={handleRestart}>
              Restart this part
            </button>
          </div>
        </div>
      </div>
    )
  }

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
                    onClick={() => handleOptionSelect(option)}
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
            <div className="mini-stat">
              <span>Correct</span>
              <strong>{correctCount}</strong>
            </div>
            <div className="mini-stat">
              <span>Remaining</span>
              <strong>{totalQuestions - currentIndex - 1}</strong>
            </div>
            <div className="mini-stat accent">
              <span>Pass target</span>
              <strong>80%</strong>
            </div>

            {currentChecked && (
              <div className={`answer-card ${currentChecked.isCorrect ? 'correct' : 'incorrect'}`}>
                <h2>{currentChecked.isCorrect ? '✅ Correct answer' : '❌ Review this one'}</h2>
                <p>{currentQuestion.explanation || (currentChecked.isCorrect ? 'Nice work—this one is correct.' : 'This one is incorrect. Review the answer and keep going!')}</p>
              </div>
            )}
          </aside>
        </div>

        <div className="action-row">
          <button className="secondary-button" onClick={handleCheckAnswer} disabled={!selectedOptions.length || !!currentChecked}>
            Check Answer
          </button>
          <div className="nav-buttons">
            <button className="ghost-button" onClick={() => setMode('home')}>
              🏠 Home
            </button>
            <button className="secondary-button" onClick={() => handleNavigation(-1)} disabled={currentIndex === 0}>
              Previous
            </button>
            {currentIndex < totalQuestions - 1 ? (
              <button className="primary-button" onClick={() => handleNavigation(1)}>
                Next
              </button>
            ) : (
              <button className="primary-button" onClick={handleFinish}>
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
