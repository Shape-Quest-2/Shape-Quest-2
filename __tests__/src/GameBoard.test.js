import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import GameBoard from '../../src/components/GameBoard';
import '@testing-library/jest-dom'

describe ('GameBoard Component', () => {
  let mockFunction;
  beforeAll(() => {
    mockFunction = jest.fn();
  });
    // test('should render the shape with selected color', () => {
    //     const { getByText, rerender} = render(<GameBoard shapes = {[{ shape: 'circle', color: 'blue' }]} selectedShape="circle" selectedColor="blue" />);
    //     const circleElement = getByText('circle');
    //     expect(circleElement).toHaveStyle('background-color: blue');
    //     expect(circleElement).toBeInTheDocument();
    //     rerender( <GameBoard shapes={[{ shape: 'oval', color: 'green' }]} selectedShape="oval" selectedColor="green"/>);
        
    //     const ovalElement = getByText('oval');
    //     expect(ovalElement).toBeInTheDocument();
    //     expect(squareElement).toBeInTheDocument();
    //   });
    test('should render shapes with their colors and handle shape color change on click', () => {      
      const { getByText } = render(<GameBoard shapes={[{ shape: 'circle', color: 'blue' }, { shape: 'square', color: 'red' }]} handleChangeExistingShapeColor={mockFunction} />);
      
      const circleElement = getByText('circle');
      const squareElement = getByText('square');
        
      expect(circleElement).toHaveStyle('background-color: blue');
      expect(squareElement).toHaveStyle('background-color: red');
      
      fireEvent.click(circleElement);
      
      expect(mockFunction).toHaveBeenCalledWith('0');
      });
      
    });