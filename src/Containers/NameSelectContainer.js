import { Container } from 'flux/utils'
import NameSelectView from '../Views/NameSelectView'
import PlayerStore from '../Data/NameSelectData/PlayerStore'
import ValidationNamesStore from '../Data/NameSelectData/ValidationNamesStore'
import Actions from '../Data/NameSelectData/NameSelectActions'

function getStores () {
  return [
    PlayerStore,
    ValidationNamesStore
  ]
}

function getState () {
  return {
    players: PlayerStore.getState(),
    nameValidators: ValidationNamesStore.getState(),

    onNewPlayer: Actions.newPlayer,
    onSubmitName: Actions.submitName,
    onUpdateScore: Actions.updateScore,
    onNewValName: Actions.newValidationName,
    onUpdateValName: Actions.updateValName
  }
}

export default Container.createFunctional(NameSelectView, getStores, getState)
