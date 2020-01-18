import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import Immutable from 'immutable'
import shuffle from '../shuffle'
import Question, { Answer } from './Question'
import questions from '../../questions.json'

class QuestionStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return Immutable.Set(shuffle(questions.map(question =>
      Question({
        text: question.text,
        answers: question.answers.map(answer => Answer({
          text: answer.text,
          correct: answer.correct
        })),
        skipped: question.skipped
      }))))
  }

  reduce (state, action) {
    switch (action.type) {
      default:
        return state
    }
  }
}

export default new QuestionStore()
