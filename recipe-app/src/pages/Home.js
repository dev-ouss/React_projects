import { useState, useEffect } from "react";
import Slider from "../components/Slider";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [vegRecipes, setVegRecipes] = useState([]);
  const fetchRecipes = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await res.json();
    setRecipes(data.recipes);
  };
  const fetchVegRecipes = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=vegetarian`
    );
    const data = await res.json();
    setVegRecipes(data.results);
  };

  useEffect(() => {
    fetchRecipes();
    fetchVegRecipes();
  }, []);
  return (
    <div>
      <h4>Trending</h4>
      <Slider recipes={recipes} />
      <h4>Our Vegetarian Picks</h4>
      <Slider recipes={vegRecipes} />
    </div>
  );
};

export default Home;
