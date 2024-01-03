import React from "react";

function RecipeItem({ recipe, onDelete }) {
  return (
    <tr key={recipe.id}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={`Image`} /> </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button onClick={() => onDelete(recipe.id)} name="delete">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeItem;