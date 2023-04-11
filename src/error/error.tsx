import React from 'react';
import icon from './Cz-Error.png';
import './error.scss';
const ErrorBlock = ({ message }: { message: string }) => {
  return (
    <div className={'container'}>
      <img className={'icon'} src={icon} alt="error" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorBlock;
