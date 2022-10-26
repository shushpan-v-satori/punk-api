import React from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = (props) => {
  const {
    beersHighAbvFunction,
    beersClassicRangeFunction,
    beersAcidicPh4Function,
  } = props;

  return (
    <div className="punk-api__nav__filters">
      <FilterItem onChangeFunction={beersHighAbvFunction} filterName = "High ABV (>6%)"/>
      <FilterItem onChangeFunction={beersClassicRangeFunction} filterName="Classic Range"/>
      <FilterItem onChangeFunction={beersAcidicPh4Function} filterName="Acidic (ph < 4)"/>
    </div>
  );
};

export default FiltersList;
