import HomepageView from '../Views/HomepageView'
import { Container } from 'flux/utils'
import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import OpenDrawerStore from '../Data/HomepageData/OpenDrawerStore'
import Actions from '../Data/HomepageData/HomepageActions'

function getStores () {
  return [
    DifficultySliderStore,
    OpenDrawerStore
  ]
}

function getState () {
  return {
    difficultySlider: DifficultySliderStore.getState(),
    open: OpenDrawerStore.getState(),

    onChangeDifficulty: Actions.changeDifficulty,
    onOpenDrawer: Actions.openDrawer
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
