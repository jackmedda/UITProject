import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'

const Actions = {
  changeDifficulty (difficultyType) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.CHANGE_DIFFICULTY,
      difficulty: difficultyType
    })
  },
  openDrawerItem (item, isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_DRAWER_ITEM,
      item: item,
      state: isOpen
    })
  }
}

export default Actions
