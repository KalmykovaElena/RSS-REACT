import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { goods } from '../../common/data';
import Card from './Card';
import React from 'react';

describe('Card', () => {
  it('Render card item', () => {
    const good = goods[0];
    render(<Card item={good} />);
    expect(screen.getByText(good.name)).toBeInTheDocument();
    expect(screen.getByText(good.collection)).toBeInTheDocument();
    expect(screen.getByText(good.category)).toBeInTheDocument();
    expect(screen.getByText(good.metal)).toBeInTheDocument();
    expect(screen.getByText(good.rating)).toBeInTheDocument();
    expect(screen.getByText(good.year)).toBeInTheDocument();
    expect(screen.getByText(good.price)).toBeInTheDocument();
  });
});
