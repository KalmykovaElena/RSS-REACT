import React from 'react';
import AboutUs from './AboutUs';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('About us', () => {
  it(' render about us page', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    );
    expect(screen.getByTestId('about_us_page')).toBeInTheDocument();
  });
});
