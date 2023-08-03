import React, { useState, useEffect } from "react";

const Home = () => {
  const [mealData, setMealData] = useState([]);
  const [mealImages, setMealImages] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((responseData) => {
        if (Array.isArray(responseData)) {
          // Extract meal names and update the state
          setMealData(responseData);
          // Fetch images for each meal one by one using a loop
          fetchMealImages(responseData);
        } else {
          setMealData([]);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  const fetchMealImages = (meals) => {
    const mealImages = [];
    let index = 0;

    const fetchNextImage = () => {
      if (index < meals.length) {
        const meal = meals[index];
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
          .then((response) => response.json())
          .then((responseData) => {
            mealImages.push(responseData.meals[0].strMealThumb);
            index++;
            fetchNextImage();
          })
          .catch((error) => {
            console.error("Error fetching meal image: ", error);
            index++;
            fetchNextImage();
          });
      } else {
        // All images fetched, update the state with mealImages
        setMealImages(mealImages);
      }
    };

    // Start fetching the images one by one
    fetchNextImage();
  };

  return (
    <div>
      <h1>Meal Page</h1>
      <div id="meals">
      <ul>
        {mealData.map((meal, index) => (
          <li key={index}>
            <img
              src={mealImages[index]}
              alt={`Meal ${index + 1}`}
              style={{ width: "100px" }}
            />
            {meal.strMeal}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Home;
