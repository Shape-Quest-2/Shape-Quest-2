import React, { useState } from 'react';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';
import { DndContext } from '@dnd-kit/core';

const GameContainer = () => {
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedColor, setSelectedColor] = useState('White');
  const [shapes, setShapes] = useState([]);

  const handleSubmitShape = shape => {
    setShapes([
      ...shapes,
      {
        shape: shape,
        color: selectedColor,
        position: { x: 0, y: 0 },
        id: String(Date.now()),
      },
    ]);
  };
  const handleChangeExistingShapeColor = id => {
    const newShapes = [];
    for (let i = 0; i < shapes.length; i++) {
      if (shapes[i].id == id) {
        shapes[i].color = selectedColor;
      }
      newShapes.push(shapes[i]);
    }
    setShapes(newShapes);
  };
  const handleDragEnd = e => {
    const shape = shapes.find(x => x.id === e.active.id);
    shape.position.x += e.delta.x;
    shape.position.y += e.delta.y;
    const _shapes = shapes.map(x => {
      if (x.id === shape.id) return shape;
      return x;
    });
    setShapes(_shapes);
  };

  return (
    <div className='game-container'>
      <ToolBar
        setSelectedShape={setSelectedShape}
        setSelectedColor={setSelectedColor}
        handleSubmitShape={handleSubmitShape}
      />
      <DndContext onDragEnd={handleDragEnd}>
        <GameBoard
          shapes={shapes}
          handleChangeExistingShapeColor={handleChangeExistingShapeColor}
        />
      </DndContext>
    </div>
  );
};

export default GameContainer;
