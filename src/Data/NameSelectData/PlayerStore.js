import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'
import Immutable from 'immutable'
import Player from './Player'
import Counter from '../Counter'

class PlayerStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case PlayerActionTypes.ADD_PLAYER: {
        const id = Counter.increment()
        return state.set(id, new Player({
          id,
          name: '',
          score: 0
        }))
      }
      case PlayerActionTypes.CHANGE_NAME:
        return state.setIn([action.id, 'name'], action.name)

      case PlayerActionTypes.UPDATE_SCORE:
        return state.setIn([action.id, 'score'], action.score)

      default:
        return state
    }
  }
}

export default new PlayerStore()
