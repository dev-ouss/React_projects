import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { GiTacos } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Filter = () => {
  return (
    <div className="filterbar">
      <NavLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={"/cuisine/spanish"}>
        <GiTacos />
        <h4>Spanish</h4>
      </NavLink>
    </div>
  );
};

export default Filter;
