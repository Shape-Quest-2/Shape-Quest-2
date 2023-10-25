import React from 'react';
import { render } from '@testing-library/react'
import GameBoard from '../../src/components/GameBoard';
import '@testing-library/jest-dom'

describe ('GameBoard Component', () => {
    test('should render the shape with selected color', () => {
        const { getByText } = render(<GameBoard selectedShape="circle" selectedColor="blue" />);
        const circleElement = getByText('circle');
        expect(circleElement).toHaveStyle('background-color: blue');
      });
      
      test('should add shapes to board when selectedShape changes', () => {
        const { getByText, rerender } = render(<GameBoard selectedShape="square" selectedColor="red" />);
        const squareElement = getByText('square');
        expect(squareElement).toBeInTheDocument();
        rerender(<GameBoard selectedShape="oval" selectedColor="green" />);
        const ovalElement = getByText('oval');
        expect(ovalElement).toBeInTheDocument();
        expect(squareElement).toBeInTheDocument();
      });
    });