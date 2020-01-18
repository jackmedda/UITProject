import Immutable from 'immutable'

export const Answer = Immutable.Record({
  text: '',
  correct: false
})

const Question = Immutable.Record({
  text: '',
  answers: [Answer, Answer, Answer],
  skipped: false
})

export default Question
