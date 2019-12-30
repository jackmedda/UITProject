'use strict'

import TwoAnswerDispatcher from '../TwoAnswerDispatcher'

const Actions = {
  changeDifficulty (difficultyType) {
    TwoAnswerDispatcher.dispatch({
      type: difficultyType
    })
  }
}

export default Actions
