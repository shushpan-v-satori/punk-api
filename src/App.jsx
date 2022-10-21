import React, { useEffect, useState } from "react"
import "./App.scss";
import CardList from "./components/CardList/CardList";
import FiltersList from "./containers/FiltersList/FiltersList";
import SearchBox from "./containers/SearchBox/SearchBox";


const App = () => {
  
  // fetch results from api
  const [beers, setBeers] = useState([]);

  const url='https://api.punkapi.com/v2/beers'

  const getBeers = async () => {
    let res = await fetch(url);
    const data = await res.json();
    setBeers(data);
  }

  useEffect(() => {
    getBeers();
  }, [])


  //working with search

  const [searchTerm, setSearchTerm] = useState("Search...");

  const searchInputValue = (event) => {  
    console.log("in clean Input");
   if ((event.target.value) === 'Search...') {
    setSearchTerm('');
   }
  }

  const handleInput = (event) => {
    console.log("in handle input");
    const searchInput = event.target.value;
    setSearchTerm(searchInput);
  };

  //working with filters

  // filtering out without images

  const [checked , setChecked] =useState(false);
  const [filterValue, setFilterValue] = useState("");

  const createFilter = (event) => {
    setChecked(event.target.checked);
    setFilterValue(event.target.value); 
  }

  console.log(filterValue, checked);

  const filteredItems = beers.filter((beer) => {
    console.log("in filtered by fllter");
    const beerNameLower = beer.name.toLowerCase();
    const beerTagline = beer.tagline.toLowerCase();
    const cleanSearchInput=searchTerm.toLowerCase();
    return ((searchTerm!="Search...") ? (beerNameLower.includes(cleanSearchInput) ||
    beerTagline.includes(cleanSearchInput)) : true)
    &&((filterValue==="beersHighAbv" && checked) ? beer.abv>6 : true)
    &&((filterValue==='beersClassicRange' && checked) ? Number(beer.first_brewed.substr(3, 6))<2010 : true)
    &&((filterValue==='beersAcidicPh4' && checked) ? (parseFloat(beer.ph) < 4) : true)
  }); 

console.log(filteredItems);

  return (
    <div className="punk-api">
      <section className="punk-api__nav">
        <SearchBox 
        searchTerm={searchTerm} 
        handleInput={handleInput} 
        searchInputValue={searchInputValue}
        />
        <FiltersList
          createFilter={createFilter}
        />
      </section>
     <CardList cardsList={filteredItems} />
    </div>
  );
};

export default App;
