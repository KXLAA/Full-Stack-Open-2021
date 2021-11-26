import React, { useState, useEffect } from "react";
import { Filter } from "./components/Filter";
import numberService from "./services/numbers";
import { Numbers } from "./components/Numbers";
import { Form } from "./components/From";
import Notification from "./components/Notification";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [foundNumbers, setFoundNumbers] = useState([]);
  const [newNumber, setNewNumber] = useState({ name: "", number: "" });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    numberService.getAll().then((initialNum) => {
      setNumbers(initialNum);
      setFoundNumbers(initialNum);
    });
  }, []);

  const addNumbers = (event) => {
    event.preventDefault();

    //Make new number object
    const newNumberObj = {
      name: newNumber.name,
      number: newNumber.number,
      date: new Date().toISOString(),
    };

    //Check if new number object matches with any currently existing number
    const numberToUpdate = numbers.find(
      (number) => number.name === newNumberObj.name
    );

    //if it does, update old number object, with new number object
    if (numberToUpdate) {
      window.confirm(
        `${newNumberObj.name} is already added to the phonebook, replace the old number with a new one ?`
      );

      const updatedNumber = {
        ...numberToUpdate,
        name: newNumberObj.name,
        number: newNumberObj.number,
        date: new Date().toISOString(),
      };

      numberService
        .update(numberToUpdate.id, updatedNumber)
        .then((returnedNumber) => {
          setNumbers(
            numbers.map((number) =>
              number.id !== returnedNumber.name ? number : returnedNumber
            )
          );
          //Show notification
          setNotification(`Updated: ${returnedNumber.name}`);
          //clear notification after 5 seconds
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        });
    } else {
      //if it does not, add new Number
      numberService.create(newNumberObj).then((newNumber) => {
        setFoundNumbers([...foundNumbers, newNumber]);
        //Show notification
        setNotification(`Added: ${newNumberObj.name}`);
        //clear notification after 5 seconds
        setTimeout(() => {
          setNotification(null);
        }, 5000);
      });
    }
    setNewNumber({ name: " ", number: " " });
  };

  const deleteNumbers = (userId, user) => {
    if (window.confirm(` Are you sure you want to delete ${user} ? `)) {
      numberService.deleteNum(userId);
      setFoundNumbers(foundNumbers.filter((user) => user.id !== userId));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNumber((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  };

  return (
    <div>
      <Notification name={notification} />
      <h2>Phone-Book</h2>
      <Filter numbers={numbers} setFoundNumbers={setFoundNumbers} />

      <h2>Numbers</h2>
      <Numbers foundNumbers={foundNumbers} deleteNumbers={deleteNumbers} />
      <h2>Add New Number</h2>

      <Form
        newNumber={newNumber}
        handleChange={handleChange}
        addNumbers={addNumbers}
      />
    </div>
  );
};

export default App;
