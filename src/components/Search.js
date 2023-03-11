import React from "react";

function Search({ changeSearchTerm }) {

  const handleSearch = e => changeSearchTerm( e.target.value )

  return (
    <div className="flex justify-start py-2 px-6 bg-gray-30 border-b rounded-l">
      <h2 className="font-bold px-3 py-2">Search Books:</h2>
      <input
        type="text"
        id="search"
        placeholder="Type a keyword to search..."
        onChange={ handleSearch }
        className="w-2/6 px-3 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl
        border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
      />
      <p></p>
    </div>
  );
} 

export default Search;
