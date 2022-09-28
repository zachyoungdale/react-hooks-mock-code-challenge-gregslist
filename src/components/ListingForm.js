import React, { useState } from "react";

function ListingForm({ addNewListing }) {
  const [newDescription, setNewDescription] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newLocation, setNewLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newListing = {
      description: newDescription,
      image: newImage,
      location: newLocation,
    };
    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    })
      .then((res) => res.json())
      .then(() => addNewListing(newListing));
  }

  return (
    <div>
      <h1>Enter New Listing</h1>
      <form onSubmit={handleSubmit}>
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <label for="image">Image</label>
        <input
          type="text"
          name="image"
          placeholder="Image"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <label for="location">Location</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ListingForm;
