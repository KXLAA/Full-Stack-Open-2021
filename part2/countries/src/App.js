import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";
import { Results } from "./components/Results";

function App() {
  const [apiCountries, setApiCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  const apiURL = `https://restcountries.com/v3.1/all`;

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setApiCountries(response.data);
    });
  }, [apiURL]);

  return (
    <>
      <Search
        apiCountries={apiCountries}
        setFoundCountries={setFoundCountries}
      />
      <Results foundCountries={foundCountries} />
    </>
  );
}

export default App;
