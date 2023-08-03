import React, { useState } from "react";

const DeleteMeals = () => {
  const [mealName, setMealName] = useState("");

  const handleMealNameChange = (event) => {
    setMealName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make the DELETE request to delete the meal by its name
    fetch(`http://localhost:3000/meals?strMeal=${mealName}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log("Meal deleted successfully:", responseData);
        // Reset the form field
        setMealName("");
      })
      .catch((error) => console.error("Error deleting meal: ", error));
  };

  return (
    <div>
      <h2>Delete a Meal</h2>
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
        <button type="submit">Delete Meal</button>
      </form>
    </div>
  );
};

export default DeleteMeals;
