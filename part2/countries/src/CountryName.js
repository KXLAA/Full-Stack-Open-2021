// import React, { useState } from "react";

// export const CountryName = ({ name, foundCountries }) => {
//   const [show, setShow] = useState({});

//   console.log(show);

//   const showDetails = () => {
//     setShow((prevCheck) => !prevCheck);
//   };

//   return (
//     <>
//       <p>{name}</p>
//       <button onClick={showDetails}>show</button>

//       {show &&
//         foundCountries.map((country) => (
//           <div key={country.area}>
//             <h1>{country.name.common}</h1>
//             <p>{country?.capital.map((capital) => capital)}</p>
//             <p>{country.population}</p>

//             <h3>languages</h3>

//             <ul>
//               {Object.values(country.languages).map((language) => (
//                 <li key={language}>{language}</li>
//               ))}
//             </ul>

//             <img alt={country.name.common} src={country.flags.svg} />
//           </div>
//         ))}
//     </>
//   );
// };
// const filter = (event) => {
//   const keyword = event.target.value;
//   if (keyword !== "") {
//     const results = countries.filter((country) => {
//       return country.name.common.toLowerCase().includes(keyword.toLowerCase());
//     });
//     setFoundCountries(results);
//   } else {
//     setFoundCountries(countries);
//   }
//   setSearch(keyword);
// };
// console.log(foundCountries);

// <div>
//   <h1>FIND COUNTRY</h1>
//   <input type="text" value={search} onChange={filter} />
//   {foundCountries.length > 10 && search !== "" && (
//     <p>Too Many matches, specify another filter</p>
//   )}

//   {foundCountries.length <= 10 &&
//     foundCountries.length > 1 &&
//     foundCountries.map((country) => (
//       <>
//         <CountryName
//           key={country.area}
//           name={country.name.common}
//           foundCountries={foundCountries}
//         />
//       </>
//     ))}

//   {foundCountries.length === 1 &&
// foundCountries.map((country) => (
//   <>
//     <h1>{country.name.common}</h1>
//     <p>{country.capital.map((capital) => capital)}</p>
//     <p>{country.population}</p>

//     <h3>languages</h3>

//     <ul>
//       {Object.values(country.languages).map((language) => (
//         <li>{language}</li>
//       ))}
//     </ul>

//     <img alt={country.name.common} src={country.flags.svg} />
// //       </>
// //     ))}
// </div>;
