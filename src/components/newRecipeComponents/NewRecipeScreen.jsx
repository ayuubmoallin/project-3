import React, { useState } from "react";
import styles from "./NewRecipe.module.css";
import { Formik } from "formik";
import axios from "axios";
import Loader from "../../widgets/loading/Loader";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  // managing loading
  const [isLoading, setLoading] = useState(false);
  const url = "https://recipes.devmountain.com";

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = async (values) => {
    try {
      if (ingredients.length === 0) {
        return alert("Please add some ingredients");
      }
      setLoading(true);
      values.ingredients = ingredients;
      console.log(values);
      const response = await axios.post(`${url}/recipes`, values);
      console.log(response.data);
      setLoading(false);
      alert("Recipe has been uploaded successfully");
    } catch (e) {
      console.log(e);
    }
  };

  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
              <input
                name="recipeName"
                value={values.recipeName}
                placeholder="Title your Recipe!"
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                value={values.imageURL}
                name="imageURL"
                placeholder="Paste an Image URL"
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <div className={styles.radio_container}>
              <span>
                <input
                  type="radio"
                  value="Cook"
                  onChange={handleChange}
                  name="type"
                  style={styles.input}
                  required
                />
                <h5>Cook</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Bake"
                  onChange={handleChange}
                  name="type"
                  style={styles.input}
                  required
                />
                <h5>Bake</h5>
              </span>
              <span>
                <input
                  type="radio"
                  value="Drink"
                  onChange={handleChange}
                  name="type"
                  style={styles.input}
                  required
                />
                <h5>Drink</h5>
              </span>
            </div>
            <div className={styles.input_container}>
              <input
                value={values.prepTime}
                name="prepTime"
                placeholder="Prep Time"
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                value={values.cookTime}
                name="cookTime"
                placeholder="Cook Time"
                onChange={handleChange}
                style={styles.input}
                required
              />
              <input
                value={values.serves}
                name="serves"
                placeholder="Serves"
                onChange={handleChange}
                style={styles.input}
                required
              />
            </div>
            <h3>Ingredients</h3>
            <div className={styles.input_container}>
              <div className={styles.ingredient_inputs}>
                <input
                  value={name}
                  placeholder="Ingredient"
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
                />
                <input
                  value={quantity}
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  style={styles.input}
                />
              </div>
              <ul>{ingredientDisplay}</ul>
            </div>
            <button
              type="button"
              className={styles.my_button}
              onClick={addIngredient}
            >
              Add Another
            </button>
            <textarea
              value={values.instructions}
              name="instructions"
              placeholder="Type your instructions"
              rows={5}
              onChange={handleChange}
            />
            {isLoading ? (
              <Loader />
            ) : (
              <button type="submit" className="blue-btn">
                Submit
              </button>
            )}
          </form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
