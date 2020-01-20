import { Container } from 'flux/utils'
import NameSelectView from '../Views/NameSelectView'
import PlayerStore from '../Data/NameSelectData/PlayerStore'
import Actions from '../Data/NameSelectData/NameSelectActions'

function getStores () {
  return [
    PlayerStore
  ]
}

function getState () {
  return {
    players: PlayerStore.getState(),

    onNewPlayer: Actions.newPlayer,
    onSubmitName: Actions.submitName,
    onUpdateScore: Actions.updateScore,
    onCheckName: Actions.nameIsValid
  }
}

export default Container.createFunctional(NameSelectView, getStores, getState)
