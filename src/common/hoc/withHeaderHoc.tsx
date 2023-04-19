import React from 'react';
import Header from '../../components/header/Header';

export const withHeaderHoc = (ViewComponent: React.ComponentType) => {
  return function () {
    return (
      <>
        <Header />
        <ViewComponent />
      </>
    );
  };
};
