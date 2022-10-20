import React from "react";

//passed in props
//add on change event & pass search as a prop bc its the value
function Search({ search, setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;
