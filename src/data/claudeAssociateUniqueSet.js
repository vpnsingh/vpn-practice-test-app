import { claudeAssociateSet1Questions } from './claudeAssociateSet1'
import { claudeAssociateQuestions as claudeAssociateSet2Questions } from './claudeAssociateSet2'
import { claudeAssociateSet3Questions } from './claudeAssociateSet3'
import { claudeAssociateSet4Questions } from './claudeAssociateSet4'
import { claudeAssociateSet5Questions } from './claudeAssociateSet5'
import { claudeAssociateSet6Questions } from './claudeAssociateSet6'

const normalizeQuestionKey = (question) => {
  const normalizedText = (question?.question || '').replace(/\s+/g, ' ').trim().toLowerCase()
  return normalizedText
}

export const claudeAssociateUniqueQuestions = (() => {
  const combinedSets = [
    claudeAssociateSet1Questions,
    claudeAssociateSet2Questions,
    claudeAssociateSet3Questions,
    claudeAssociateSet4Questions,
    claudeAssociateSet5Questions,
    claudeAssociateSet6Questions
  ]

  const uniqueMap = new Map()

  combinedSets.forEach((questionSet) => {
    questionSet.forEach((question) => {
      const key = normalizeQuestionKey(question)
      if (!key || uniqueMap.has(key)) return
      uniqueMap.set(key, question)
    })
  })

  return Array.from(uniqueMap.values())
})()
