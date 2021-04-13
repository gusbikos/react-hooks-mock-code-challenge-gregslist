import React, { useState }  from "react";

function Search( {onSearch} ) {
  const [searchName, setSearchName] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");

    onSearch(searchName)

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
