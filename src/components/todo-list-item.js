import React from 'react'

const TodoListItem = ({ title, isImportant = false }) => {
  const styles = {
    color: isImportant ? 'tomato' : 'black',
  }

  return <span style={styles}>{title}</span>
}

export default TodoListItem
