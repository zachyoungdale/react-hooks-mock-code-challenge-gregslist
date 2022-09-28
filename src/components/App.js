import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  function deleteListing(id) {
    setListings((listings) => listings.filter((listing) => listing.id !== id));
  }

  function searchListings() {
    const searchedListing = listings.filter((listing) => {
      if (listing.description.toLowerCase().includes(search.toLowerCase())) {
        return true;
      } else {
        return null;
      }
    });
    setListings(searchedListing);
  }

  useEffect(() => {
    fetch(` http://localhost:6001/listings`)
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);
  return (
    <div className="app">
      <Header
        setSearch={setSearch}
        search={search}
        searchListings={searchListings}
      />
      <ListingsContainer listings={listings} deleteListing={deleteListing} />
    </div>
  );
}

export default App;
