import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'

import './app.css'

const App = () => {
  const todoItems = [
    { title: 'Выпить кофеек', isImportant: false, id: 1 },
    { title: 'Сделать Todo приложение', isImportant: true, id: 2 },
    { title: 'Погулять на свежем воздухе', isImportant: false, id: 3 },
  ]

  return (
    <div className="todo-app">
      <AppHeader activeTasks={3} completeTasks={1} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todoItems={todoItems} />
    </div>
  )
}

export default App
