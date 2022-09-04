import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Searched = () => {
  const [recipes, setRecipes] = useState([]);
  const params = useParams();
  const fetchRecipes = async (name) => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=6`
    );
    const data = await res.json();
    setRecipes(data.recipes);
  };
  useEffect(() => {
    fetchRecipes(params.search);
  }, [params.search]);
  console.log(params.search);
  console.log(recipes);
  return (
    <div className="grid">
      {recipes.map((recipe, i) => {
        return (
          <div className="card" key={i}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt=""></img>
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Searched;
