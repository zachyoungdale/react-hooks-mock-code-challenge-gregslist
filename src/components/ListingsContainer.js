import React, { useState } from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({ listings, deleteListing, addNewListing }) {
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newLocation, setNewLocation] = useState("");

  const listingCard = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        id={listing.id}
        description={listing.description}
        image={listing.image}
        location={listing.location}
        deleteListing={deleteListing}
      />
    );
  });

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingCard}
      </ul>
      <ListingForm
        setNewDescription={setNewDescription}
        setNewImage={setNewImage}
        setNewLocation={setNewLocation}
        newDescription={newDescription}
        newImage={newImage}
        newLocation={newLocation}
        addNewListing={addNewListing}
      />
    </main>
  );
}

export default ListingsContainer;
