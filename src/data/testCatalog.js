import { quizQuestions } from './questions'
import { claudeAssociateQuestions } from './claudeAssociateSet2'
import { claudeAssociateSet1Questions } from './claudeAssociateSet1'
import { claudeAssociateSet3Questions } from './claudeAssociateSet3'
import { claudeAssociateSet4Questions } from './claudeAssociateSet4'
import { claudeAssociateSet5Questions } from './claudeAssociateSet5'
import { claudeAssociateSet6Questions } from './claudeAssociateSet6'
import { claudeAssociateUniqueQuestions } from './claudeAssociateUniqueSet'

export const PARTS = [
  { key: 'Part 1', label: 'Part 1 - 60 questions', start: 0, count: 60 },
  { key: 'Part 2', label: 'Part 2 - 60 questions', start: 60, count: 60 },
  { key: 'Part 3', label: 'Part 3 - 60 questions', start: 120, count: 60 },
  { key: 'Full 180', label: 'Full 180 questions', start: 0, count: 180 },
  { key: 'Unique', label: 'Unique', start: 0, count: 0 }
]

export const getGh300Questions = (partKey) => {
  if (partKey === 'Unique') {
    const uniqueQuestions = new Map()
    quizQuestions.forEach((question) => {
      if (!uniqueQuestions.has(question.question)) uniqueQuestions.set(question.question, question)
    })
    return Array.from(uniqueQuestions.values())
  }

  const part = PARTS.find((item) => item.key === partKey)
  return part ? quizQuestions.slice(part.start, part.start + part.count) : []
}

export const CLAUDE_ASSOCIATE_SETS = [
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

export const PRACTICE_TESTS = [
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
