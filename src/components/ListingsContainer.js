import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {
  const [sorted, setSorted] = useState(false)

  const allListings = listings.map((listing) => {
    return (
      <ListingCard
        key={listing.id}
        listing={listing}   
        onDelete={onDelete}
      />  
    ) 
  })

  const sortedArray = [...listings]
  sortedArray.sort(function(a, b) {
    return a.location.localeCompare(b.location)
  })

  const mapArray = sortedArray.map((list) => (
    <ListingCard
        key={list.id}
        listing={list}
        onDelete={onDelete}
      />  
  ))

  function handleSort() {
    setSorted(sorted => !sorted)
  }

  return (
    <main>
      <button onClick={handleSort}>sorted</button>
      <ul className="cards">
        {sorted ? mapArray : allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
