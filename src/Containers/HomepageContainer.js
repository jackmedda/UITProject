import HomepageView from '../Views/HomepageView'
import { Container } from 'flux/utils'
import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import DrawerStore from '../Data/HomepageData/DrawerStore'
import Actions from '../Data/HomepageData/HomepageActions'

function getStores () {
  return [
    DifficultySliderStore,
    DrawerStore
  ]
}

function getState () {
  return {
    difficultySlider: DifficultySliderStore.getState(),
    openDrawerData: DrawerStore.getState(),

    onChangeDifficulty: Actions.changeDifficulty,
    onOpenDrawer: Actions.openDrawer,
    onOpenGlobalScore: Actions.openGlobalScore,
    onOpenWhats2Answer: Actions.openWhats2Answer,
    onOpenTeam: Actions.openTeam,
    onOpenContacts: Actions.openContacts
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
