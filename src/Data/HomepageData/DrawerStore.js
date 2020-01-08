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
      case HomepageActionTypes.OPEN_DRAWER_ITEM:
        return state.set(action.item, action.state)

      default:
        return state
    }
  }
}

export default new DrawerStore()
