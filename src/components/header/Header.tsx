import React, { Component } from 'react';
import './header.scss';
import HeaderCaption from '../header-caption/HeaderCaption';
import Navbar from '../navbar/Navbar';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderCaption />
        <Navbar />
      </header>
    );
  }
}
export default Header;
