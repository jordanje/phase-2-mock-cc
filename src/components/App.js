import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([])
  const [ inputValue, setInputValue ] = useState("")
  const [ searchValue, setSearchValue ] = useState("")
 


  function handleSearchChange(event){
    setInputValue(event.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setListings(data))
    }, [])


  function handleSubmit(e) {
    e.preventDefault();
    setSearchValue(inputValue)
  }

  const deleteItem = (id) => {
   const updatedListenings = listings.filter((listing) => listing.id !== id)
   setListings(updatedListenings)
  }

  const searchItems = listings.filter((listing) => listing.description.toLowerCase().includes(searchValue.toLowerCase()))


  return (
    <div className="app">
      <Header handleSubmit={handleSubmit} inputValue={inputValue} handleSearchChange={handleSearchChange}/>
      <ListingsContainer listings={searchItems} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
