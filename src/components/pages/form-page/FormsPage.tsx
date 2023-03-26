import React, { Component } from 'react';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SubmitForm from './submitForm/SubmitForm';
import { SubmitFormItem } from '../../types';
import './formPage.scss';
import UserCards from './userCards/UserCards';

class FormsPage extends Component {
  state = {
    data: [],
  };
  handlerForm = (object: SubmitFormItem) => {
    this.setState({
      data: [...this.state.data, object],
    });
  };
  render() {
    return (
      <>
        <SubmitForm handlerForm={this.handlerForm} />
        <UserCards cardsArray={this.state.data} />
      </>
    );
  }
}
export default withHeaderHoc(FormsPage);
