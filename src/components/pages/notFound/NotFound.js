import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
export default class NotFound extends Component {
  render() {
    return React.createElement(
      'main',
      null,
      React.createElement('div', null, '404'),
      React.createElement('div', null, 'Page not found'),
      React.createElement(NavLink, { to: '/' }, 'Main')
    );
  }
}
