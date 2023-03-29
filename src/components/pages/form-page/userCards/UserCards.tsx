import React, { Component } from 'react';
import { SubmitFormItem } from '../../../types';
import SubmitCard from '../submitCard/SubmitCard';

export default class UserCards extends Component<{
  cardsArray: SubmitFormItem[];
}> {
  render() {
    return (
      <section className="cards">
        {this.props.cardsArray.map((el) => {
          const { id } = el;
          return <SubmitCard key={id} data={el} />;
        })}
      </section>
    );
  }
}
