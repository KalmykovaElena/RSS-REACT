import React, { useEffect, useState } from 'react';
import { goods } from '../../../common/data';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';

const Main = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);

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
