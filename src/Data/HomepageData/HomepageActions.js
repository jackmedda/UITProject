import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'

const Actions = {
  changeDifficulty (difficultyType) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.CHANGE_DIFFICULTY,
      difficulty: difficultyType
    })
  },
  openDrawer (isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_CLOSE_DRAWER,
      state: isOpen
    })
  }
}

export default Actions
