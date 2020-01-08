import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'

class OpenDrawerStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return false
  }

  reduce (state, action) {
    switch (action.type) {
      case HomepageActionTypes.OPEN_CLOSE_DRAWER:
        return action.state

      default:
        return state
    }
  }
}

export default new OpenDrawerStore()
