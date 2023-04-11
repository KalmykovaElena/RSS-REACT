import { describe, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import CardList from './CardList';
import React from 'react';

const characters = [
  {
    id: 'testId1',
    name: 'testName1',
    img: 'testImg1',
  },
  {
    id: 'testId2',
    name: 'testName2',
    img: 'testImg2',
  },
  {
    id: 'testId3',
    name: 'testName3',
    img: 'testImg3',
  },
];

describe('CardList', () => {
  it('CardList render all items', () => {
    render(<CardList data={characters} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(characters.length);
  });
});
