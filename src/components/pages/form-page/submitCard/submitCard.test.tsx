import { describe, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import SubmitCard from './SubmitCard';

describe('SubmitCard', () => {
  it('Render form SubmitCard', () => {
    const testData = {
      id: 1,
      name: 'test-name',
      lastName: 'test-lastName',
      birthday: 'test-birthday',
      gender: 'test-gender',
      aducation: 'test-aducation',
      country: 'test-country',
    };
    render(<SubmitCard data={testData} />);
    expect(screen.getByText('test-name')).toBeInTheDocument();
    expect(screen.getByText('test-lastName')).toBeInTheDocument();
    expect(screen.getByText('test-birthday')).toBeInTheDocument();
    expect(screen.getByText('test-gender')).toBeInTheDocument();
    expect(screen.getByText('test-aducation')).toBeInTheDocument();
    expect(screen.getByText('test-country')).toBeInTheDocument();
  });
});
