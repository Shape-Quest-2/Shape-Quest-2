import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';
import { useEffect } from 'react';

const GameContainer = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedColor, setSelectedColor] = useState('White');
  const [shapes, setShapes] = useState([]);

  const handleSubmitShape = shape => {
    setShapes([...shapes, { shape: shape, color: selectedColor }]);
  };
  const handleChangeExistingShapeColor = id => {
    const newShapes = [];
    for (let i = 0; i < shapes.length; i++) {
      if (Number(id) === i) {
        shapes[i].color = selectedColor;
      }
      newShapes.push(shapes[i]);
    }
    setShapes(newShapes);
  };

  return (
    <div className='game-container'>
      <ToolBar
        setSelectedShape={setSelectedShape}
        setSelectedColor={setSelectedColor}
        handleSubmitShape={handleSubmitShape}
      />
      <GameBoard
        shapes={shapes}
        handleChangeExistingShapeColor={handleChangeExistingShapeColor}
      />
    </div>
  );
};

export default GameContainer;
