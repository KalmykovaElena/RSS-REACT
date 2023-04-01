import React from 'react';
import { Item } from '../types';
import './card.scss';

const Card = (props: { item: Item }) => {
  const item = props.item;
  return (
    <li className="card">
      <div className="card__img">
        <img className="card__img-src" src={item.img} alt={item.name} />
      </div>
      <div className="card__name">
        <span className="details ">name: </span> {item.name}
      </div>
      <div className="card__collection">
        <span className="details ">collection: </span>
        {item.collection}
      </div>
      <div className="card__category">
        <span className="details ">category: </span>
        {item.category}
      </div>
      <div>
        <span className="card__metal">
          <span className="details "> metal: </span>
          {item.metal}
        </span>
        <span className="card__rating">
          <span className="details "> rating: </span>
          {item.rating}
        </span>
      </div>
      <div>
        <span className="card__year">
          <span className="details "> year: </span>
          {item.year}
        </span>
        <span className="card__price">
          <span className="details "> price: </span>
          {item.price}
        </span>
      </div>
    </li>
  );
};

export default Card;
