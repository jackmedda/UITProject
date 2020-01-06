import Immutable from 'immutable'

const Answer = Immutable.Record({
  text: '',
  correct: false
})

const Question = Immutable.Record({
  text: '',
  answers: [Answer, Answer, Answer],
  answered: false
})

export default Question
