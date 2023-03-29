import React, { Component } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';

class Main extends Component {
  state = {
    searchValue: localStorage.getItem('searchValue') || '',
  };

  changeSearchVal = (value: string) => {
    this.setState({ searchValue: value });
  };

  componentDidUpdate(): void {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  render() {
    const cardList = goods;
    return (
      <>
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

export default withHeaderHoc(Main);
