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
    onOpenDrawerItem: Actions.openDrawerItem
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
