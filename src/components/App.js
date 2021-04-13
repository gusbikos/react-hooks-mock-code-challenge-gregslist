import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

const API = "http://localhost:6001/listings"

function App() {
  const [listings, setListings] = useState([])
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
  fetch(API)
  .then(response => response.json())
  .then(listings => { 
    console.log(listings)
    setListings(listings)
    })
  }, [] )

  function handleDelete(deleteList) {
    const updateList = listings.filter((listing) => listing.id !== deleteList.id)
    setListings(updateList)
  }

  const filterName = listings.filter((list) => {
    return list.description.toLowerCase().includes(searchName.toLowerCase())
    
  })
  
  return (
    <div className="app">
      <Header onSearch={setSearchName} />
      <ListingsContainer listings={filterName} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
