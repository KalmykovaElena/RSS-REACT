import React, { useState } from 'react';
import CardList from '../../card-list/CardList';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SearchForm from '../../searchForn/SearchForm';
import Loader from '../../loader/Loader';
import Pagination from '../../paginationBlock/Pagination';
import ModalWindow from '../../modal-window/ModalWindow';
import { useAppSelector } from '../../../redux/hooks';
import { useGetPeoplesQuery } from '../../../redux/api/peopleApi';

const Main = () => {
  const [modalId, setModalId] = useState<null | string>(null);
  const page = useAppSelector((state) => state.data.page);
  const { isLoading } = useGetPeoplesQuery(page);

  const pagesCount = useAppSelector((state) => state.data.pagesCount);
  return (
    <>
      <main>
        <SearchForm />
        <>
          {pagesCount > 1 && <Pagination />}
          {isLoading ? <Loader /> : <CardList setModalId={setModalId} />}
          <ModalWindow hasModalId={modalId} setModalId={setModalId} />
        </>
      </main>
    </>
  );
};

export default withHeaderHoc(Main);
