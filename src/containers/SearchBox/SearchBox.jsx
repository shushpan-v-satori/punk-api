import React from 'react'
import './SearchBox.scss'

const SearchBox = (props) => {
    const { searchTerm, handleInput, searchInputValue } = props;

  return (
    <input
          type="text"
          name="beers"
          value={searchTerm}
          onInput={handleInput}
          onKeyDown={searchInputValue}
          className="punk-api__nav__search"
        ></input>
  )
}

export default SearchBox