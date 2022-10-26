import React, { useEffect, useState } from "react";
import "./App.scss";
import CardList from "./components/CardList/CardList";
import Nav from "./containers/Nav/Nav";

const App = () => {

  // fetch results from api
  const [beers, setBeers] = useState([]);

  const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";

  const getBeers = async () => {
    let res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  //working with search
  const [searchTerm, setSearchTerm] = useState("Search...");

  const searchInputValue = (event) => {
    if (event.target.value === "Search...") {
      setSearchTerm("");
    }
  };

  const handleInput = (event) => {
    console.log("in handle input");
    const searchInput = event.target.value;
    setSearchTerm(searchInput);
  };

  //working with filters
  const [beersHighAbv, setBeersHighAbv] = useState(false);
  const [beersClassicRange, setBeersClassicRange] = useState(false);
  const [beersAcidicPh4, setBeersAcidicPh4] = useState(false);

  const beersHighAbvFunction = (event) => {
    console.log("in high abv");
    setBeersHighAbv(!beersHighAbv);
  };

  const beersClassicRangeFunction = (event) => {
    console.log("in classic range");
    setBeersClassicRange(!beersClassicRange);
  };

  const beersAcidicPh4Function = (event) => {
    console.log("in Ph4");
    setBeersAcidicPh4(!beersAcidicPh4);
  };

  const filteredItems = beers.filter((beer) => {
    console.log("in filtered by fllter");
    const beerNameLower = beer.name.toLowerCase();
    const beerTagline = beer.tagline.toLowerCase();
    const cleanSearchInput = searchTerm.toLowerCase();
    return (
      (searchTerm !== "Search..."
        ? beerNameLower.includes(cleanSearchInput) ||
          beerTagline.includes(cleanSearchInput)
        : true) &&
      (beersHighAbv ? beer.abv > 6 : true) &&
      (beersClassicRange
        ? Number(beer.first_brewed.substr(3, 6)) < 2010
        : true) &&
      (beersAcidicPh4 ? parseFloat(beer.ph) < 4 : true)
    );
  });

  return (
    <div className="punk-api">
      <Nav
        searchTerm={searchTerm}
        handleInput={handleInput}
        searchInputValue={searchInputValue}
        beersHighAbvFunction={beersHighAbvFunction}
        beersClassicRangeFunction={beersClassicRangeFunction}
        beersAcidicPh4Function={beersAcidicPh4Function}
      />
      {filteredItems.length > 0 ? (
        <CardList cardsList={filteredItems} name="card_list"/>
      ) : (
        <p className="punk-api__empty-search">
          Nothing to display, please modify your search
        </p>
      )}
    </div>
  );
};

export default App;
