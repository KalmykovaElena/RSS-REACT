import React from 'react';
import './searchForm.scss';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { setError, setSearchValue } from '../../redux/redusers/data';

const SearchForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (value: { [key: string]: string }) => {
    dispatch(setSearchValue(value.searchValue));
    dispatch(setError(null));
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
