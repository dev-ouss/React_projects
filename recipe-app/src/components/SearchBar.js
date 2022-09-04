import { BiSearchAlt2 } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../pages/Cuisine.css";
const SearchBar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form onSubmit={submitHandler} className="searchbar-wrapper">
      <BiSearchAlt2 />
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="searchbar"
        value={input}
        placeholder="search for a recipe"
      ></input>
    </form>
  );
};

export default SearchBar;
