import ContactUsStore from '../../Data/HomepageData/ContactUsStore'
import HomepageActionTypes from '../../Data/HomepageData/HomepageActionTypes'

describe('ContactUsStore', () => {
  let state = ContactUsStore.getInitialState()
  let dispatch = () => undefined

  beforeEach(() => {
    dispatch = action => {
      state = ContactUsStore.reduce(state, action)
    }
  })

  /// Begin tests ///

  it('can change message', () => {
    expect(state.toJS()).toEqual({
      email: '',
      message: ''
    })

    dispatch({
      type: HomepageActionTypes.EDIT_CONTACT_US,
      email: 'test@test.com',
      message: 'This is a test'
    })

    expect(state.toJS()).toEqual({
      email: 'test@test.com',
      message: 'This is a test'
    })
  })

  it('can submit message', () => {
    dispatch({
      type: HomepageActionTypes.SUBMIT_CONTACT_US
    })

    expect(state.toJS()).toEqual({
      email: 'test@test.com',
      message: 'This is a test'
    })
  })
})
