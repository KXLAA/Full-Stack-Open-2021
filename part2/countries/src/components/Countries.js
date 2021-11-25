import { React, useState } from "react";

export const Countries = ({ foundCountry }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <p>
        {foundCountry.name.common}{" "}
        <button onClick={() => setShowMore(!showMore)}>show</button>
      </p>

      {showMore && (
        <div>
          <h1>{foundCountry.name.common}</h1>
          {/* optional chaining to prevent errors  */}
          <p>{foundCountry?.capital?.map((sing) => sing)}</p>
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
  );
};
