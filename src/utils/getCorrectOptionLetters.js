export function getCorrectOptionLetters(question) {
  const answers = Array.isArray(question.answer) ? question.answer : [question.answer]

  return question.options.flatMap((option, optionIndex) =>
    answers.includes(option) ? [String.fromCharCode(65 + optionIndex)] : []
  )
}
