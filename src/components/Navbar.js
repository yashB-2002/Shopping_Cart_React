import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
