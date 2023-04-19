import React from 'react';
import './pagination.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setError, setPage, setSearchValue } from '../../redux/redusers/data';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const length = useAppSelector((state) => state.data.pagesCount);
  const page = useAppSelector((state) => state.data.page);
  const array = new Array(length).fill(null);

  return (
    <ul className="pagesList">
      {array.map((el, i) => {
        return (
          <button
            data-testid="page-button"
            className={
              i + 1 == page
                ? 'pagination-button pagination-button__current'
                : 'pagination-button'
            }
            key={i}
            onClick={() => {
              dispatch(setSearchValue(''));
              dispatch(setError(null));
              dispatch(setPage(i + 1));
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </ul>
  );
};
export default Pagination;
