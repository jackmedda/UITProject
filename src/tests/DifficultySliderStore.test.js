import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import HomepageActionTypes from '../Data/HomepageData/HomepageActionTypes'

const difficultyTypes = {
  EASY: 'EASY',
  NORMAL: 'NORMAL',
  HARD: 'HARD'
}

describe('DifficultySliderStore', () => {
  let state = DifficultySliderStore.getInitialState()
  let dispatch = () => undefined

  beforeEach(() => {
    dispatch = action => {
      state = DifficultySliderStore.reduce(state, action)
    }
  })

  /// Begin tests ///

  it('can change difficulty', () => {
    expect(state).toEqual(difficultyTypes.NORMAL)

    dispatch({
      type: HomepageActionTypes.CHANGE_DIFFICULTY,
      difficulty: difficultyTypes.EASY
    })

    expect(state).toEqual(difficultyTypes.EASY)

    dispatch({
      type: HomepageActionTypes.CHANGE_DIFFICULTY,
      difficulty: difficultyTypes.HARD
    })

    expect(state).toEqual(difficultyTypes.HARD)
  })
})
