import React from 'react';
import './searchForm.scss';
import { useForm } from 'react-hook-form';

const SearchForm = (props: {
  changeSearchVal: (value: string) => void;
  searchValue: string;
}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (value: { [key: string]: string }) => {
    props.changeSearchVal(value.searchValue);
    reset();
  };
  return (
    <form className="persistent-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="persistent-form__input"
        type="text"
        {...register('searchValue')}
        placeholder="find a hero"
      />
      <input
        className="persistent-form__input search"
        type="submit"
        value={'Search'}
      />
    </form>
  );
};

export default SearchForm;
