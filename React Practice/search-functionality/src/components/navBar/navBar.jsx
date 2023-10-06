import React from "react";
import { Link } from "react-router-dom";
import "../navBar/navBar.css";

const NavBar = ({ setQuery, query }) => {
  const handleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
    console.log(e.target.value);
  };

  return (
    <>
      <div className="navbar">
        <Link to="/" className="flex">
          <h1 className="head">Homepage </h1>
        </Link>
        <div className="searchBar">
          <input
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="search products..."
          />
        </div>

        <ul class="flex">
          <li>
            <Link to="/cart" className="flex">
              <h1 className="head">Cart </h1>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
