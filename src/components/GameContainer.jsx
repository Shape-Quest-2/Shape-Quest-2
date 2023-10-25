import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';
import { useEffect } from 'react';

const GameContainer = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [shapes, setShapes] = useState([]);
  const [color, setColor] = useState('White');

  const handleSubmitShape = () => {
    useEffect(() => {
      if (selectedShape && selectedColor) {
        setShapes(prevShapes => [
          ...prevShapes,
          { shape: selectedShape, color: selectedColor },
        ]);
      }
    });
  };

  return (
    <div className='game-container'>
      <ToolBar
        setSelectedShape={setSelectedShape}
        setSelectedColor={setSelectedColor}
      />
      <GameBoard
        handleSubmitShape={handleSubmitShape}
        selectedShape={selectedShape}
        selectedColor={selectedColor}
        shapes={shapes}
        setShapes={setShapes}
        color={color}
        setColor={setColor}
      />
    </div>
  );
};

export default GameContainer;
