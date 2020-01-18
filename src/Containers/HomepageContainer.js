import HomepageView from '../Views/HomepageView'
import { Container } from 'flux/utils'
import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import DrawerStore from '../Data/HomepageData/DrawerStore'
import ContactUsStore from '../Data/HomepageData/ContactUsStore'
import PlayerStore from '../Data/NameSelectData/PlayerStore'
import Actions from '../Data/HomepageData/HomepageActions'

function getStores () {
  return [
    DifficultySliderStore,
    DrawerStore,
    ContactUsStore,
    PlayerStore
  ]
}

function getState () {
  return {
    difficultySlider: DifficultySliderStore.getState(),
    openDrawerData: DrawerStore.getState(),
    contactUs: ContactUsStore.getState(),
    players: PlayerStore.getState(),

    onChangeDifficulty: Actions.changeDifficulty,
    onOpenDrawerItem: Actions.openDrawerItem,
    onChangeContactUs: Actions.editContactUs,
    onSubmitContactUs: Actions.submitContactUs
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
