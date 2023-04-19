import React, { Dispatch, SetStateAction } from 'react';
import './modal-window.scss';
import ErrorBlock from '../../error/error';
import { useGetDetailedInformationQuery } from '../../redux/api/peopleApi';

export default function ModalWindow({
  hasModalId,
  setModalId,
}: {
  hasModalId: string | null;
  setModalId?: Dispatch<SetStateAction<null | string>>;
}) {
  const { data, error } = useGetDetailedInformationQuery(hasModalId);

  return (
    <>
      (
      <div
        data-testid="modalWindow"
        className={hasModalId ? 'modal modal__active' : 'modal'}
        onClick={() => setModalId!(null)}
      >
        <div
          className={
            hasModalId ? 'modal-content modal-content__active' : 'modal-content'
          }
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="modal__close"
            data-testid="modal__close"
            onClick={() => setModalId!(null)}
          >
            X
          </div>
          {error ? (
            <ErrorBlock message={'could not fetch card'} />
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
                <h2 className="description__name">{data?.Name}</h2>
                <ul data-testid="modalItems">
                  {data &&
                    Object.entries(data).map((e, i) =>
                      e[1] && i > 0 ? (
                        <li className="description__item" key={i}>
                          <span className="description__point">{e[0]}</span>:
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
    </>
  );
}
