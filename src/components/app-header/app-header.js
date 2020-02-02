import React from 'react'
import './app-header.css'

const AppHeader = ({ activeTasks, completeTasks }) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo</h1>
      <h2>
        {activeTasks} выполняются, {completeTasks} выполнены
      </h2>
    </div>
  )
}

export default AppHeader
