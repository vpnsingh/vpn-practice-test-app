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
  let y = PAGE_MARGIN

  const addPageIfNeeded = (height) => {
    if (y + height > pageHeight - PAGE_MARGIN) {
      pdf.addPage()
      y = PAGE_MARGIN
    }
  }

  const addText = (text, { size = 10, bold = false, color = [31, 41, 55], indent = 0 } = {}) => {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal')
    pdf.setFontSize(size)
    pdf.setTextColor(...color)

    const lines = pdf.splitTextToSize(String(text), contentWidth - indent)
    const lineHeight = size * 0.48

    lines.forEach((line) => {
      addPageIfNeeded(lineHeight)
      pdf.text(line, PAGE_MARGIN + indent, y)
      y += lineHeight
    })
  }

  addText(title, { size: 18, bold: true, color: [49, 46, 129] })
  y += 2
  addText(`${questions.length} unique questions with answers`, { size: 10, color: [71, 85, 105] })
  y += 5

  questions.forEach((question, index) => {
    const answers = Array.isArray(question.answer) ? question.answer : [question.answer]
    addPageIfNeeded(12)
    addText(`${index + 1}. ${question.question}`, { size: 11, bold: true, color: [15, 23, 42] })
    y += 1

    question.options.forEach((option, optionIndex) => {
      const letter = String.fromCharCode(65 + optionIndex)
      addText(`${letter}. ${option}`, {
        size: 9.5,
        color: [51, 65, 85],
        indent: 3
      })
    })

    if (question.explanation) {
      y += 1
      addText(`Explanation: ${question.explanation}`, {
        size: 9,
        color: [71, 85, 105],
        indent: 3
      })
    }

    const correctAnswerLetters = question.options
      .flatMap((option, optionIndex) => answers.includes(option) ? [String.fromCharCode(65 + optionIndex)] : [])
    addText(`Correct answer: ${correctAnswerLetters.join(', ')}`, {
      size: 9.5,
      bold: true,
      color: [21, 128, 61],
      indent: 3
    })
    y += 5
  })

  const pageCount = pdf.internal.getNumberOfPages()
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page)
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(8)
    pdf.setTextColor(100, 116, 139)
    pdf.text(`Page ${page} of ${pageCount}`, pageWidth - PAGE_MARGIN, pageHeight - 9, { align: 'right' })
  }

  const filename = `${title.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()}.pdf`
  pdf.save(filename)
}
