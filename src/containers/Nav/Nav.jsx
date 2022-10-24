import React from 'react'
import "./Nav.scss"
import SearchBox from "../SearchBox/SearchBox"
import FiltersList from "../FiltersList/FiltersList"

const Nav = (props) => {

    const { beersHighAbvFunction, beersClassicRangeFunction, beersAcidicPh4Function, searchTerm, handleInput, searchInputValue } = props;

  return (
    <section className="punk-api__nav">
        <SearchBox 
        searchTerm={searchTerm} 
        handleInput={handleInput} 
        searchInputValue={searchInputValue}
        />
        <FiltersList
          beersHighAbvFunction ={beersHighAbvFunction}
          beersClassicRangeFunction = {beersClassicRangeFunction}
          beersAcidicPh4Function = {beersAcidicPh4Function}
        />
      </section>
  )
}

export default Nav