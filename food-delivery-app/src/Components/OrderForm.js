import React, { useState, useEffect } from "react";

const OrderForm = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);
  const [orderedMeals, setOrderedMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
    loadOrderedMeals();
  }, []);

  const fetchMeals = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData.meals)) {
          setMeals(responseData.meals);
        } else {
          setMeals([]);
        }
      })
      .catch((error) => console.error("Error fetching meals: ", error));
  };

  const loadOrderedMeals = () => {
    const savedMeals = localStorage.getItem("orderedMeals");
    if (savedMeals) {
      setOrderedMeals(JSON.parse(savedMeals));
    }
  };

  useEffect(() => {
    localStorage.setItem("orderedMeals", JSON.stringify(orderedMeals));
  }, [orderedMeals]);

  const handleMealSelect = (event) => {
    const selectedMealId = event.target.value;
    setSelectedMeals((prevSelectedMeals) =>
      prevSelectedMeals.includes(selectedMealId)
        ? prevSelectedMeals.filter((mealId) => mealId !== selectedMealId)
        : [...prevSelectedMeals, selectedMealId]
    );
  };

  const handleOrderSubmit = () => {
    const orderedMealsData = meals.filter((meal) =>
      selectedMeals.includes(meal.idMeal)
    );
    setOrderedMeals(orderedMealsData);
  };

  return (
    <div>
      <h1>Order Form</h1>
      <form>
        <label htmlFor="meals">Select Meals:</label>
        <select
          id="meals"
          name="meals"
          multiple
          size="5"
          onChange={handleMealSelect}
          value={selectedMeals}
        >
          {meals.map((meal) => (
            <option key={meal.idMeal} value={meal.idMeal}>
              {meal.strMeal}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleOrderSubmit}>
          Order
        </button>
      </form>
      <div>
        <h2>Ordered Meals:</h2>
        <ul>
          {orderedMeals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderForm;
