import React from "react";
import Header from "./Header";
import Content from "./Content";

export default function Course({ courses }) {
  return (
    <>
      {courses.map((course) => (
        <>
          <Header name={course.name} />
          <Content parts={course.parts} />
        </>
      ))}
    </>
  );
}
