import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div>404</div>
      <div>Page not found</div>
      <NavLink to="/">Main</NavLink>
    </main>
  );
};

export default NotFound;
