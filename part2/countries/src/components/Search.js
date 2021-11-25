import React, { useState } from "react";

export const Search = ({ apiCountries, setFoundCountries }) => {
  const [search, setSearch] = useState(""); //search input state

  const filterCountries = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      // If the search field is not empty, filter apiCountries based on input
      const filteredCountries = apiCountries.filter((apiCountry) =>
        //convert search query from user & api data to lowercase
        //Check if api dat includes users search query
        apiCountry.name.common.toLowerCase().includes(keyword.toLowerCase())
      );
      //If it does set foundCountries state to the result
      setFoundCountries(filteredCountries);
    } else {
      // If the search field is empty, show all countries from api
      setFoundCountries(apiCountries);
    }
    // set search input state, to keyword
    setSearch(keyword);
  };

  return (
    <>
      <p>
        FIND COUNTRIES{"  "}
        <input
          type="search"
          value={search}
          onChange={filterCountries}
          placeholder="Filter"
        />
      </p>
    </>
  );
};
