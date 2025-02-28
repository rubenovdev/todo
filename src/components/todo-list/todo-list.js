import React from 'react'
import TodoListItem from '../todo-list-item'
import './todo-list.css'

const TodoList = ({ todoItems, onDeleteTask, onToggleIsImportant, onToggleIsTaskComplete }) => {
  const elementsCollection = todoItems.map(item => {
    const { id, ...itemProps } = item

    return (
      <li className="list-group-item" key={id}>
        <TodoListItem
          {...itemProps}
          onDeleteTask={() => onDeleteTask(id)}
          onToggleIsImportant={() => onToggleIsImportant(id)}
          onToggleIsTaskComplete={() => onToggleIsTaskComplete(id)}
        />
      </li>
    )
  })

  return <ul className="list-group todo-list">{elementsCollection}</ul>
}

export default TodoList
