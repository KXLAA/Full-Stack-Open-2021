import React, { useState } from "react";

export const Filter = ({ persons, setFoundUsers }) => {
  const [search, setSearch] = useState("");

  const filter = (event) => {
    const searchInput = event.target.value;
    if (searchInput !== "") {
      const results = persons.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFoundUsers(results);
    } else {
      setFoundUsers(persons);
    }
    setSearch(searchInput.trim());
  };

  return (
    <>
      <label htmlFor="name">filer shown with: </label>
      <input
        type="search"
        value={search}
        onChange={filter}
        placeholder="Filter"
      />
    </>
  );
};
