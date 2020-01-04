import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'

const Actions = {
  submitName (id, name) {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.CHANGED_NAME,
      id: id,
      name: name
    })
  },
  newPlayer () {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.ADD_PLAYER,
      name: ''
    })
  }
}

export default Actions
