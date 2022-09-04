import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Recipe.css";
const Recipe = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState([]);
  const [info, setInfo] = useState("instructions");
  const [ingredients, setIngredients] = useState("");
  const fetchRecipe = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.json();
    setRecipe(data);
  };
  const fetchIngredients = () => {
    const array = [];
    recipe.extendedIngredients.map((ingredient) => array.push(ingredient.name));
    setIngredients(array.join(","));
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className="wrapper">
      <div className="image-div">
        <h4>{recipe.title}</h4>
        <img src={recipe.image} alt=""></img>
      </div>
      <div className="text-div">
        <div className="btn-wrapper">
          <button
            className="instr"
            onClick={(e) => {
              setInfo(e.target.textContent);
            }}
          >
            instructions
          </button>
          <button
            onClick={(e) => {
              fetchIngredients();
              setInfo(e.target.textContent);
            }}
          >
            ingredients
          </button>
        </div>
        <p
          dangerouslySetInnerHTML={{
            __html: info === "instructions" ? recipe.instructions : ingredients,
          }}
        ></p>
      </div>
    </div>
  );
};

export default Recipe;
