import React, { useState } from "react";

function ListingCard({listing, deleteItem}) {
  const [ isLiked, setIsLiked ] = useState(false)

  const handleClick = () => {
    setIsLiked((isLiked) => !isLiked)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    }).then(deleteItem(id))
  }

  const { id, description, image, location } = listing;
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {isLiked ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
