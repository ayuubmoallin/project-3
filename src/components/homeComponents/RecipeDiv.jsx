import React, { useState } from "react";
import RecipeCard from "../../widgets/RecipeCard";
import styles from "./Home.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import Loader from "../../widgets/loading/Loader";

const RecipeDiv = ({ recipes, isRecipesLoading }) => {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return (
        title.includes(searchParams) &&
        title.length !== 0 &&
        recipe.image_url.length !== 0
      );
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />;
    });

  return (
    <section className={styles.recipe_section}>
      <h2>Search a recipe!</h2>
      <span className={styles.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={styles.recipe_container}>
        {recipeDisplay ? (
          isRecipesLoading ? (
            <Loader />
          ) : (
            recipeDisplay
          )
        ) : (
          <h2>No Recipes :(</h2>
        )}
      </div>
    </section>
  );
};

export default RecipeDiv;
