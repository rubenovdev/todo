import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './components/app-header'
import SearchPanel from './components/search-panel'
import TodoList from './components/todo-list.js'
import ItemStatusFilter from './components/item-status-filter'

import './index.css'

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

ReactDOM.render(<App />, document.getElementById('root'))
