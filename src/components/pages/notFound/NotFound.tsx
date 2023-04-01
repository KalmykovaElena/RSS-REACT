import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div data-testid="404">404</div>
      <div data-testid="404-description">Page not found</div>
      <NavLink data-testid="404-link" to="/">
        Main
      </NavLink>
    </main>
  );
};

export default NotFound;
