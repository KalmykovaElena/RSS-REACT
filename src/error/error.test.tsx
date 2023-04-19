import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorBlock from './error';

describe('ErrorBlock', () => {
  it(' render error info', async () => {
    render(<ErrorBlock message={'error'} />);
    const error = await screen.findByTestId('error');
    const errorMessage = await screen.findByText('error');
    expect(error).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
  });
});
