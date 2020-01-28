import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import NameValidator from './NameValidator'
import Immutable from 'immutable'
import PlayerActionTypes from './PlayerActionTypes'
import Counter from '../Counter'

class ValidationNamesStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    const sessionSValidators = sessionStorage.getItem('NameValidators')
      ? JSON.parse(sessionStorage.getItem('NameValidators'))
      : []

    return Immutable.OrderedMap(sessionSValidators.map(val => [val[0], NameValidator(val[1])]))
  }

  reduce (state, action) {
    let _state
    switch (action.type) {
      case PlayerActionTypes.ADD_NAME_VAL: {
        const id = 'id-' + (parseInt(Counter.currentId().substr(3)) - 1).toString()
        _state = state.set('standard-basic-' + id, new NameValidator())
        sessionStorage.setItem('NameValidators', JSON.stringify(_state.toArray()))
        return _state
      }

      case PlayerActionTypes.UPDATE_NAME_VAL: {
        _state = state.update(action.id, (value) =>
          value.set('error', action.error).set('helperText', action.error ? 'Name already in use' : ''))
        sessionStorage.setItem('NameValidators', JSON.stringify(_state.toArray()))
        return _state
      }

      case PlayerActionTypes.CLEAR_VALIDATORS:
        sessionStorage.clear()
        return state.clear()

      default:
        return state
    }
  }
}

export default new ValidationNamesStore()
