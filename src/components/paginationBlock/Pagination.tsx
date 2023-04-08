import React, { Dispatch, SetStateAction } from 'react';
import './pagination.scss';
const Pagination = ({
  length,
  onClick,
  page,
}: {
  length: number;
  onClick: Dispatch<SetStateAction<number>>;
  page: number;
}) => {
  const array = new Array(length).fill(null);

  return (
    <ul className="pagesList">
      {array.map((el, i) => {
        return (
          <button
            className={
              i + 1 == page
                ? 'pagination-button pagination-button__current'
                : 'pagination-button'
            }
            key={i}
            onClick={() => onClick(i + 1)}
          >
            {i + 1}
          </button>
        );
      })}
    </ul>
  );
};
export default Pagination;
