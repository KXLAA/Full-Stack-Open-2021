import React, { useState } from "react";

export const Filter = ({ numbers, setFoundNumbers }) => {
  const [search, setSearch] = useState("");

  const filter = (event) => {
    const searchInput = event.target.value;
    if (searchInput !== "") {
      const results = numbers.filter((number) =>
        number.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFoundNumbers(results);
    } else {
      setFoundNumbers(numbers);
    }
    setSearch(searchInput.trim());
  };

  return (
    <>
      <label htmlFor="name">Filter shown with: </label>
      <input
        type="search"
        value={search}
        onChange={filter}
        placeholder="Filter"
      />
    </>
  );
};
