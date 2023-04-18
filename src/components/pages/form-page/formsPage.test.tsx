import React from 'react';
import FormsPage from './FormsPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('FormsPage', () => {
  it(' render forms page', () => {
    render(
      <BrowserRouter>
        <FormsPage />
      </BrowserRouter>
    );
    expect(screen.getByTestId('submit-form')).toBeInTheDocument();
    expect(screen.getByTestId('UserCards')).toBeInTheDocument();
  });
});
