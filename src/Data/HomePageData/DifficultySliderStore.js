'use strict'

import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'

const difficultyTypes = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
}

class DifficultySliderStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitalState () {
    return difficultyTypes.NORMAL
  }

  reduce (state, action) {
    switch (action.type) {
      case difficultyTypes.EASY:
        return state.set(difficultyTypes.EASY)

      case difficultyTypes.NORMAL:
        return state.set(difficultyTypes.NORMAL)

      case difficultyTypes.HARD:
        return state.set(difficultyTypes.HARD)
    }
  }
}

export default DifficultySliderStore
