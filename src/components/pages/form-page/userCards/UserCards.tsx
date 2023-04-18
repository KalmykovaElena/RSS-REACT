import React from 'react';
import SubmitCard from '../submitCard/SubmitCard';
import { useAppSelector } from '../../../../redux/hooks';

const UserCards = () => {
  const cardsArray = useAppSelector((state) => state.submitData.submitData);
  return (
    <section data-testid="UserCards" className="cards">
      {cardsArray.map((el) => {
        const { id } = el;
        return <SubmitCard key={id} data={el} />;
      })}
    </section>
  );
};
export default UserCards;
