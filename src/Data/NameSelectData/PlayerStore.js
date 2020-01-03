import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'

class PlayerStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return []
  }

  reduce (state, action) {
    switch (action.type) {
      case PlayerActionTypes.STOP_EDITING_NAME:
        return state.concat([action.name])

      default:
        return state
    }
  }
}

export default new PlayerStore()
