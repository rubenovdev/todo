import React, { Component } from 'react'
import './add-task.css'

export default class AddTask extends Component {
  render() {
    const { addTask } = this.props

    return (
      <div className="add-task-form">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => addTask('Тестовый текст')}
        >
          Добавить задачу
        </button>
      </div>
    )
  }
}
