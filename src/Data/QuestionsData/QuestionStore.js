import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import Question from './Question'
import Immutable from 'immutable'

class QuestionStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return Immutable.Set()
  }

  reduce (state, action) {
    switch (action.type) {
      default:
        return state
    }
  }
}

export default new QuestionStore()
