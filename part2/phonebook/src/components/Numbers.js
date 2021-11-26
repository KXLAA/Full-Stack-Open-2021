import React from "react";

export const Numbers = ({ foundNumbers, deleteNumbers }) => {
  return (
    <>
      {foundNumbers.map((user) => (
        <p key={user.id}>
          {user.name} {user.number}{" "}
          <button onClick={() => deleteNumbers(user.id, user.name)}>
            {" "}
            DELETE{" "}
          </button>
        </p>
      ))}
    </>
  );
};
