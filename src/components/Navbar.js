import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <nav className="nav container-width">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quote">Quotes</NavLink>
      </div>
    </nav>
  </div>
);

export default Navbar;
