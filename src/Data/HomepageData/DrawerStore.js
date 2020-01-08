import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'
import openDrawerData from './DrawerObject'

class DrawerStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return openDrawerData()
  }

  reduce (state, action) {
    switch (action.type) {
      case HomepageActionTypes.OPEN_CLOSE_DRAWER:
        return state.set('drawer', action.state)
      case HomepageActionTypes.OPEN_GLOBAL_SCORE:
        return state.set('globalScore', action.state)
      case HomepageActionTypes.OPEN_WHATS_2ANSWER:
        return state.set('whats2Answer', action.state)
      case HomepageActionTypes.OPEN_TEAM:
        return state.set('team', action.state)
      case HomepageActionTypes.OPEN_CONTACTS:
        return state.set('contacts', action.state)

      default:
        return state
    }
  }
}

export default new DrawerStore()
