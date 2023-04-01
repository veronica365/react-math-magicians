import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-bar">
    <nav className="nav container-width">
      <div>
        <h1>Math Magicians</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quotes</Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
