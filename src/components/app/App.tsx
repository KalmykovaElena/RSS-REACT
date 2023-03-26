import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from '../pages/main/Main';
import NotFound from '../pages/notFound/NotFound';
import AboutUs from '../pages/about/AboutUs';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
