import React from "react";

export const Persons = ({ foundUsers }) => {
  return (
    <>
      {foundUsers.map((user) => (
        <p key={user.name}>
          {user.name} {user.number}
        </p>
      ))}
    </>
  );
};
