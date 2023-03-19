import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return React.createElement(
      'nav',
      null,
      React.createElement(NavLink, { to: '/' }, 'Main'),
      React.createElement(NavLink, { to: '/about' }, 'AboutUs')
    );
  }
}
