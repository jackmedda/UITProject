import HomepageView from '../Views/HomepageView'
import { Container } from 'flux/utils'
import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import DrawerStore from '../Data/HomepageData/DrawerStore'
import ContactUsStore from '../Data/HomepageData/ContactUsStore'
import Actions from '../Data/HomepageData/HomepageActions'

function getStores () {
  return [
    DifficultySliderStore,
    DrawerStore,
    ContactUsStore
  ]
}

function getState () {
  return {
    difficultySlider: DifficultySliderStore.getState(),
    openDrawerData: DrawerStore.getState(),
    contactUs: ContactUsStore.getState(),

    onChangeDifficulty: Actions.changeDifficulty,
    onOpenDrawerItem: Actions.openDrawerItem,
    onChangeContactUs: Actions.editContactUs,
    onSubmitContactUs: Actions.submitContactUs,
    clearPlayers: Actions.clearPlayers,
    clearNameValidators: Actions.clearNameValidators
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
