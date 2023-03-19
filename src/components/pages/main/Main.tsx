import React, { Component } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import Header from '../../header/Header';
import SearchForm from '../../searchForn/SearchForm';

class Main extends Component {
  render() {
    const cardList = goods;
    return (
      <>
        <Header />
        <main>
          <SearchForm />
          <CardList data={cardList} />
        </main>
      </>
    );
  }
}

export default Main;
