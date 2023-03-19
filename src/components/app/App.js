import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Main from '../pages/main/Main';
import NotFound from '../pages/notFound/NotFound';
import AboutUs from '../pages/about/AboutUs';
export default class App extends Component {
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        Routes,
        null,
        React.createElement(Route, {
          path: '/',
          element: React.createElement(Main, null),
        }),
        React.createElement(Route, {
          path: '/about',
          element: React.createElement(AboutUs, null),
        }),
        React.createElement(Route, {
          path: '*',
          element: React.createElement(NotFound, null),
        })
      )
    );
  }
}
