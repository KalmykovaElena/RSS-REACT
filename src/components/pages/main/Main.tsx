import React, { useCallback, useEffect, useRef, useState } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';
import { useBeforeUnload } from 'react-router-dom';

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
      localStorage.setItem('searchValue', valuesRef.current);
    };
  }, []);
  useBeforeUnload(
    useCallback(() => {
      localStorage.setItem('searchValue', valuesRef.current);
    }, [])
  );

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
