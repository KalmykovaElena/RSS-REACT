import React from 'react';
import { useLocation } from 'react-router-dom';
export const withLocationHoc = (Component) => {
  return (props) => {
    const location = useLocation();
    return React.createElement(Component, { ...props, location: location });
  };
};
