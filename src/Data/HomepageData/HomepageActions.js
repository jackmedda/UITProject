import TwoAnswerDispatcher from '../TwoAnswerDispatcher'

const Actions = {
  changeDifficulty (difficultyType) {
    TwoAnswerDispatcher.dispatch({
      type: parseInt(difficultyType)
    })
  }
}

export default Actions
