import React, { Component } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import Header from '../../header/Header';
import SearchForm from '../../searchForn/SearchForm';

class Main extends Component {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  changeSearchVal = (value: string) => {
    this.setState({ searchValue: value });
  };

  render() {
    const cardList = goods;
    return (
      <>
        <Header />
        <main>
          <SearchForm
            changeSearchVal={this.changeSearchVal}
            searchValue={this.state.searchValue}
          />
          <CardList data={cardList} searchValue={this.state.searchValue} />
        </main>
      </>
    );
  }
}

export default Main;
