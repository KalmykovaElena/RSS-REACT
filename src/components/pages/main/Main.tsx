import React, { useEffect, useState } from 'react';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';
import { transformData } from '../../../helpers/transformData';
import { Item } from '../../types';
import Loader from '../../loader/Loader';
import Pagination from '../../paginationBlock/Pagination';
import ModalWindow from '../../modal-window/ModalWindow';

const Main = () => {
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const [cardList, setCardList] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalId, setModalId] = useState<null | string>(null);
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const url = searchValue
      ? `https://swapi.dev/api/people/?search=${searchValue}`
      : `https://swapi.dev/api/people/?page=${page}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setIsLoading(false);
        setCardList(transformData(data.results));
        setPagesCount(Math.ceil(data.count / 10));
      });
  }, [searchValue, page]);

  const handleSubmit = (value: string) => {
    setSearchValue(value);
    setIsLoading(true);
    localStorage.setItem('searchValue', value);
  };
  return (
    <>
      <main>
        <SearchForm changeSearchVal={handleSubmit} searchValue={searchValue} />
        {!searchValue && pagesCount > 1 && (
          <Pagination length={pagesCount} onClick={setPage} page={page} />
        )}

        {isLoading ? (
          <Loader />
        ) : (
          <CardList data={cardList} setModalId={setModalId} />
        )}
        <ModalWindow hasModalId={modalId} setModalId={setModalId} />
      </main>
    </>
  );
};

export default withHeaderHoc(Main);
