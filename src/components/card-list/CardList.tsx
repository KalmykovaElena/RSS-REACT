import React, { Component } from 'react';
import Card from '../card/Card';
import { CardProps } from '../types';
import './card-list.scss';

export default class CardList extends Component<CardProps> {
  render() {
    const { data, searchValue } = this.props;

    const filterData = searchValue.trim()
      ? data.filter((el) => {
          const values = Object.values(el).map((e) =>
            e.toString().toUpperCase()
          );
          return values.some((item) =>
            item.includes(searchValue.toUpperCase())
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
  }
}
