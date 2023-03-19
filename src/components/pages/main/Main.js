import React, { Component } from 'react';
import Header from '../../header/Header';
class Main extends Component {
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Header, null),
      React.createElement('main', null, 'Main')
    );
  }
}
export default Main;
