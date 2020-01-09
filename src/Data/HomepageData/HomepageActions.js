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
  },
  editContactUs (email, message) {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.EDIT_CONTACT_US,
      email: email,
      message: message
    })
  },
  submitContactUs () {
    TwoAnswerDispatcher.dispatch({
      type: HomepageActionTypes.SUBMIT_CONTACT_US
    })
  }
}

export default Actions
