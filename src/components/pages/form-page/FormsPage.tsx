import React from 'react';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SubmitForm from './submitForm/SubmitForm';

import './formPage.scss';
import UserCards from './userCards/UserCards';

const FormsPage = () => {
  return (
    <>
      <SubmitForm />
      <UserCards />
    </>
  );
};
export default withHeaderHoc(FormsPage);
