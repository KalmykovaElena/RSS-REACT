import React, { Component } from 'react';
import Header from '../../components/header/Header';

export const withHeaderHoc = (ViewComponent: React.ComponentType) => {
  return class extends Component {
    render() {
      return (
        <>
          <Header />
          <ViewComponent />
        </>
      );
    }
  };
};
