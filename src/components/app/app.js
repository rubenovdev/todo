import React, { Component } from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddTask from '../add-task'

import './app.css'

export default class App extends Component {
  maxTaskId = 100

  state = {
    todoItems: [
      this.createTask('Выпить кофеек'),
      this.createTask('Сделать Todo приложение'),
      this.createTask('Погулять на свежем воздухе'),
    ],
    searchingTasks: [],
    searchQuery: '',
  }

  createTask(title) {
    return {
      title,
      isTaskComplete: false,
      isImportant: false,
      id: this.maxTaskId++,
    }
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

  addTask = title => {
    this.setState(({ todoItems }) => {
      const newTask = this.createTask(title)

      const newTodoItems = [...todoItems, newTask]

      return {
        todoItems: newTodoItems,
      }
    })
  }

  toggleProperty = (arr, id, propertyName) => {
    const index = arr.findIndex(elem => elem.id === id)
    const oldTask = arr[index]
    const newTask = { ...oldTask, [propertyName]: !oldTask[propertyName] }

    return [...arr.slice(0, index), newTask, ...arr.slice(index + 1)]
  }

  onToggleIsImportant = id => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: this.toggleProperty(todoItems, id, 'isImportant'),
      }
    })
  }

  onToggleIsTaskComplete = id => {
    this.setState(({ todoItems }) => {
      return {
        todoItems: this.toggleProperty(todoItems, id, 'isTaskComplete'),
      }
    })
  }

  onChangeSearchQuery = event => {
    const value = event.target.value

    this.setState(({ todoItems }) => {
      const newTodoTasks = todoItems.filter(task => {
        return task.title.toLowerCase().includes(value.toLowerCase())
      })
      console.log(newTodoTasks)

      return {
        searchingTasks: newTodoTasks,
        searchQuery: value,
      }
    })
  }

  onSubmitSearchPanelForm = event => {
    event.preventDefault()
    this.setState({
      searchQuery: '',
    })
  }

  render() {
    const { todoItems, searchQuery, searchingTasks } = this.state

    const completeTasksCounter = todoItems.filter(task => task.isTaskComplete)
      .length
    const activeTasksCounter = todoItems.length - completeTasksCounter

    return (
      <div className="todo-app">
        <AppHeader
          activeTasks={activeTasksCounter}
          completeTasks={completeTasksCounter}
        />
        <div className="top-panel d-flex">
          <SearchPanel
            onChangeSearchPanel={this.onChangeSearchQuery}
            onSubmitSearchPanelForm={this.onSubmitSearchPanelForm}
            searchQuery={searchQuery}
          />
          <ItemStatusFilter />
        </div>
        <TodoList
          todoItems={searchQuery ? searchingTasks : todoItems}
          onDeleteTask={this.deleteTask}
          onToggleIsImportant={this.onToggleIsImportant}
          onToggleIsTaskComplete={this.onToggleIsTaskComplete}
        />
        <AddTask addTask={this.addTask} />
      </div>
    )
  }
}
