import DrawerStore from '../../Data/HomepageData/DrawerStore'
import HomepageActionTypes from '../../Data/HomepageData/HomepageActionTypes'

describe('DrawerStore', () => {
  let state = DrawerStore.getInitialState()
  let dispatch = () => undefined

  beforeEach(() => {
    dispatch = action => {
      state = DrawerStore.reduce(state, action)
    }
  })

  /// Begin tests ///

  it('can change drawer item', () => {
    expect(state.toJS()).toEqual({
      drawer: false,
      globalScore: false,
      whats2Answer: false,
      team: false,
      contacts: false
    })

    dispatch({
      type: HomepageActionTypes.OPEN_DRAWER_ITEM,
      item: 'drawer',
      state: true
    })

    expect(state.toJS()).toEqual({
      drawer: true,
      globalScore: false,
      whats2Answer: false,
      team: false,
      contacts: false
    })

    dispatch({
      type: HomepageActionTypes.OPEN_DRAWER_ITEM,
      item: 'team',
      state: true
    })

    expect(state.toJS()).toEqual({
      drawer: true,
      globalScore: false,
      whats2Answer: false,
      team: true,
      contacts: false
    })

    dispatch({
      type: HomepageActionTypes.OPEN_DRAWER_ITEM,
      item: 'drawer',
      state: false
    })

    expect(state.toJS()).toEqual({
      drawer: false,
      globalScore: false,
      whats2Answer: false,
      team: true,
      contacts: false
    })
  })
})
