import React from 'react';
import Card from '../card/Card';
import { CardProps } from '../types';
import './card-list.scss';

const CardList = (props: CardProps) => {
  const { data, searchValue } = props;
  const filterField = [
    'name',
    'collection',
    'category',
    'metal',
    'rating',
    'year',
    'price',
  ];
  const filterData = searchValue.trim()
    ? data.filter((el) => {
        const values = Object.entries(el).map((e) => [
          e[0],
          e[1].toString().toUpperCase(),
        ]);
        return values.some(
          (item) =>
            filterField.includes(item[0]) &&
            item[1].includes(searchValue.toUpperCase())
        );
      })
    : data;

  return (
    <ul className="cardsList">
      {filterData.map((el) => {
        return <Card key={el.id} item={el} />;
      })}
    </ul>
  );
};

export default CardList;
