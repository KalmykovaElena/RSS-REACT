import React, { Component } from 'react';
import Card from '../card/Card';
import { Item } from '../types';
import './card-list.scss';

export default class CardList extends Component<{ data: Item[] }> {
  render() {
    const { data } = this.props;
    return (
      <ul className="cardsList">
        {data.map((el) => {
          return <Card key={el.id} item={el} />;
        })}
      </ul>
    );
  }
}
