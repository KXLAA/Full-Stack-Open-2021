import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/all`).then((response) => {
      setCountries(response.data);
      setFoundCountries(response.data);
    });
  }, []);

  const filter = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const results = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(keyword.toLowerCase());
      });
      setFoundCountries(results);
    } else {
      setFoundCountries(countries);
    }
    setSearch(keyword);
  };

  return (
    <div className="App">
      <h1>FIND COUNTRY</h1>
      <input type="text" value={search} onChange={filter} />
      {foundCountries.length > 10 && search !== "" && (
        <p>Too Many matches, specify another filter</p>
      )}
      {foundCountries.length <= 10 &&
        foundCountries.length > 1 &&
        foundCountries.map((country) => <p>{country.name.common}</p>)}

      {foundCountries.length === 1 &&
        foundCountries.map((country) => (
          <>
            <h1>{country.name.common}</h1>
            <p>{country.capital.map((capital) => capital)}</p>
            <p>{country.population}</p>

            <h3>languages</h3>

            <ul>
              {Object.values(country.languages).map((language) => (
                <li>{language}</li>
              ))}
            </ul>

            <img alt={country.name.common} src={country.flags.svg} />
          </>
        ))}
    </div>
  );
}

export default App;
