import React, { useState } from "react";

const AddMeals = () => {
  const [mealName, setMealName] = useState("");

  const handleMealNameChange = (event) => {
    setMealName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the new meal data object
    const newMealData = {
      strMeal: mealName,
    };

    // Make the PATCH request to add the new meal
    fetch("http://localhost:3000/meals", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMealData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("New meal added successfully:", responseData);
        // Clear the form field after successful submission
        setMealName("");
      })
      .catch((error) => console.error("Error adding new meal: ", error));
  };

  return (
    <div>
      <h1>Add New Meal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mealName">Meal Name:</label>
          <input
            type="text"
            id="mealName"
            value={mealName}
            onChange={handleMealNameChange}
            required
          />
        </div>
        <button type="submit">Add Meal</button>
      </form>
    </div>
  );
};

export default AddMeals;
