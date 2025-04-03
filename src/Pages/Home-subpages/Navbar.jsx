import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Ensure you create this CSS file

function Navbar() {
  return (
    <nav className="home-navbar">
      <h1>Photo Gallery</h1>
      <div className="nav-links">
        <NavLink to="/single" activeClassName="active-link">
          Single Pictures
        </NavLink>
        <NavLink to="/group" activeClassName="active-link">
          Group Pictures
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
