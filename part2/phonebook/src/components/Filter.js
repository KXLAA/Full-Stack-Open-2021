import React from "react";

export const Filter = ({ filter, search }) => {
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
