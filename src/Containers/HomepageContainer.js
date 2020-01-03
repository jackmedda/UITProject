import HomepageView from '../Views/HomepageView'
import { Container } from 'flux/utils'
import DifficultySliderStore from '../Data/HomepageData/DifficultySliderStore'
import Actions from '../Data/HomepageData/HomepageActions'

function getStores () {
  return [
    DifficultySliderStore
  ]
}

function getState () {
  return {
    difficultySlider: DifficultySliderStore.getState(),

    onChangeDifficulty: Actions.changeDifficulty
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
