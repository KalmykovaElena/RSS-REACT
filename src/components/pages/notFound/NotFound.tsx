import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <main>
        <div>404</div>
        <div>Page not found</div>
        <NavLink to="/">Main</NavLink>
      </main>
    );
  }
}
