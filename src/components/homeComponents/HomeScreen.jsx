import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import RecipeDiv from "./RecipeDiv";
const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesLoading, setLoading] = useState(true)

  const getRecipes = async () => {
    try {
      const response = await axios.get(
        "https://recipes.devmountain.com/recipes"
      );
      console.log(response.data, "loaded"); // Logging
      setRecipes(response.data); // setting state
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <RecipeDiv recipes={recipes} isRecipesLoading={isRecipesLoading} />
    </div>
  );
};

export default HomeScreen;
