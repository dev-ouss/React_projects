import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cuisine.css";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let cuisineType = useParams();
  const fetchCuisine = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType.type}`
    );
    const data = await res.json();

    setCuisine(data.results);
  };

  useEffect(() => {
    fetchCuisine();
  }, [cuisineType]);

  return (
    <div className="grid">
      {cuisine.map((recipe, i) => {
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

export default Cuisine;
