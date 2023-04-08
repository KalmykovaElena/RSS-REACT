import React, { useState } from 'react';
import Loader from '../loader/Loader';
import { Item } from '../types';
import './card.scss';

const Card = (props: { item: Item }) => {
  const [cardsLoading, setCardsLoading] = useState(true);
  const item = props.item;
  return (
    <li className="card">
      <div className="card__img">
        {cardsLoading && <Loader />}
        <img
          className="card__img-src"
          src={item.img}
          alt={item.name}
          data-testid="cardImg"
          onLoad={() => setCardsLoading(false)}
        />
      </div>
      <div className="card__name card__description">{item.name}</div>
    </li>
  );
};

export default Card;
