import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = ({ recipes }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setTimeout(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, 1000);
  }, [carousel]);

  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        dragConstraints={{ right: 0, left: -width }}
        drag="x"
        className="inner-carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        {recipes.map((recipe, i) => {
          return (
            <motion.div key={i} className="item">
              <Link to={"/recipe/" + recipe.id}>
                <h4>{recipe.title}</h4>
                <img src={recipe.image} alt=""></img>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
