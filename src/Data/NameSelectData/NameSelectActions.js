import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'

const Actions = {
  submitName (name) {
    TwoAnswerDispatcher.dispatch({
      type: PlayerActionTypes.STOP_EDITING_NAME,
      name: name
    })
  }
}

export default Actions
