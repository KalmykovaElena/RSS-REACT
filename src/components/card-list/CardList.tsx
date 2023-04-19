import React, { Dispatch, SetStateAction, useEffect } from 'react';
import Card from '../card/Card';
import './card-list.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  useGetPeopleQuery,
  useGetPeoplesQuery,
} from '../../redux/api/peopleApi';
import { transformData } from '../../helpers/transformData';
import { setError, setPagesCount } from '../../redux/redusers/data';
import ErrorBlock from '../../error/error';

const CardList = ({
  setModalId,
}: {
  setModalId?: Dispatch<SetStateAction<null | string>>;
}) => {
  const page = useAppSelector((state) => state.data.page);
  const { data } = useGetPeoplesQuery(page);
  const searchValue = useAppSelector((state) => {
    return state.data.searchValue;
  });
  const { data: PEOPLE } = useGetPeopleQuery(searchValue);
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.data.error);
  const renderData = searchValue
    ? transformData(PEOPLE.results)
    : transformData(data.results);
  useEffect(() => {
    dispatch(setPagesCount(Math.ceil(data && data.count / 10)));
    if (renderData.length < 1) {
      dispatch(setError('Nothing was found for your request.'));
    }
  }, [data, dispatch, renderData.length]);
  return (
    <>
      {error ? (
        <ErrorBlock message={error} />
      ) : (
        <ul className="cardsList">
          {renderData.map((el) => {
            return <Card key={el.id} item={el} setModalId={setModalId} />;
          })}
        </ul>
      )}
    </>
  );
};

export default CardList;
