import React, { useState } from "react";
import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

const FiltersList = (props) => {
  const {
    beersHighAbvFunction,
    beersClassicRangeFunction,
    beersAcidicPh4Funciton,
  } = props;

  return (
    <div className="punk-api__nav__filters">
      <FilterItem onChangeFunction={beersHighAbvFunction} />
      <FilterItem onChangeFunction={beersClassicRangeFunction} />
      <FilterItem onChangeFunction={beersAcidicPh4Funciton} />
    </div>
  );
};

export default FiltersList;
