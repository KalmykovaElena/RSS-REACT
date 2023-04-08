import React from 'react';
import Card from '../card/Card';
import { Item } from '../types';
import './card-list.scss';

const CardList = ({ data }: { data: Item[] }) => {
  return (
    <ul className="cardsList">
      {data.map((el) => {
        return <Card key={el.id} item={el} />;
      })}
    </ul>
  );
};

export default CardList;
