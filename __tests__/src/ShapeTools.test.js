import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ShapeTools from '../../src/components/ShapeTools';

// describe('ShapeTools Component', () => {
//     const mockFunction = jest.fn();
  
//     test('should select button when clicked', () => {
//       const { getByText } = render(<ShapeTools setSelectedShape={mockFunction} />);
  
//       const squareButton = getByText('Square');
//       fireEvent.click(squareButton);

//       expect(mockFunction).toHaveBeenCalledWith('square');
//     });
  
//   });

describe('ShapeTools Component', () => {
    let mockFunction;
    let getByText;
  
    beforeAll(() => {
      mockFunction = jest.fn();
    });
  
    beforeEach(() => {
      ({ getByText } = render(<ShapeTools setSelectedShape={mockFunction} />));
    });
  
    test('should select the square shape when square button has been clicked', () => {
      const squareButton = getByText('Square');
      fireEvent.click(squareButton);
      expect(mockFunction).toHaveBeenCalledWith('square');
    });
  
    test('should select the circle shape when circle button has been clicked', () => {
      const circleButton = getByText('Circle');
      fireEvent.click(circleButton);
      expect(mockFunction).toHaveBeenCalledWith('circle');
    });

    test('should select the rectangle shape when rectangle button has been clicked', () => {
        const rectangleButton = getByText('Rectangle');
        fireEvent.click(rectangleButton);
        expect(mockFunction).toHaveBeenCalledWith('rectangle');
      });

    test('should select the oval shape when oval button has been clicked', () => {
        const ovalButton = getByText('Oval');
        fireEvent.click(ovalButton);
        expect(mockFunction).toHaveBeenCalledWith('oval');
    });

    test('should select the diamond shape when diamond button has been clicked', () => {
        const diamondButton = getByText('Diamond');
        fireEvent.click(diamondButton);
        expect(mockFunction).toHaveBeenCalledWith('diamond');
    });
  });

