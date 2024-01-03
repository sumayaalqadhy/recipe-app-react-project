import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ setRecipes }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRecipes((prevRecipes) => [...prevRecipes, formData]);
    setFormData({ ...initialFormState });
  };

  return (
    <form onSubmit={handleSubmit} name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  id="cuisine"
                  type="text"
                  name="cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label>
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label>
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                />
              </label>
            </td>
            <td>
              <label>
                <textarea
                  id="preparation"
                  type="textarea"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;