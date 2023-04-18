import React from 'react';
import { SubmitFormItem } from '../../../types';
import SubmitCard from '../submitCard/SubmitCard';

const UserCards = (props: { cardsArray: SubmitFormItem[] }) => {
  return (
    <section data-testid="UserCards" className="cards">
      {props.cardsArray.map((el) => {
        const { id } = el;
        return <SubmitCard key={id} data={el} />;
      })}
    </section>
  );
};
export default UserCards;
