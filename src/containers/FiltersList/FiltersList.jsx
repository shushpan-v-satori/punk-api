import React, { useState } from 'react'
import './FiltersList.scss'

const FiltersList = (props) => {

  const { createFilter } = props;
  
  return (
    <div className="punk-api__nav__filters">
    <div className="punk-api__nav__filters__filter">
      <h3>High ABV 6.0%</h3>
      <input
        type="checkbox"
        value="beersHighAbv"
        onChange={createFilter}
      ></input>
    </div>
    <div className="punk-api__nav__filters__filter">
      <h3>Classic Range</h3>
      <input
        type="checkbox"
        value="beersClassicRange"
        onChange={createFilter}
      ></input>
    </div>
    <div className="punk-api__nav__filters__filter">
      <h3>Acidic ph4</h3>
      <input
        type="checkbox"
        value="beersAcidicPh4"
        onChange={createFilter}
      ></input>
    </div>
  </div>
  )
}

export default FiltersList