import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'

export const difficultyTypes = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
}

class DifficultySliderStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return difficultyTypes.NORMAL
  }

  reduce (state, action) {
    switch (action.type) {
      case HomepageActionTypes.CHANGE_DIFFICULTY:
        return action.difficulty

      default:
        return state
    }
  }
}

export default new DifficultySliderStore()
