import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'

const Actions = {
  newPlayer () {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.ADD_PLAYER
    })
  },
  submitName (id, name) {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.CHANGE_NAME,
      id: id,
      name: name
    })
  },
  updateScore (id, score) {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.UPDATE_SCORE,
      id: id,
      score: score
    })
  },
  nameIsValid (name) {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.CHECK_NAME,
      name: name
    })
  }
}

export default Actions
