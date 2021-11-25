import React, { useState } from "react";

export const Results = ({ foundCountries }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShow = (area) => {
    setShowMore(area);
  };

  if (foundCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (foundCountries.length < 10 && foundCountries.length > 1) {
    return foundCountries.map((foundCountry) => (
      <>
        <p key={foundCountry.area}>
          {foundCountry.name.common}{" "}
          <button onClick={() => handleShow(foundCountry.area)}>show</button>
        </p>
        {/* If showMore === foundCountry.area, show details on click */}
        {showMore === foundCountry.area && (
          <div>
            <h1>{foundCountry.name.common}</h1>
            <p>{foundCountry?.capital.map((sing) => sing)}</p>
            <p>{foundCountry.population}</p>

            <h3>Languages</h3>
            <ul>
              {/* get values from the foundCountry.languages object & convert those values into an array & use map to get individual values */}
              {Object.values(foundCountry.languages).map((language) => (
                <li>{language}</li>
              ))}
            </ul>
            <img alt={foundCountry.name.common} src={foundCountry.flags.svg} />
          </div>
        )}
      </>
    ));
  }

  if (foundCountries.length === 1) {
    return foundCountries.map((foundCountry) => (
      <>
        <h1>{foundCountry.name.common}</h1>
        <p>{foundCountry.capital.map((capital) => capital)}</p>
        <p>{foundCountry.population}</p>

        <h3>Languages</h3>
        <ul>
          {/* get values from the foundCountry.languages object & convert those values into an array & use map to get individual values */}
          {Object.values(foundCountry.languages).map((language) => (
            <li>{language}</li>
          ))}
        </ul>
        <img alt={foundCountry.name.common} src={foundCountry.flags.svg} />
      </>
    ));
  }
  return <></>;
};
