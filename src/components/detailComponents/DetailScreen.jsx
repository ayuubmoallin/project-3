import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css";
import RecipeDetailsImage from "./RecipeDetailsImage";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";

  useEffect(() => {
    axios.get(`${url}/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <section>
      <RecipeDetailsImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={styles.details_container}>
        <div className={styles.ingredients_container}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {recipe.ingredients &&
            recipe.ingredients.map((item, index) => {
              return (
                <h4>
                  {item.quantity} {item.ingredient}
                </h4>
              );
            })}
        </div>

        <div className={styles.instruction_container}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
