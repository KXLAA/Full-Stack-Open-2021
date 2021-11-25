import React from "react";

export const Persons = ({ foundUsers, deleteNum }) => {
  return (
    <>
      {foundUsers.map((user) => (
        <p key={user.id}>
          {user.name} {user.number}
          <button onClick={() => deleteNum(user.id, user.name)}>
            {" "}
            DELETE{" "}
          </button>
        </p>
      ))}
    </>
  );
};
