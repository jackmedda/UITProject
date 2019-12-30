'use strict'

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
    /*
    draft: TodoDraftStore.getState(),
    editing: TodoEditStore.getState(),
    todos: TodoStore.getState(),

    onAdd: TodoActions.addTodo,
    onDeleteCompletedTodos: TodoActions.deleteCompletedTodos,
    onDeleteTodo: TodoActions.deleteTodo,
    onEditTodo: TodoActions.editTodo,
    onStartEditingTodo: TodoActions.startEditingTodo,
    onStopEditingTodo: TodoActions.stopEditingTodo,
    onToggleAllTodos: TodoActions.toggleAllTodos,
    onToggleTodo: TodoActions.toggleTodo,
    onUpdateDraft: TodoActions.updateDraft
    */
    onChangeDifficulty: Actions.changeDifficulty
  }
}

export default Container.createFunctional(HomepageView, getStores, getState)
