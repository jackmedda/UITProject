import { ReduceStore } from 'flux/utils'
import TwoAnswerDispatcher from '../TwoAnswerDispatcher'
import HomepageActionTypes from './HomepageActionTypes'
import ContactUs from './ContactUs'

class ContactUsStore extends ReduceStore {
  constructor () {
    super(TwoAnswerDispatcher)
  }

  getInitialState () {
    return ContactUs()
  }

  reduce (state, action) {
    switch (action.type) {
      case HomepageActionTypes.EDIT_CONTACT_US:
        return state.set('email', action.email).set('message', action.message)

      case HomepageActionTypes.SUBMIT_CONTACT_US:
        // Send email with ContactUs data
        return state

      default:
        return state
    }
  }
}

export default new ContactUsStore()
