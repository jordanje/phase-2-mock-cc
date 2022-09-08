import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ listings, setListings ] = useState([])
  const [ inputValue, setInputValue ] = useState("")
  const [ searchValue, setSearchValue ] = useState("")
  const [ sortByName , setSoryByName ] = useState(false)
 


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

  function handleSortLocation(){
    setSoryByName((sortByName) => !sortByName)
  }

  const deleteItem = (id) => {
   const updatedListenings = listings.filter((listing) => listing.id !== id)
   setListings(updatedListenings)
  }

  const searchItems = listings
  .filter((listing) => listing.description.toLowerCase().includes(searchValue.toLowerCase()))
  .sort((listing1, listing2) => {
 if(sortByName === true){
  const list1 = listing1.location.toLowerCase()
  const list2 = listing2.location.toLowerCase()
  return list1.localeCompare(list2)
 }
})


 

  return (
    <div className="app">
      <Header handleSubmit={handleSubmit} inputValue={inputValue} handleSearchChange={handleSearchChange}/>
      <ListingsContainer listings={searchItems} deleteItem={deleteItem} handleSortLocation={handleSortLocation} sortByName={sortByName}/>
    </div>
  );
}

export default App;
