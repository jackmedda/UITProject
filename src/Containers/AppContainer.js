'use strict';

import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import DifficultySliderStore from '../Data/HomePageData/DifficultySliderStore'

function getStores () {
  return [
    DifficultySliderStore
  ]
}

function getState () {
  return {
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
  }
}

export default Container.createFunctional(AppView, getStores, getState)