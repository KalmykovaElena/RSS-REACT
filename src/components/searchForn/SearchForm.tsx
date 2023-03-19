import React from 'react';
import { Component } from 'react';

class SearchForm extends Component {
  state = {
    inputValue: localStorage.getItem('searchValue') || '',
  };

  componentWillUnmount(): void {
    localStorage.setItem('searchValue', this.state.inputValue);
  }
  render() {
    const { inputValue } = this.state;
    return (
      <div className="persistent-form">
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <button>Search</button>
      </div>
    );
  }
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.setState({
        inputValue: target.value,
      });
    }
  };
}

export default SearchForm;
