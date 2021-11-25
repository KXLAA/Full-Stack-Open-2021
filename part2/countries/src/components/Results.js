import React from "react";
import { Countries } from "./Countries";
import { Country } from "./Country";

export const Results = ({ foundCountries }) => {
  if (foundCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  if (foundCountries.length < 10 && foundCountries.length > 1) {
    return foundCountries.map((foundCountry) => (
      <>
        <Countries key={foundCountry.area} foundCountry={foundCountry} />
      </>
    ));
  }

  if (foundCountries.length === 1) {
    return foundCountries.map((foundCountry) => (
      <Country foundCountry={foundCountry} />
    ));
  }
  return <></>;
};
