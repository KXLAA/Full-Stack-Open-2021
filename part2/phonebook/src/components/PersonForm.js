import React from "react";

export const PersonForm = ({ value, handleChange, addToBook }) => {
  return (
    <>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input
          name="name"
          type="text"
          value={value.name}
          onChange={handleChange}
        />

        <label htmlFor="number">Phone Number:</label>
        <input
          name="number"
          type="text"
          value={value.number}
          onChange={handleChange}
        />

        <button onClick={addToBook} type="submit">
          add
        </button>
      </form>
    </>
  );
};
