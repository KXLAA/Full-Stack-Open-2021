import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import numberService from "./services/numbers";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState({ name: "", number: "" });
  const [foundUsers, setFoundUsers] = useState([...persons]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    numberService.getAll().then((initialNum) => {
      setPersons([initialNum]);
      setFoundUsers([initialNum]);
    });
  }, []);

  console.log(foundUsers);

  const addToBook = (event) => {
    event.preventDefault();

    const numObj = {
      name: newName.name,
      number: newName.number,
      date: new Date().toISOString(),
    };

    const userToUpdate = foundUsers.find((user) => user.name === numObj.name);

    if (userToUpdate) {
      window.confirm(
        `${userToUpdate.name} is already added to the phonebook, replace the old number with a new one ?`
      );
      const updatedUser = {
        ...userToUpdate,
        name: userToUpdate.name,
        number: userToUpdate.number,
        date: new Date().toISOString(),
      };
      numberService.update(userToUpdate.id, updatedUser).then((returnedNum) => {
        console.log(userToUpdate.id);
        console.log(returnedNum);
        console.log(returnedNum.id);
      });
    } else {
      numberService.create(numObj).then((returnedNum) => {
        setFoundUsers([...foundUsers, returnedNum]);
      });
    }

    setNewName({ name: " ", number: " " });
  };

  console.log(foundUsers);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewName((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  const deleteNum = (userId, user) => {
    if (window.confirm(` Are you sure you want to delete ${user} ? `)) {
      numberService.deleteNum(userId);
      setFoundUsers(foundUsers.filter((user) => user.id !== userId));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFoundUsers={setFoundUsers} />
      <PersonForm
        value={newName}
        handleChange={handleChange}
        addToBook={addToBook}
      />
      <h2>Numbers</h2>
      <Persons foundUsers={foundUsers} deleteNum={deleteNum} />
    </div>
  );
};

export default App;
