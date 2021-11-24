import React from "react";
import Part from "./Part";

export default function Content({ parts }) {
  const exerciseSum = parts.reduce((total, part) => {
    return total + part.exercises;
  }, 0);

  return (
    <>
      {parts.map((part, id) => (
        <Part key={id} part={part} />
      ))}
      <h3>total of {exerciseSum} exercises</h3>
    </>
  );
}
