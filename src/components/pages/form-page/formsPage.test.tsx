import React from 'react';
import FormsPage from './FormsPage';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';

describe('FormsPage', () => {
  it(' render forms page', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FormsPage />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId('submit-form')).toBeInTheDocument();
    expect(screen.getByTestId('UserCards')).toBeInTheDocument();
  });
});
