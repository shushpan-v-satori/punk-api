import React from 'react'
import './FilterItem.scss'

const FilterItem = (props) => {
    const {onChangeFunction} = props;
  return (
    <div className="punk-api__nav__filters__filter">
    <h3>High ABV 6.0%</h3>
    <input
      type="checkbox"
      onChange={onChangeFunction}
    ></input>
    </div>
  )
}

export default FilterItem