import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import ModalWindow from './ModalWindow';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve([
        {
          Name: 'test-name',
          Birth_year: 'test-birth_year',
          Height: 'test-height',
          Mass: 'test-mass',
          Gender: 'test-gender',
          Hair_color: 'test-hair_color',
          Skin_color: 'test-skin_color',
        },
      ]),
  })
) as Mock;
const handler = vi.fn();
describe('Modal window', () => {
  it('Render modal window', async () => {
    render(
      <Provider store={store}>
        <ModalWindow hasModalId="1" setModalId={handler} />
      </Provider>
    );
    expect(await screen.findByTestId('modalWindow')).toBeInTheDocument();
    expect(await screen.findByTestId('error')).toBeInTheDocument();
    expect(await screen.findByTestId('modal__close')).toBeInTheDocument();
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });
});
