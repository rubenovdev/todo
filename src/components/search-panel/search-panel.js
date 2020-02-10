import React from 'react'
import './search-panel.css'

const SearchPanel = props => {
  const { onChangeSearchPanel, onSubmitSearchPanelForm, searchQuery } = props

  return (
    <form onSubmit={onSubmitSearchPanelForm}>
      <input
        type="text"
        className="form-control search-input"
        placeholder="введите запрос"
        onChange={onChangeSearchPanel}
        value={searchQuery}
      />
    </form>
  )
}

export default SearchPanel
