import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = ({ todoItems }) => {
  const elementsCollection = todoItems.map(item => {
    const { id, ...itemProps } = item

    return (
      <li key={id}>
        <TodoListItem {...itemProps} />
      </li>
    )
  })

  return <ul>{elementsCollection}</ul>
}

export default TodoList
