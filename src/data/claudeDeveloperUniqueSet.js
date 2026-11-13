import { claudeDeveloperSet1Questions } from './claudeDeveloperSet1'
import { claudeDeveloperSet2Questions } from './claudeDeveloperSet2'
import { claudeDeveloperSet3Questions } from './claudeDeveloperSet3'

const normalizeQuestionKey = (question) =>
  (question?.question || '').replace(/\s+/g, ' ').trim().toLowerCase()

const getQuestionDetailScore = (question) => {
  const options = Array.isArray(question.options) ? question.options : []
  return (question.question?.length || 0) +
    options.reduce((total, option) => total + String(option).length, 0) +
    (question.explanation?.length || 0)
}

export const claudeDeveloperUniqueQuestions = (() => {
  const uniqueMap = new Map()

  ;[claudeDeveloperSet1Questions, claudeDeveloperSet2Questions, claudeDeveloperSet3Questions].forEach((questionSet) => {
    questionSet.forEach((question) => {
      const key = normalizeQuestionKey(question)
      const existingQuestion = uniqueMap.get(key)
      if (!existingQuestion || getQuestionDetailScore(question) > getQuestionDetailScore(existingQuestion)) {
        uniqueMap.set(key, question)
      }
    })
  })

  return Array.from(uniqueMap.values())
})()
