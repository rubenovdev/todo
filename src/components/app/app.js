import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddTask from '../add-task'

import './app.css'

export default class App extends Component {
  state = {
    todoItems: [
      { title: 'Выпить кофеек', isImportant: false, id: 1 },
      { title: 'Сделать Todo приложение', isImportant: true, id: 2 },
      { title: 'Погулять на свежем воздухе', isImportant: false, id: 3 },
    ],
  }

  deleteTask = id => {
    this.setState(({ todoItems }) => {
      const index = todoItems.findIndex(elem => elem.id === id)

      const newTodoItems = [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1),
      ]

      return {
        todoItems: newTodoItems,
      }
    })
  }

  addTask = description => {
    this.setState(({ todoItems }) => {
      const newTask = {
        title: description,
        isImportant: false,
        id: todoItems[todoItems.length - 1].id + 1,
      }

      const newTodoItems = [...todoItems, newTask]

      return {
        todoItems: newTodoItems,
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader activeTasks={3} completeTasks={1} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoItems={this.state.todoItems}
          onDeleteTask={this.deleteTask}
        />
        <AddTask addTask={this.addTask} />
      </div>
    )
  }
}
