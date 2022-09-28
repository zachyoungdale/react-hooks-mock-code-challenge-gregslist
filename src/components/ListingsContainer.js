import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";
import ListingForm from "./ListingForm";

function ListingsContainer({ listings, deleteListing, addNewListing }) {
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
      <ListingForm addNewListing={addNewListing} />
    </main>
  );
}

export default ListingsContainer;
