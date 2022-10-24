import React from 'react'
import './FilterItem.scss'

const FilterItem = (props) => {
    const {onChangeFunction, filterName} = props;
  return (
    <div className="punk-api__nav__filters__filter">
    <h3>{filterName}</h3>
    <input
      type="checkbox"
      onChange={onChangeFunction}
    ></input>
      <span class="checkmark"></span>
    </div>
  )
}

export default FilterItem