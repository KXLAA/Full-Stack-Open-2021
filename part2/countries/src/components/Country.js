import React, { useEffect, useState } from "react";
import axios from "axios";

export const Country = ({ foundCountry }) => {
  const [weather, setWeather] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const baseURL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${foundCountry.name.common}`;

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      return setWeather(response.data);
    });
  }, [baseURL]);

  return (
    <>
      <h1>{foundCountry.name.common}</h1>
      <p> Capital: {foundCountry.capital.map((capital) => capital)}</p>
      <p> Population: {foundCountry.population}</p>

      <h3>Languages</h3>
      <ul>
        {/* get values from the foundCountry.languages object & convert those values into an array & use map to get individual values */}
        {Object.values(foundCountry.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img alt={foundCountry.name.common} src={foundCountry.flags.svg} />

      <h3>Weather in {weather.location.name} </h3>
      <p>Temperature: {weather.current?.temperature}</p>
      <img src={weather.current.weather_icons} alt={weather.location.name} />
      <p>
        wind {weather.current.wind_speed} direction{" "}
        {weather.current.wind_dir.toUpperCase()}
      </p>
    </>
  );
};
