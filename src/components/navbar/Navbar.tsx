import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/about-us">AboutUs</NavLink>
      <NavLink to="/forms">Forms</NavLink>
    </nav>
  );
};
export default Navbar;
