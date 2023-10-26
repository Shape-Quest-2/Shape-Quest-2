import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToolBar from '../../src/components/ToolBar';

describe('ToolBar Component', () => {
    let shapeMockFunction;
    let colorMockFunction;
  
    beforeAll(() => {
      shapeMockFunction = jest.fn();
      colorMockFunction= jest.fn();
    });
  
    test('should call setSelectedShape when a shape button is clicked', () => {
      const { getByText } = render(
        <ToolBar setSelectedShape={shapeMockFunction} setSelectedColor={colorMockFunction} />
      );

      const squareButton = getByText('Square');
      fireEvent.click(squareButton);
  
      expect(shapeMockFunction).toHaveBeenCalledWith('square');
    });
  
    test('should call setSelectedColor when a color button is clicked', () => {
      const { getByText } = render(
        <ToolBar setSelectedShape={shapeMockFunction} setSelectedColor={colorMockFunction} />
      );
  
      const redButton = getByText('Red');
      fireEvent.click(redButton);
  
      expect(colorMockFunction).toHaveBeenCalledWith('red');
    });
  });