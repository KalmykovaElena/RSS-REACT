import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { vi, Mock } from 'vitest';
import ModalWindow from './ModalWindow';

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
    render(<ModalWindow hasModalId="1" setModalId={handler} />);
    expect(await screen.findByTestId('modalItems')).toBeInTheDocument();
    expect(await screen.findByTestId('modalCardImg')).toBeInTheDocument();
    expect(
      await screen.findByRole('heading', {
        level: 2,
      })
    ).toBeInTheDocument();
  });
});
