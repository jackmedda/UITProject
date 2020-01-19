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
    // players will be the array of players ordered by score
    players: [...PlayerStore.getState().sort((a, b) => {
      if (a.get('score') < b.get('score')) { return 1 }
      if (a.get('score') > b.get('score')) { return -1 } else { return 0 }
    }).values()],

    onChangeDifficulty: Actions.changeDifficulty,
    onOpenDrawerItem: Actions.openDrawerItem,
    onChangeContactUs: Actions.editContactUs,
    onSubmitContactUs: Actions.submitContactUs
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
