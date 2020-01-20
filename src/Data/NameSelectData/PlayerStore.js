import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import PlayerActionTypes from './PlayerActionTypes'
import Immutable from 'immutable'
import Player from './Player'
import Counter from '../Counter'
import players from '../../players'

class PlayerStore extends ReduceStore {
  constructor (players) {
    super(TwoAnswerDispatcher)
    this.players = players.map(player => player[1].name)
  }

  getInitialState () {
    const sessionSPlayers = sessionStorage.getItem('Players')
      ? JSON.parse(sessionStorage.getItem('Players'))
      : []

    sessionSPlayers.length
      ? Counter.setCounter(parseInt(sessionSPlayers[sessionSPlayers.length - 1][0].substr(3)))
      : Counter.setCounter(parseInt(players[players.length - 1][0].substr(3)))

    return Immutable.OrderedMap(sessionSPlayers)
  }

  reduce (state, action) {
    let _state
    switch (action.type) {
      case PlayerActionTypes.ADD_PLAYER: {
        const id = Counter.increment()
        _state = state.set(id, new Player({
          id,
          name: '',
          score: 0
        }))
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state
      }

      case PlayerActionTypes.CHANGE_NAME:
        _state = state.setIn([action.id, 'name'], action.name)
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state

      case PlayerActionTypes.UPDATE_SCORE:
        _state = state.setIn([action.id, 'score'], action.score)
        sessionStorage.setItem('Players', JSON.stringify(_state.toArray()))
        return _state

      case PlayerActionTypes.CHECK_NAME:
        return !players.includes(action.name)

      default:
        return state
    }
  }
}

export default new PlayerStore(players)
