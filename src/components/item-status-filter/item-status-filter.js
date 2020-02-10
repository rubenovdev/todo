import React from 'react'
import './item-status-filter.css'

const ItemStatusFilter = props => {
  const { onChangeFilter, filterName } = props

  return (
    <div className="btn-group" onClick={onChangeFilter}>
      <button
        type="button"
        className={`btn ${
          filterName === '' ? 'btn-info' : 'btn-outline-secondary'
        }`}
      >
        Все
      </button>
      <button
        type="button"
        className={`btn ${
          filterName === 'Активные' ? 'btn-info' : 'btn-outline-secondary'
        }`}
      >
        Активные
      </button>
      <button
        type="button"
        className={`btn ${
          filterName === 'Выполненные' ? 'btn-info' : 'btn-outline-secondary'
        }`}
      >
        Выполненные
      </button>
    </div>
  )
}

export default ItemStatusFilter
