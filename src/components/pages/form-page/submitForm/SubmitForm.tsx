import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';
import { SubmitFormItem } from '../../../types';
import './submitForm.scss';

const SubmitForm = (props: { handlerForm: (obj: SubmitFormItem) => void }) => {
  const [submited, setSubmited] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    reValidateMode: 'onSubmit',
  });

  const onSubmit = (data: FieldValues) => {
    const formData: SubmitFormItem = {
      id: Date.now(),
      ...data,
      file: URL.createObjectURL(data.file[0]),
    };
    props.handlerForm(formData);
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 2000);
    reset();
  };
  return (
    <main data-testid="submit-form">
      <div className={submited ? 'submitedNotice submited' : 'submitedNotice'}>
        The form has been sent
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-element">
          <label className="form-element__label">
            <span>Name</span>
            <input
              type="text"
              className="form-element__input"
              {...register('name', {
                required: 'Please enter your name',
                pattern: {
                  value: /^[A-Z][A-Za-z]{2}/,
                  message:
                    'the name must contain at least 3 letters and begin with a capital letter',
                },
              })}
              data-testid="nameInput"
            />
          </label>
          <div className="inputError">{errors.name?.message?.toString()}</div>
        </div>

        <div className="form-element">
          <label className="form-element__label">
            <span>LastName</span>
            <input
              type="text"
              className="form-element__input"
              {...register('last_name', {
                required: 'Please enter your last name',
                pattern: {
                  value: /^[A-Z][A-Za-z]{2}/,
                  message:
                    'the last name must contain at least 3 letters and begin with a capital letter',
                },
              })}
              data-testid="lastNameInput"
            />
          </label>
          <div className="inputError">
            {errors.last_name?.message?.toString()}
          </div>
        </div>

        <div className="form-element">
          <label className="form-element__label">
            <span>Birthday</span>
            <input
              type="date"
              className="form-element__input"
              {...register('birthday', {
                required: 'Please choose your birthday',
                validate: (value) => {
                  const year = Number(value.split('-')[0]);
                  if (year > 2013 || year < 1913) {
                    return 'Invalid year for birthday';
                  }
                },
              })}
              data-testid="birthdayInput"
            />
          </label>
          <div className="inputError">
            {errors.birthday?.message?.toString()}
          </div>
        </div>

        <div className="form-element  radio">
          <span>Gender</span>
          <label>
            male
            <input
              type="radio"
              {...register('gender', { required: 'Please choose your gender' })}
              value="male"
              name="gender"
              data-testid="radioInput1"
            />
          </label>
          <label>
            female
            <input
              type="radio"
              {...register('gender', { required: 'Please choose your gender' })}
              name="gender"
              value="female"
              data-testid="radioInput2"
            />
          </label>
          <div className="inputError">{errors.gender?.message?.toString()}</div>
        </div>

        <div className="form-element__wrapper">
          <div className="form-element  select">
            <label className="form-element__label">
              <span> Choose your country: </span>
              <select
                {...register('country', {
                  validate: (value) => {
                    if (value === 'Select country') {
                      return 'Please choose your country';
                    }
                  },
                })}
                data-testid="select"
              >
                <option>Select country</option>
                <option>Russia </option>
                <option>Belarus </option>
                <option>Ukraine </option>
                <option>Poland </option>
                <option>Other </option>
              </select>
            </label>
            <div className="inputError">
              {errors.country?.message?.toString()}
            </div>
          </div>

          <div className="form-element  checkbox">
            <span> Choose education: </span>

            <label>
              <input
                type="checkbox"
                {...register('education', {
                  required: 'Please choose your education',
                })}
                value="college "
              />
              <span>college</span>
            </label>
            <label>
              <input
                type="checkbox"
                {...register('education', {
                  required: 'Please choose your education',
                })}
                value="university "
              />
              <span> university</span>
            </label>
            <label>
              <input
                type="checkbox"
                {...register('education', {
                  required: 'Please choose your education',
                })}
                value="courses "
              />
              <span>courses</span>
            </label>
            <div className="inputError checkbox-error">
              {errors.education?.message?.toString()}
            </div>
          </div>
        </div>

        <div className="form-element">
          <label className="form-element__label">
            <span>Profile picture</span>
            <input
              type="file"
              className="form-element__input"
              {...register('file', {
                validate: {
                  notEmpty: (value) =>
                    value.length > 0 || 'Please choose your profile image',
                  typeImg: (value) =>
                    (value.length > 0 && value[0].type.startsWith('image')) ||
                    'File must be an image',
                },
              })}
              data-testid="inputFile"
            />
          </label>
          <div className="inputError">{errors.file?.message?.toString()}</div>
        </div>

        <div className="form-element">
          <input
            type="submit"
            value="Send"
            className="form-element__submit"
            data-testid="submitInput"
          />
        </div>
      </form>
    </main>
  );
  // }
};

export default SubmitForm;
