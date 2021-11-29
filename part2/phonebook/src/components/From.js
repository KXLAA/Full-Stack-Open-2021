import React from "react";

export const Form = ({ newNumber, handleChange, addNumbers }) => {
  return (
    <>
      <form>
        <label htmlFor="name">Full Name:</label>
        {"  "}
        <input
          required
          name="name"
          type="text"
          value={newNumber.name}
          onChange={handleChange}
        />
        {"  "}
        <label htmlFor="number">Phone Number:</label> {"  "}
        <input
          name="number"
          type="text"
          value={newNumber.number}
          onChange={handleChange}
        />
        <button onClick={addNumbers} type="submit">
          ADD NUMBER
        </button>
      </form>
    </>
  );
};
