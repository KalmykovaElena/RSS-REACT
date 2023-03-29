import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../components/pages/about/AboutUs';
import FormsPage from '../components/pages/form-page/FormsPage';
import Main from '../components/pages/main/Main';
import NotFound from '../components/pages/notFound/NotFound';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/forms" element={<FormsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }
}
