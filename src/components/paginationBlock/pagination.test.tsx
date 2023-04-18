import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Pagination from './Pagination';
import React from 'react';

describe('Pagination', () => {
  it(' render pagination buttons', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>
    );
    const button = await screen.findByTestId('page-button');
    expect(button).toBeInTheDocument();
  });
});
