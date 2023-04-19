import React from 'react';
import './header.scss';
import HeaderCaption from '../header-caption/HeaderCaption';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <HeaderCaption />
      <Navbar />
    </header>
  );
};
export default Header;
