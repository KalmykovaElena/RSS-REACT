import React, { Dispatch, SetStateAction } from 'react';
import Card from '../card/Card';
import { Item } from '../types';
import './card-list.scss';

const CardList = ({
  data,
  setModalId,
}: {
  data: Item[];
  setModalId: Dispatch<SetStateAction<null | string>>;
}) => {
  return (
    <ul className="cardsList">
      {data.map((el) => {
        return <Card key={el.id} item={el} setModalId={setModalId} />;
      })}
    </ul>
  );
};

export default CardList;
