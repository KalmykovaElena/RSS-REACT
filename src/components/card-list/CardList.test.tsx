import { describe, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import CardList from './CardList';
import { goods } from '../../common/data';
import React from 'react';

describe('CardList', () => {
  it('CardList render all items', () => {
    render(<CardList data={goods} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(goods.length);
  });
});
