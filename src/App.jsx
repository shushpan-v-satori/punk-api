import React, { useEffect, useState } from "react"
import "./App.scss";
import CardList from "./components/CardList/CardList";
import FiltersList from "./containers/FiltersList/FiltersList";
import SearchBox from "./containers/SearchBox/SearchBox";


const App = () => {
  
  // fetch results from api
  const [beers, setBeers] = useState([]);

  const url='https://api.punkapi.com/v2/beers?page=2&per_page=80'

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

  const [beersHighAbv , setBeersHighAbv] =useState(false);
  const [beersClassicRange , setBeersClassicRange] =useState(false);
  const [beersAcidicPh4 , setBeersAcidicPh4] =useState(false);

  const beersHighAbvFunction = (event) => {
    setBeersHighAbv(!beersHighAbv);
  }

  const beersClassicRangeFunction = (event) => {
    setBeersClassicRange(!beersClassicRange);
  }

  const beersAcidicPh4Funciton = (event) => {
    setBeersAcidicPh4(!beersAcidicPh4);
  }

  const filteredItems = beers.filter((beer) => {
    console.log("in filtered by fllter");
    const beerNameLower = beer.name.toLowerCase();
    const beerTagline = beer.tagline.toLowerCase();
    const cleanSearchInput=searchTerm.toLowerCase();
    return ((searchTerm!="Search...") ? (beerNameLower.includes(cleanSearchInput) ||
    beerTagline.includes(cleanSearchInput)) : true)
    &&(beersHighAbv ? beer.abv>6 : true)
    &&(beersClassicRange ? Number(beer.first_brewed.substr(3, 6))<2010 : true)
    &&(beersAcidicPh4 ? (parseFloat(beer.ph) < 4) : true)
  }); 

  return (
    <div className="punk-api">
      <section className="punk-api__nav">
        <SearchBox 
        searchTerm={searchTerm} 
        handleInput={handleInput} 
        searchInputValue={searchInputValue}
        />
        <FiltersList
          beersHighAbvFunction ={beersHighAbvFunction}
          beersClassicRangeFunction = {beersClassicRangeFunction}
          beersAcidicPh4Funciton = {beersAcidicPh4Funciton}
        />
      </section>
     <CardList cardsList={filteredItems} />
    </div>
  );
};

export default App;
