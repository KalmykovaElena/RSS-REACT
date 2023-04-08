import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

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
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Current page/i);
  expect(linkElement).toBeInTheDocument();
});
