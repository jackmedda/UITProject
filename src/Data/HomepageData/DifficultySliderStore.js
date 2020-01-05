import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'

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
      case difficultyTypes.EASY:
        return difficultyTypes.EASY

      case difficultyTypes.NORMAL:
        return difficultyTypes.NORMAL

      case difficultyTypes.HARD:
        return difficultyTypes.HARD

      default:
        return state
    }
  }
}

export default new DifficultySliderStore()
