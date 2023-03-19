import React, { Component } from 'react';
import Header from '../../header/Header';
import SearchForm from '../../searchForn/SearchForm';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <SearchForm />
        </main>
      </>
    );
  }
}

export default Main;
