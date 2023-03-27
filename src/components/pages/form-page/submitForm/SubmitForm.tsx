import React, { Component } from 'react';
import { createFormData } from '../../../../helpers/createFormData';
import { validateForm } from '../../../../helpers/validateForm';
import { FormError, SubmitFormItem } from '../../../types';
import './submitForm.scss';

class SubmitForm extends Component<{
  handlerForm: (obj: SubmitFormItem) => void;
}> {
  state = {
    error: {} as FormError,
    submited: false,
  };
  static refs = {
    nameRef: React.createRef<HTMLInputElement>(),
    lastNameRef: React.createRef<HTMLInputElement>(),
    birthdayRef: React.createRef<HTMLInputElement>(),
    genderRef: React.createRef<HTMLInputElement>(),
    gender: React.createRef<HTMLInputElement>(),
    aducationRef1: React.createRef<HTMLInputElement>(),
    aducationRef2: React.createRef<HTMLInputElement>(),
    aducationRef3: React.createRef<HTMLInputElement>(),
    fileRef: React.createRef<HTMLInputElement>(),
    countryRef: React.createRef<HTMLSelectElement>(),
  };

  handlerSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      id: Date.now(),
    };
    createFormData(formData, SubmitForm.refs);
    const validate = validateForm(formData);
    if (validate === true) {
      this.props.handlerForm(formData);
      event.target.reset();
      this.setState({
        error: {},
        submited: true,
      });
      setTimeout(() => {
        this.setState({
          submited: false,
        });
      }, 2000);
    } else {
      this.setState({
        error: { ...validate },
      });
    }
  };
  render() {
    const { error } = this.state;
    const {
      nameRef,
      lastNameRef,
      birthdayRef,
      genderRef,
      gender,
      aducationRef1,
      aducationRef2,
      aducationRef3,
      fileRef,
      countryRef,
    } = SubmitForm.refs;
    return (
      <main>
        <div
          className={
            this.state.submited ? 'submitedNotice submited' : 'submitedNotice'
          }
        >
          The form has been sent
        </div>
        <form onSubmit={this.handlerSubmit} className="form">
          <div className="form-element">
            <label className="form-element__label">
              <span>Name</span>
              <input
                type="text"
                className="form-element__input"
                ref={nameRef}
                data-testid="nameInput"
              />
            </label>
            <div className="inputError">{error.name}</div>
          </div>
          <div className="form-element">
            <label className="form-element__label">
              <span>LastName</span>
              <input
                type="text"
                className="form-element__input"
                ref={lastNameRef}
                data-testid="lastNameInput"
              />
            </label>
            <div className="inputError">{error.lastName}</div>
          </div>
          <div className="form-element">
            <label className="form-element__label">
              <span>Birthday</span>
              <input
                type="date"
                className="form-element__input"
                ref={birthdayRef}
                data-testid="birthdayInput"
              />
            </label>
            <div className="inputError">{error.birthday}</div>
          </div>
          <div className="form-element  radio">
            <span>Gender</span>
            <label>
              male
              <input
                type="radio"
                ref={genderRef}
                value="male"
                name="gender"
                data-testid="radioInput1"
              />
            </label>
            <label>
              female
              <input
                type="radio"
                ref={gender}
                name="gender"
                value="female"
                data-testid="radioInput2"
              />
            </label>
            <div className="inputError">{error.gender}</div>
          </div>
          <div className="form-element__wrapper">
            <div className="form-element  select">
              <label className="form-element__label">
                <span> Choose your country: </span>
                <select name="country" ref={countryRef} data-testid="select">
                  <option>Select country</option>
                  <option>Russia </option>
                  <option>Belarus </option>
                  <option>Ukraine </option>
                  <option>Poland </option>
                  <option>Other </option>
                </select>
              </label>
              <div className="inputError">{error.country}</div>
            </div>

            <div className="form-element  checkbox">
              <span> Choose education: </span>

              <label>
                <input type="checkbox" ref={aducationRef1} value="college " />
                <span>college</span>
              </label>
              <label>
                <input
                  type="checkbox"
                  ref={aducationRef2}
                  value="university "
                />
                <span> university</span>
              </label>
              <label>
                <input type="checkbox" ref={aducationRef3} value="courses " />
                <span>courses</span>
              </label>
              <div className="inputError checkbox-error">{error.checkbox}</div>
            </div>
          </div>
          <div className="form-element">
            <label className="form-element__label">
              <span>Profile picture</span>
              <input
                type="file"
                className="form-element__input"
                ref={fileRef}
                data-testid="inputFile"
              />
            </label>
            <div className="inputError">{error.file}</div>
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
  }
}

export default SubmitForm;
