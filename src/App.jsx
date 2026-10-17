import { useMemo, useState } from 'react'
import { CLAUDE_ASSOCIATE_SETS, getGh300Questions, PARTS, PRACTICE_TESTS } from './data/testCatalog'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultsPage from './pages/ResultsPage'
import SetSelectionPage from './pages/SetSelectionPage'
import StudyPage from './pages/StudyPage'

const shuffleQuestions = (questions) => {
  const copy = [...questions]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const GH300_PARTS = PARTS.map((part) => ({
  ...part,
  count: part.key === 'Unique' ? getGh300Questions('Unique').length : part.count
}))

function App() {
  const [mode, setMode] = useState('home')
  const [selectedTest, setSelectedTest] = useState('gh300')
  const [sectionMode, setSectionMode] = useState('practice')
  const [activeQuestions, setActiveQuestions] = useState([])
  const [selectedPart, setSelectedPart] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [navigationError, setNavigationError] = useState('')
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
  const downloadUniquePdf = async () => {
    const questions = selectedPracticeTest.key === 'gh300'
      ? getGh300Questions('Unique')
      : CLAUDE_ASSOCIATE_SETS.find((set) => set.key === 'set-unique').questions
    const { downloadQuestionsPdf } = await import('./utils/downloadQuestionsPdf')
    downloadQuestionsPdf(questions, `${selectedPracticeTest.name} Unique Questions and Answers`)
  }
  const downloadResultsPdf = async () => {
    const { downloadQuizResultsPdf } = await import('./utils/downloadQuestionsPdf')
    downloadQuizResultsPdf({
      title: selectedPart,
      percentage,
      correctCount,
      totalQuestions,
      passed,
      questions: activeQuestions,
      checkedAnswers
    })
  }

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
    if (partKey === 'Unique') {
      const uniqueQuestions = shuffleQuestions(getGh300Questions('Unique'))
      setSelectedPart(`Unique - ${uniqueQuestions.length} questions`)
      setActiveQuestions(uniqueQuestions)
    } else {
      const part = PARTS.find((item) => item.key === partKey)
      if (!part) return

      const shuffled = shuffleQuestions(getGh300Questions('Full 180'))
      const questions = part.count === 180 ? shuffled : shuffled.slice(part.start, part.start + part.count)
      setSelectedPart(partKey)
      setActiveQuestions(questions)
    }

    setCurrentIndex(0)
    setSelectedOptions([])
    setNavigationError('')
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
    setNavigationError('')
    setCheckedAnswers({})
    setShowSummary(false)
    setMode('quiz')
  }

  const startStudyQuestions = (questions, label) => {
    if (!questions.length) return

    setSelectedPart(label)
    setActiveQuestions(questions)
    setCurrentIndex(0)
    setSelectedOptions([])
    setCheckedAnswers({})
    setShowSummary(false)
    setMode('learn')
  }

  const startGh300Study = (partKey) => {
    const questions = getGh300Questions(partKey)
    if (questions.length) startStudyQuestions(questions, `GH-300 - ${partKey}`)
  }

  const startClaudeAssociateStudy = (setKey) => {
    const set = CLAUDE_ASSOCIATE_SETS.find((item) => item.key === setKey)
    if (!set || !set.ready || !set.questions.length) return

    startStudyQuestions(set.questions, `Claude Associate - ${set.label}`)
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
    setNavigationError('')
    if (isMultiAnswer) {
      setSelectedOptions((prev) => {
        if (prev.includes(option)) return prev.filter((item) => item !== option)
        if (prev.length >= correctAnswers.length) return prev
        return [...prev, option]
      })
      return
    }
    setSelectedOptions([option])
  }

  const handleCheckAnswer = () => {
    if (!selectedOptions.length) return
    saveCurrentSelection()
  }

  const handleNavigation = (direction) => {
    if (direction > 0 && !currentChecked && !selectedOptions.length) {
      setNavigationError('Select an answer before moving to the next question.')
      return
    }

    setNavigationError('')
    saveCurrentSelection()
    setSelectedOptions([])
    setShowSummary(false)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + direction
      return Math.min(Math.max(nextIndex, 0), totalQuestions - 1)
    })
  }

  const handleFinish = () => {
    if (!currentChecked && !selectedOptions.length) {
      setNavigationError('Select an answer before finishing the quiz.')
      return
    }

    setNavigationError('')
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
    return <HomePage tests={PRACTICE_TESTS} onOpenTest={handleOpenTest} />
  }

  if (mode === 'section') {
    return (
      <SetSelectionPage
        test={selectedPracticeTest}
        mode={sectionMode}
        parts={GH300_PARTS}
        sets={CLAUDE_ASSOCIATE_SETS}
        onModeChange={setSectionMode}
        onBack={() => setMode('home')}
        onStartPractice={(key) => selectedPracticeTest.key === 'gh300'
          ? startQuiz(key)
          : startClaudeAssociateSet(key)}
        onStartStudy={(key) => selectedPracticeTest.key === 'gh300'
          ? startGh300Study(key)
          : startClaudeAssociateStudy(key)}
        onDownloadUniquePdf={downloadUniquePdf}
      />
    )
  }

  if (mode === 'learn') {
    return (
      <StudyPage
        key={selectedPart}
        questions={activeQuestions}
        title={selectedPart}
        onBack={() => setMode('section')}
        onDownloadUniquePdf={downloadUniquePdf}
      />
    )
  }

  if (showSummary) {
    return (
      <ResultsPage
        selectedPart={selectedPart}
        percentage={percentage}
        correctCount={correctCount}
        totalQuestions={totalQuestions}
        passed={passed}
        activeQuestions={activeQuestions}
        checkedAnswers={checkedAnswers}
        onDownloadResultsPdf={downloadResultsPdf}
        onHome={() => setMode('home')}
        onRestart={handleRestart}
      />
    )
  }

  return (
    <QuizPage
      selectedPart={selectedPart}
      currentQuestion={currentQuestion}
      currentIndex={currentIndex}
      currentChecked={currentChecked}
      selectedAnswers={selectedAnswers}
      correctAnswers={correctAnswers}
      maxSelectableAnswers={correctAnswers.length}
      navigationError={navigationError}
      percentage={percentage}
      correctCount={correctCount}
      totalQuestions={totalQuestions}
      onOptionSelect={handleOptionSelect}
      onCheckAnswer={handleCheckAnswer}
      onHome={() => setMode('home')}
      onPrevious={() => handleNavigation(-1)}
      onNext={() => handleNavigation(1)}
      onFinish={handleFinish}
    />
  )
}

export default App
