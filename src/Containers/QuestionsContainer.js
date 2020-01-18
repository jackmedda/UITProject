import QuestionsView from '../Views/QuestionsView'
import { Container } from 'flux/utils'
import QuestionStore from '../Data/QuestionsData/QuestionStore'

function getStores () {
  return [
    QuestionStore
  ]
}

function getState () {
  return {
    questions: QuestionStore.getState()
  }
}

export default Container.createFunctional(QuestionsView, getStores, getState)
