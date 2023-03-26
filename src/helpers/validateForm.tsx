import { FormError, SubmitFormItem } from '../components/types';

export const validateForm = (object: SubmitFormItem) => {
  const errorObject = {} as FormError;

  if (object.name) {
    if (object.name.length < 3) {
      errorObject.name = 'The name must contain at least 3 characters';
    } else if (
      object.name[0] !== object.name[0].toUpperCase() ||
      !/^([a-zA-Z])/.test(object.name)
    ) {
      errorObject.name = 'The name must begin with a capital letter';
    }
  }

  if (object.lastName) {
    if (object.lastName.length < 3) {
      errorObject.lastName = 'The lastName must contain at least 3 characters';
    } else if (
      object.lastName[0] !== object.lastName[0].toUpperCase() ||
      !/^([a-zA-Z])/.test(object.lastName)
    ) {
      errorObject.lastName = 'The lastName must begin with a capital letter';
    }
  }

  if (object.birthday) {
    const year = Number(object.birthday.split('-')[0]);
    if (year > 2013 || year < 1913) {
      errorObject.birthday = 'Invalid year for birthday';
    }
  }

  return Object.keys(errorObject).length === 0 ? true : errorObject;
};
