import React, { Component } from 'react';
import './header.scss';
import HeaderCaption from '../header-caption/HeaderCaption';
import Navbar from '../navbar/Navbar';
class Header extends Component {
  render() {
    return React.createElement(
      'header',
      { className: 'header' },
      React.createElement(HeaderCaption, null),
      React.createElement(Navbar, null)
    );
  }
}
export default Header;
