import React, { Dispatch, SetStateAction, useState } from 'react';
import Loader from '../loader/Loader';
import { Item } from '../types';
import './card.scss';

const Card = ({
  item,
  setModalId,
}: {
  item: Item;
  setModalId?: Dispatch<SetStateAction<null | string>>;
}) => {
  const [cardsLoading, setCardsLoading] = useState(true);

  return (
    <li className="card" onClick={() => setModalId && setModalId(item.id)}>
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
