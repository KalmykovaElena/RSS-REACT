import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

test('render avalible pages', () => {
  const expectedResult = [
    {
      id: 'testId1',
      name: 'testName1',
      img: 'testImg1',
    },
  ];

  vi.stubGlobal('fetch', () =>
    Promise.resolve({
      json: () => Promise.resolve(expectedResult),
    })
  );
  render(
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Current page/i);
  expect(linkElement).toBeInTheDocument();
});
