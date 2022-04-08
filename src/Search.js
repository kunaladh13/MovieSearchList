import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFuntion = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  const resetInputField = () => {
    setSearchValue("");
  };
  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChange}
        type="text"
      />
      <input onClick={callSearchFuntion} type="submit" value="SEARCH" />
    </form>
  );
};

export default Search;
