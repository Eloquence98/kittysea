import React from "react";

const SearchBox = ({ searchfield, searchChange, searchItem }) => {
  return (
    <div className="pa2">
      <input
        className="search-box pa3 ba input-reset"
        type="search"
        placeholder={`search ${searchItem}`}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
