import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [foundUsers, setFoundUsers] = useState([...persons]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
      setFoundUsers(response.data);
    });
  }, []);

  const addToBook = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName.name)) {
      alert(`${newName.name} is already added to phonebook`);
    } else {
      setPersons([...persons, newName]);
      setFoundUsers([...persons, newName]);
    }
    setNewName({ name: " ", number: " " });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const filter = (event) => {
    const searchInput = event.target.value;
    if (searchInput !== "") {
      const results = persons.filter((person) =>
        person.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFoundUsers(results);
    } else {
      setFoundUsers(persons);
    }
    setSearch(searchInput);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} filter={filter} />
      <PersonForm
        value={newName}
        handleChange={handleChange}
        addToBook={addToBook}
      />
      <h2>Numbers</h2>
      <Persons foundUsers={foundUsers} />
    </div>
  );
};

export default App;