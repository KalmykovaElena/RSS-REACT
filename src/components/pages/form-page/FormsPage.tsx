import React, { useState } from 'react';
import { withHeaderHoc } from '../../../common/hoc/withHeaderHoc';
import SubmitForm from './submitForm/SubmitForm';
import { SubmitFormItem } from '../../types';
import './formPage.scss';
import UserCards from './userCards/UserCards';

const FormsPage = () => {
  const [data, setData] = useState<SubmitFormItem[]>([]);
  const handlerForm = (object: SubmitFormItem) => {
    setData([...data, object]);
  };
  return (
    <>
      <SubmitForm handlerForm={handlerForm} />
      <UserCards cardsArray={data} />
    </>
  );
};
export default withHeaderHoc(FormsPage);
