import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Circle from './Circle';

describe('<Circle />', () => {
  test('it should mount', () => {
    render(<Circle />);
    
    const circle = screen.getByTestId('Circle');

    expect(circle).toBeInTheDocument();
  });
});