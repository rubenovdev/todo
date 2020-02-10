import React, { Component } from 'react'
import './add-task.css'

export default class AddTask extends Component {
  state = {
    title: '',
  }

  onInputChange = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.addTask(this.state.title)
    this.setState({
      title: '',
    })
  }

  render() {
    const { title } = this.state

    return (
      <form className="add-task-form d-flex" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onInputChange}
          placeholder="Добавь новую задачу"
          value={title}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Добавить задачу
        </button>
      </form>
    )
  }
}
