import React from 'react';
import './searchForm.scss';

const SearchForm = (props: {
  changeSearchVal: (value: string) => void;
  searchValue: string;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target) {
      props.changeSearchVal(target.value);
    }
  };
  const { searchValue } = props;
  return (
    <div className="persistent-form">
      <input
        className="persistent-form__input"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="filter goods"
      />
    </div>
  );
};

export default SearchForm;
