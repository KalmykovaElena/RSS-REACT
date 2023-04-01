import React from 'react';
import { SubmitFormItem } from '../../../types';
import './submitCard.scss';

const SubmitCard = (props: { data: SubmitFormItem }) => {
  const renderData = Object.entries(props.data);
  const avatar = renderData.find((item) => item[0] == 'file');
  const avatarSrc = avatar ? (avatar[1] ? avatar[1] : '') : '';
  return (
    <div className="user-card">
      {avatarSrc && (
        <div key={avatarSrc} className="user-card__img">
          <img src={avatarSrc} alt="avatar" className="img" />
        </div>
      )}
      <ul className="user-card__description">
        {renderData.map((el, i) => {
          if (i > 0) {
            if (el[1] && el[0] !== 'file') {
              return (
                <li key={i}>
                  <span>{`${el[0]}: `}</span>
                  <span className="user-card__value">{`${el[1]} `}</span>
                </li>
              );
            }
          }
        })}
      </ul>
    </div>
  );
};

export default SubmitCard;
