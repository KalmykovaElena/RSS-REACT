import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './modal-window.scss';
import { transformModalData } from '../../helpers/transformData';
import ErrorBlock from '../../error/error';

export default function ModalWindow({
  hasModalId,
  setModalId,
}: {
  hasModalId: string | null;
  setModalId: Dispatch<SetStateAction<null | string>>;
}) {
  const [card, setCard] = useState<null | { [key: string]: string }>(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${hasModalId}`)
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch card');
        }
        return res.json();
      })
      .then((data) => {
        setCard(transformModalData(data));
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [hasModalId]);

  return (
    card && (
      <div
        className={hasModalId ? 'modal modal__active' : 'modal'}
        onClick={() => setModalId(null)}
      >
        <div
          className={
            hasModalId ? 'modal-content modal-content__active' : 'modal-content'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal__close" onClick={() => setModalId(null)}>
            X
          </div>
          {error ? (
            <ErrorBlock message={error} />
          ) : (
            <>
              <div className="modal-content__img">
                <img
                  className="modal-content__img-src"
                  src={`https://starwars-visualguide.com/assets/img/characters/${hasModalId}.jpg`}
                  data-testid="modalCardImg"
                />
              </div>
              <div className="modal-content__description">
                <h2 className="description__name">{card.Name}</h2>
                <ul>
                  {Object.entries(card).map((e, i) =>
                    e[1] && i > 0 ? (
                      <li className="description__item" key={i}>
                        <span className="description__point">{e[0]}</span>:
                        {'   '}
                        <span className="description__value">{e[1]}</span>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    )
  );
}
