import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteItem, handleSortLocation, sortByName}) {
  return (
    <main>
      <div style={{margin: "5px"}}>
        Location A-Z: <button onClick={handleSortLocation}>{sortByName? "OFF" : "ON"}</button>
      </div>
     
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} deleteItem={deleteItem}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
