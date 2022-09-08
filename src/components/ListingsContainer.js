import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteItem}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} deleteItem={deleteItem}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
