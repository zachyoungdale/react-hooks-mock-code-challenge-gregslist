import React, { useState } from "react";

function ListingCard({ id, description, image, location, deleteListing }) {
  const [favoriteButton, setFavoriteButton] = useState(false);

  function toggleFavorite() {
    setFavoriteButton((favoriteButton) => !favoriteButton);
  }

  function onHandleDelete() {
    fetch(` http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => deleteListing(id));
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favoriteButton ? (
          <button
            className="emoji-button favorite active"
            onClick={toggleFavorite}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={onHandleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
