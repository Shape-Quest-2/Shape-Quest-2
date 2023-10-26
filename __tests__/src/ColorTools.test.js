import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ColorTools from '../../src/components/ColorTools';

describe('ColorTools Component', () => {
    let mockFunction;
    let getByText;
  
    beforeAll(() => {
      mockFunction = jest.fn();
    });
  
    beforeEach(() => {
      ({ getByText } = render(<ColorTools setSelectedColor={mockFunction} />));
    });
  
    test('should select blue when blue button has been clicked', () => {
      const blueButton = getByText('Blue');
      fireEvent.click(blueButton);
      expect(mockFunction).toHaveBeenCalledWith('blue');
    });
  
    test('should select red when red button has been clicked', () => {
      const redButton = getByText('Red');
      fireEvent.click(redButton);
      expect(mockFunction).toHaveBeenCalledWith('red');
    });

    test('should select yellow when yellow button has been clicked', () => {
        const yellowButton = getByText('Yellow');
        fireEvent.click(yellowButton);
        expect(mockFunction).toHaveBeenCalledWith('yellow');
      });

    test('should select purple when purple button has been clicked', () => {
        const purpleButton = getByText('Purple');
        fireEvent.click(purpleButton);
        expect(mockFunction).toHaveBeenCalledWith('purple');
    });

    test('should select green when green button has been clicked', () => {
        const greenButton = getByText('Green');
        fireEvent.click(greenButton);
        expect(mockFunction).toHaveBeenCalledWith('green');
    });

    test('should select orange when orange button has been clicked', () => {
        const orangeButton = getByText('Orange');
        fireEvent.click(orangeButton);
        expect(mockFunction).toHaveBeenCalledWith('orange');
    });
  });