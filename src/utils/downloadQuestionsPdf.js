import { jsPDF } from 'jspdf'

const PAGE_MARGIN = 18

export function downloadQuestionsPdf(questions, title) {
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error('Cannot create a PDF without questions.')
  }

  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const contentWidth = pageWidth - PAGE_MARGIN * 2
  const contentBottom = pageHeight - PAGE_MARGIN - 8
  const cardPadding = 5
  let y = PAGE_MARGIN

  const getLines = (text, size, bold, width) => {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal')
    pdf.setFontSize(size)
    return pdf.splitTextToSize(String(text), width)
  }

  const addPageHeader = () => {
    const headerLines = getLines(title, 9, true, contentWidth)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(9)
    pdf.setTextColor(71, 85, 105)
    headerLines.forEach((line, index) => {
      pdf.text(line, PAGE_MARGIN, PAGE_MARGIN + 4 + index * 4)
    })
    const dividerY = PAGE_MARGIN + 7 + headerLines.length * 4
    pdf.setDrawColor(226, 232, 240)
    pdf.line(PAGE_MARGIN, dividerY, pageWidth - PAGE_MARGIN, dividerY)
    y = dividerY + 7
  }

  const startNewPage = () => {
    pdf.addPage()
    addPageHeader()
  }

  const getOptionRows = (options, answers) => options.map((option, optionIndex) => {
    const letter = String.fromCharCode(65 + optionIndex)
    const correct = answers.includes(option)
    const lines = getLines(option, 9.5, false, contentWidth - 19)
    return {
      letter,
      correct,
      lines,
      height: Math.max(8, lines.length * 4.5 + 3)
    }
  })

  const getQuestionCardHeight = (questionLines, optionRows, explanationLines) => {
    const optionsHeight = optionRows.reduce((height, row) => height + row.height + 1.5, 0)
    const explanationHeight = explanationLines.length ? 12 + explanationLines.length * 4.3 : 0
    return 28 + questionLines.length * 5 + optionsHeight + explanationHeight
  }

  const drawQuestionCard = (question, index) => {
    const answers = Array.isArray(question.answer) ? question.answer : [question.answer]
    const correctAnswerLetters = question.options
      .flatMap((option, optionIndex) => answers.includes(option) ? [String.fromCharCode(65 + optionIndex)] : [])
    const correctAnswerText = correctAnswerLetters.join(', ')
    const questionLines = getLines(question.question, 11, true, contentWidth - cardPadding * 2)
    const optionRows = getOptionRows(question.options, answers)
    const explanationLines = question.explanation
      ? getLines(question.explanation, 9, false, contentWidth - cardPadding * 2 - 8)
      : []
    const cardHeight = getQuestionCardHeight(questionLines, optionRows, explanationLines)

    if (y + cardHeight > contentBottom) startNewPage()

    const cardTop = y
    pdf.setFillColor(255, 255, 255)
    pdf.setDrawColor(226, 232, 240)
    pdf.roundedRect(PAGE_MARGIN, cardTop, contentWidth, cardHeight, 2.5, 2.5, 'FD')

    let cardY = cardTop + cardPadding
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(79, 70, 229)
    pdf.text(`QUESTION ${String(index + 1).padStart(2, '0')}`, PAGE_MARGIN + cardPadding, cardY + 2)
    if (answers.length > 1) {
      pdf.setTextColor(100, 116, 139)
      pdf.text(`SELECT ${answers.length}`, pageWidth - PAGE_MARGIN - cardPadding, cardY + 2, { align: 'right' })
    }

    cardY += 8
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(11)
    pdf.setTextColor(15, 23, 42)
    questionLines.forEach((line, lineIndex) => {
      pdf.text(line, PAGE_MARGIN + cardPadding, cardY + 4 + lineIndex * 5)
    })
    cardY += questionLines.length * 5 + 2

    optionRows.forEach((row) => {
      pdf.setFillColor(...(row.correct ? [240, 253, 244] : [248, 250, 252]))
      pdf.roundedRect(PAGE_MARGIN + cardPadding, cardY, contentWidth - cardPadding * 2, row.height, 1.5, 1.5, 'F')

      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(8.5)
      pdf.setTextColor(...(row.correct ? [21, 128, 61] : [100, 116, 139]))
      pdf.text(row.letter, PAGE_MARGIN + cardPadding + 3, cardY + 5.2)

      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9.5)
      pdf.setTextColor(51, 65, 85)
      row.lines.forEach((line, lineIndex) => {
        pdf.text(line, PAGE_MARGIN + cardPadding + 10, cardY + 5.2 + lineIndex * 4.5)
      })
      cardY += row.height + 1.5
    })

    if (explanationLines.length) {
      cardY += 1
      const explanationHeight = 7 + explanationLines.length * 4.3 + 2
      pdf.setFillColor(248, 250, 252)
      pdf.roundedRect(PAGE_MARGIN + cardPadding, cardY, contentWidth - cardPadding * 2, explanationHeight, 1.5, 1.5, 'F')
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(7.5)
      pdf.setTextColor(100, 116, 139)
      pdf.text('EXPLANATION', PAGE_MARGIN + cardPadding + 3, cardY + 4.5)
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9)
      pdf.setTextColor(71, 85, 105)
      explanationLines.forEach((line, lineIndex) => {
        pdf.text(line, PAGE_MARGIN + cardPadding + 3, cardY + 9 + lineIndex * 4.3)
      })
      cardY += explanationHeight + 2
    }

    const answerHeight = 9
    pdf.setFillColor(220, 252, 231)
    pdf.roundedRect(PAGE_MARGIN + cardPadding, cardY, contentWidth - cardPadding * 2, answerHeight, 1.5, 1.5, 'F')
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(7.5)
    pdf.setTextColor(21, 128, 61)
    pdf.text('CORRECT ANSWER', PAGE_MARGIN + cardPadding + 3, cardY + 5.8)
    const answerLabelWidth = pdf.getTextWidth('CORRECT ANSWER')
    pdf.setFontSize(9.5)
    pdf.text(correctAnswerText, PAGE_MARGIN + cardPadding + 3 + answerLabelWidth + 4, cardY + 5.8)

    y = cardTop + cardHeight + 5
  }

  const titleLines = getLines(title, 18, true, contentWidth)
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(8)
  pdf.setTextColor(79, 70, 229)
  pdf.text('QUESTION & ANSWER GUIDE', PAGE_MARGIN, y + 3)
  y += 8

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(18)
  pdf.setTextColor(49, 46, 129)
  titleLines.forEach((line, index) => {
    pdf.text(line, PAGE_MARGIN, y + 6 + index * 7.5)
  })
  y += titleLines.length * 7.5 + 2

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(71, 85, 105)
  pdf.text(`${questions.length} questions  |  Answers and explanations included`, PAGE_MARGIN, y + 3)
  y += 9

  pdf.setDrawColor(226, 232, 240)
  pdf.line(PAGE_MARGIN, y, pageWidth - PAGE_MARGIN, y)
  y += 7

  questions.forEach((question, index) => {
    drawQuestionCard(question, index)
  })

  const pageCount = pdf.internal.getNumberOfPages()
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page)
    pdf.setDrawColor(226, 232, 240)
    pdf.line(PAGE_MARGIN, pageHeight - PAGE_MARGIN - 3, pageWidth - PAGE_MARGIN, pageHeight - PAGE_MARGIN - 3)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor(100, 116, 139)
    pdf.text('QUESTION & ANSWER GUIDE', PAGE_MARGIN, pageHeight - 9)
    pdf.text(`Page ${page} of ${pageCount}`, pageWidth - PAGE_MARGIN, pageHeight - 9, { align: 'right' })
  }

  const filename = `${title.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}.pdf`
  pdf.save(filename)
}

export function downloadQuizResultsPdf({
  title,
  percentage,
  correctCount,
  totalQuestions,
  passed,
  questions,
  checkedAnswers
}) {
  if (!Array.isArray(questions) || questions.length === 0) {
    throw new Error('Cannot create a results PDF without questions.')
  }

  const pdf = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const contentWidth = pageWidth - PAGE_MARGIN * 2
  const contentBottom = pageHeight - 19
  const cardPadding = 5
  let y = PAGE_MARGIN

  const getLines = (text, size, bold, width) => {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal')
    pdf.setFontSize(size)
    return pdf.splitTextToSize(String(text), width)
  }

  const startNewPage = () => {
    pdf.addPage()
    y = PAGE_MARGIN
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(9)
    pdf.setTextColor(71, 85, 105)
    pdf.text(String(title), PAGE_MARGIN, y)
    y += 4
    pdf.setDrawColor(226, 232, 240)
    pdf.line(PAGE_MARGIN, y, pageWidth - PAGE_MARGIN, y)
    y += 7
  }

  const ensureSpace = (height) => {
    if (y + height > contentBottom) {
      startNewPage()
    }
  }

  const drawAnswerBlock = (label, answer, top, fillColor, labelColor) => {
    const blockPadding = 3
    const blockWidth = contentWidth - cardPadding * 2
    const textWidth = blockWidth - blockPadding * 2
    const labelSize = 7.5
    const answerSize = 9.5
    const labelLineHeight = 3.8
    const answerLineHeight = 4.8
    const labelLines = getLines(label.toUpperCase(), labelSize, true, textWidth)
    const answerLines = getLines(answer, answerSize, false, textWidth)
    const blockHeight = blockPadding * 2 + labelLines.length * labelLineHeight + 1 + answerLines.length * answerLineHeight

    pdf.setFillColor(...fillColor)
    pdf.roundedRect(PAGE_MARGIN + cardPadding, top, blockWidth, blockHeight, 2, 2, 'F')
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(labelSize)
    pdf.setTextColor(...labelColor)
    labelLines.forEach((line, index) => {
      pdf.text(line, PAGE_MARGIN + cardPadding + blockPadding, top + blockPadding + labelLineHeight * (index + 1) - 0.6)
    })

    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(answerSize)
    pdf.setTextColor(51, 65, 85)
    answerLines.forEach((line, index) => {
      pdf.text(line, PAGE_MARGIN + cardPadding + blockPadding, top + blockPadding + labelLines.length * labelLineHeight + 1 + answerLineHeight * (index + 1) - 0.8)
    })

    return blockHeight
  }

  const drawQuestionCard = (question, index) => {
    const answerData = checkedAnswers[question.id]
    const selected = answerData
      ? Array.isArray(answerData.selected)
        ? answerData.selected
        : [answerData.selected]
      : []
    const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer]
    const questionCorrect = Boolean(answerData?.isCorrect)
    const questionLines = getLines(question.question, 11, true, contentWidth - cardPadding * 2)
    const questionLineHeight = 5.5
    const questionHeight = questionLines.length * questionLineHeight
    const answers = [
      {
        label: 'Your answer',
        value: selected.length ? selected.join(', ') : 'Not answered',
        fill: questionCorrect ? [240, 253, 244] : [254, 242, 242],
        labelColor: questionCorrect ? [21, 128, 61] : [185, 28, 28]
      },
      {
        label: 'Correct answer',
        value: correctAnswers.join(', '),
        fill: [240, 253, 244],
        labelColor: [21, 128, 61]
      }
    ]
    const answerBlockHeights = answers.map(({ label, value }) => {
      const blockWidth = contentWidth - cardPadding * 2
      const textWidth = blockWidth - 6
      const labelLines = getLines(label.toUpperCase(), 7.5, true, textWidth)
      const answerLines = getLines(value, 9.5, false, textWidth)
      return 6 + labelLines.length * 3.8 + 1 + answerLines.length * 4.8
    })
    const cardHeight = cardPadding + 5 + questionHeight + 3 + answerBlockHeights[0] + 2 + answerBlockHeights[1] + cardPadding

    ensureSpace(cardHeight)

    const cardTop = y
    const statusColor = questionCorrect ? [21, 128, 61] : [185, 28, 28]
    const statusFill = questionCorrect ? [220, 252, 231] : [254, 226, 226]
    pdf.setFillColor(255, 255, 255)
    pdf.setDrawColor(226, 232, 240)
    pdf.roundedRect(PAGE_MARGIN, cardTop, contentWidth, cardHeight, 2.5, 2.5, 'FD')
    pdf.setFillColor(...statusColor)
    pdf.roundedRect(PAGE_MARGIN, cardTop, 1.5, cardHeight, 0.7, 0.7, 'F')

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8)
    pdf.setTextColor(71, 85, 105)
    pdf.text(`QUESTION ${index + 1}`, PAGE_MARGIN + cardPadding, cardTop + cardPadding + 2)
    const statusLabel = questionCorrect ? 'CORRECT' : 'INCORRECT'
    const badgeWidth = pdf.getTextWidth(statusLabel) + 6
    pdf.setFillColor(...statusFill)
    pdf.roundedRect(pageWidth - PAGE_MARGIN - cardPadding - badgeWidth, cardTop + 2.5, badgeWidth, 5.5, 2, 2, 'F')
    pdf.setTextColor(...statusColor)
    pdf.text(statusLabel, pageWidth - PAGE_MARGIN - cardPadding - badgeWidth + 3, cardTop + 6.3)

    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(11)
    pdf.setTextColor(15, 23, 42)
    questionLines.forEach((line, lineIndex) => {
      pdf.text(line, PAGE_MARGIN + cardPadding, cardTop + cardPadding + 7 + questionLineHeight * lineIndex)
    })

    let answerY = cardTop + cardPadding + 7 + questionHeight + 3
    answers.forEach(({ label, value, fill, labelColor }, answerIndex) => {
      const blockHeight = drawAnswerBlock(label, value, answerY, fill, labelColor)
      answerY += blockHeight + (answerIndex === 0 ? 2 : 0)
    })

    y = cardTop + cardHeight + 4
  }

  const titleLines = getLines(`${title} Results`, 19, true, contentWidth)
  const titleLineHeight = 8.5
  titleLines.forEach((line) => {
    ensureSpace(titleLineHeight)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(19)
    pdf.setTextColor(49, 46, 129)
    pdf.text(line, PAGE_MARGIN, y + titleLineHeight - 1)
    y += titleLineHeight
  })

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(9.5)
  pdf.setTextColor(100, 116, 139)
  pdf.text('QUIZ PERFORMANCE SUMMARY', PAGE_MARGIN, y + 5)
  y += 12

  const summaryHeight = 31
  ensureSpace(summaryHeight)
  const summaryTop = y
  const summaryColor = passed ? [21, 128, 61] : [185, 28, 28]
  pdf.setFillColor(248, 250, 252)
  pdf.setDrawColor(226, 232, 240)
  pdf.roundedRect(PAGE_MARGIN, summaryTop, contentWidth, summaryHeight, 3, 3, 'FD')
  pdf.setFillColor(...summaryColor)
  pdf.roundedRect(PAGE_MARGIN, summaryTop, 2, summaryHeight, 1, 1, 'F')

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(21)
  pdf.setTextColor(15, 23, 42)
  pdf.text(`${percentage}%`, PAGE_MARGIN + 7, summaryTop + 13)
  pdf.setFontSize(8)
  pdf.setTextColor(...summaryColor)
  pdf.text(passed ? 'PASSED' : 'NOT PASSED', PAGE_MARGIN + 7, summaryTop + 20)
  pdf.setDrawColor(203, 213, 225)
  pdf.line(PAGE_MARGIN + 42, summaryTop + 6, PAGE_MARGIN + 42, summaryTop + summaryHeight - 6)

  const stats = [
    ['CORRECT', String(correctCount), [21, 128, 61]],
    ['INCORRECT', String(totalQuestions - correctCount), [185, 28, 28]],
    ['TOTAL', String(totalQuestions), [51, 65, 85]]
  ]
  const statsWidth = (contentWidth - 51) / stats.length
  stats.forEach(([label, value, color], index) => {
    const statX = PAGE_MARGIN + 49 + statsWidth * index
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(7.5)
    pdf.setTextColor(100, 116, 139)
    pdf.text(label, statX, summaryTop + 11)
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(13)
    pdf.setTextColor(...color)
    pdf.text(value, statX, summaryTop + 20)
  })
  y += summaryHeight + 9

  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(13)
  pdf.setTextColor(15, 23, 42)
  pdf.text('Answer review', PAGE_MARGIN, y + 2)
  y += 8

  questions.forEach(drawQuestionCard)

  const pageCount = pdf.internal.getNumberOfPages()
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page)
    pdf.setDrawColor(226, 232, 240)
    pdf.line(PAGE_MARGIN, pageHeight - 15, pageWidth - PAGE_MARGIN, pageHeight - 15)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor(100, 116, 139)
    pdf.text(`${title} - Page ${page} of ${pageCount}`, pageWidth - PAGE_MARGIN, pageHeight - 9, { align: 'right' })
  }

  const filename = `${title} Results`.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()
  pdf.save(`${filename}.pdf`)
}
