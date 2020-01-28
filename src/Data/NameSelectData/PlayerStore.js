import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'
import Immutable from 'immutable'
import Player from './Player'
import Counter from '../Counter'
import playersJSON from '../../players'

class PlayerStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    const sessionSPlayers = sessionStorage.getItem('Players')
      ? JSON.parse(sessionStorage.getItem('Players'))
      : []

    sessionSPlayers.length > 0
      ? Counter.setCounter(parseInt(sessionSPlayers[sessionSPlayers.length - 1][0].substr(3)) + 1)
      : Counter.setCounter(parseInt(playersJSON[playersJSON.length - 1][0].substr(3)) + 1)

    return Immutable.OrderedMap(sessionSPlayers.map(player => [player[0], Player(player[1])]))
  }

  reduce (state, action) {
    let _state
    switch (action.type) {
      case PlayerActionTypes.ADD_PLAYER: {
        const id = Counter.increment()
        _state = state.set(id, new Player({ id }))
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state
      }

      case PlayerActionTypes.CHANGE_NAME:
        _state = state.setIn([action.id, 'name'], action.name.trim())
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state

      case PlayerActionTypes.UPDATE_SCORE:
        _state = state.setIn([action.id, 'score'], action.score)
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state

      case PlayerActionTypes.CLEAR_PLAYERS:
        Counter.setCounter(parseInt(playersJSON[playersJSON.length - 1][0].substr(3)) + 1)
        sessionStorage.clear()
        return state.clear()

      default:
        return state
    }
  }
}

export default new PlayerStore()
