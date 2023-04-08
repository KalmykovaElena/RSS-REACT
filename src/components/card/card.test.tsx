import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import React from 'react';

describe('Card', () => {
  it('Render card item', () => {
    const character = {
      id: 'testId1',
      name: 'testName1',
      img: 'testImg1',
    };
    render(<Card item={character} />);
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByTestId('cardImg')).toBeInTheDocument();
  });
});
