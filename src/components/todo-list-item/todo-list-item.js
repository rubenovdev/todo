import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  render() {
    const {
      title,
      isImportant,
      isTaskComplete,
      onDeleteTask,
      onToggleIsImportant,
      onToggleIsTaskComplete,
    } = this.props

    let classNames = 'todo-list-item'

    if (isTaskComplete) classNames += ' done'

    if (isImportant) classNames += ' important'

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleIsTaskComplete}>
          {title}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleIsImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleteTask}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    )
  }
}
