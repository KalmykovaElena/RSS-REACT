import React from 'react';
import NotFound from './NotFound';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound page', () => {
  it('Render NotFound pages', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );
    expect(screen.getByTestId('404')).toBeInTheDocument();
    expect(screen.getByTestId('404-description')).toBeInTheDocument();
    expect(screen.getByTestId('404-link')).toBeInTheDocument();
  });
});
