import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitForm from './SubmitForm';

describe('SubmitForm page', () => {
  it('Render form items', () => {
    const handlerForm = () => {};
    render(<SubmitForm handlerForm={handlerForm} />);
    expect(screen.getByTestId('nameInput')).toBeInTheDocument();
    expect(screen.getByTestId('lastNameInput')).toBeInTheDocument();
    expect(screen.getByTestId('birthdayInput')).toBeInTheDocument();
    expect(screen.getByTestId('radioInput1')).toBeInTheDocument();
    expect(screen.getByTestId('radioInput2')).toBeInTheDocument();
    expect(screen.getByTestId('select')).toBeInTheDocument();
    expect(screen.getAllByRole('checkbox').length >= 3);
    expect(screen.getByTestId('inputFile')).toBeInTheDocument();
    expect(screen.getByTestId('submitInput')).toBeInTheDocument();
  });
});
