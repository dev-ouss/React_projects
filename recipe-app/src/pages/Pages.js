import Home from "./Home";
import Cuisine from "./Cuisine";
import Recipe from "./Recipe";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
    </Routes>
  );
};

export default Pages;
