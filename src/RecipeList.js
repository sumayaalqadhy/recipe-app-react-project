import React from "react";
import RecipeRow from "./RecipeItem";
import "./RecipeList.css";

function RecipeList({ recipes, setRecipes }) {
  const handleDelete = (index) => {
    setRecipes((prevRecipes) => {
      const updatedRecipes = [...prevRecipes];
      updatedRecipes.splice(index, 1);
      return updatedRecipes;
    });
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <RecipeRow key={recipe.id} recipe={recipe} onDelete={() => handleDelete(index)} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
