import React, { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  state = {
    isTaskComplete: false,
    isImportant: false,
  }

  onTitleClick = () => {
    this.setState(state => {
      return {
        isTaskComplete: !state.isTaskComplete,
      }
    })
  }

  onImportantIconCkick = () => {
    this.setState(state => {
      return {
        isImportant: !state.isImportant,
      }
    })
  }

  render() {
    const { title, onDeleteTask } = this.props

    const { isTaskComplete, isImportant } = this.state

    let classNames = 'todo-list-item'

    if (isTaskComplete) classNames += ' done'

    if (isImportant) classNames += ' important'

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.onTitleClick}>
          {title}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={this.onImportantIconCkick}
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
