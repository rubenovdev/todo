import React from 'react'
import './item-status-filter.css'

const ItemStatusFilter = props => {
  const { onChangeFilter } = props

  return (
    <div className="btn-group" onClick={onChangeFilter}>
      <button type="button" className="btn btn-info">
        Все
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Активные
      </button>
      <button type="button" className="btn btn-outline-secondary">
        Выполненные
      </button>
    </div>
  )
}

export default ItemStatusFilter
