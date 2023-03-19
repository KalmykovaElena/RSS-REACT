import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
describe('App', () => {
  it('Renders hello world', () => {
    render(React.createElement(App, null));
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello world');
  });
});
