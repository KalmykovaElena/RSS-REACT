import React from 'react';
import { Component } from 'react';
import './searchForm.scss';
class SearchForm extends Component<{
  changeSearchVal: (value: string) => void;
  searchValue: string;
}> {
  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.props.searchValue);
  }
  render() {
    const { searchValue } = this.props;
    return (
      <div className="persistent-form">
        <input
          className="persistent-form__input"
          type="text"
          value={searchValue}
          onChange={this.handleChange}
        />
        <button className="persistent-form__button">Search</button>
      </div>
    );
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.props.changeSearchVal(target.value);
    }
  };
}

export default SearchForm;
