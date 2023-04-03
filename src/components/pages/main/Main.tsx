import React, { useEffect, useRef, useState } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';

const Main = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const valuesRef = useRef(searchValue);

  useEffect(() => {
    valuesRef.current = searchValue;
  }, [searchValue]);
  useEffect(() => {
    return function unmount() {
      console.log('component unmount');
      console.log(valuesRef.current);

      localStorage.setItem('searchValue', valuesRef.current);
    };
  }, []);

  const cardList = goods;
  return (
    <>
      <main>
        <SearchForm
          changeSearchVal={setSearchValue}
          searchValue={searchValue}
        />
        <CardList data={cardList} searchValue={searchValue} />
      </main>
    </>
  );
};

export default withHeaderHoc(Main);
