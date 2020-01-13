import PlayerStore from '../../Data/NameSelectData/PlayerStore'
import PlayerActionTypes from '../../Data/NameSelectData/PlayerActionTypes'

describe('PlayerStore', () => {
  let state = PlayerStore.getInitialState()
  let dispatch = () => undefined
  let players = () => undefined
  const player1id = 'id-1'
  const player2id = 'id-2'

  beforeEach(() => {
    dispatch = action => {
      state = PlayerStore.reduce(state, action)
    }

    players = () => Array.from(state.values()).map(player => ({
      id: player.id,
      name: player.name,
      score: player.score
    }))
  })

  /// Begin tests ///

  it('can add players', () => {
    expect(players()).toEqual([])

    dispatch({
      type: PlayerActionTypes.ADD_PLAYER
    })

    expect(players()).toEqual([
      { id: player1id, name: '', score: 0 }
    ])

    dispatch({
      type: PlayerActionTypes.ADD_PLAYER
    })

    expect(players()).toEqual([
      { id: player1id, name: '', score: 0 },
      { id: player2id, name: '', score: 0 }
    ])
  })

  it('can change player name', () => {
    dispatch({
      type: PlayerActionTypes.CHANGE_NAME,
      id: player1id,
      name: 'Player1'
    })

    expect(players()).toEqual([
      { id: player1id, name: 'Player1', score: 0 },
      { id: player2id, name: '', score: 0 }
    ])

    dispatch({
      type: PlayerActionTypes.CHANGE_NAME,
      id: player2id,
      name: 'Player2'
    })

    expect(players()).toEqual([
      { id: player1id, name: 'Player1', score: 0 },
      { id: player2id, name: 'Player2', score: 0 }
    ])
  })

  it('can update player score', () => {
    dispatch({
      type: PlayerActionTypes.UPDATE_SCORE,
      id: player1id,
      score: 5
    })

    expect(players()).toEqual([
      { id: player1id, name: 'Player1', score: 5 },
      { id: player2id, name: 'Player2', score: 0 }
    ])

    dispatch({
      type: PlayerActionTypes.UPDATE_SCORE,
      id: player2id,
      score: 9
    })

    expect(players()).toEqual([
      { id: player1id, name: 'Player1', score: 5 },
      { id: player2id, name: 'Player2', score: 9 }
    ])
  })
})
