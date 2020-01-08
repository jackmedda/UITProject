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
  },
  openGlobalScore (isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_GLOBAL_SCORE,
      state: isOpen
    })
  },
  openWhats2Answer (isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_WHATS_2ANSWER,
      state: isOpen
    })
  },
  openTeam (isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_TEAM,
      state: isOpen
    })
  },
  openContacts (isOpen) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.OPEN_CONTACTS,
      state: isOpen
    })
  }
}

export default Actions
