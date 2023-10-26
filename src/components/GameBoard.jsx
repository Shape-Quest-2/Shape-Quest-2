import React, { useState, useEffect } from 'react';
import '/src/sass/styles.css';
import { useDroppable } from '@dnd-kit/core';
import Shape from './Shape';

const GameBoard = ({ shapes, handleChangeExistingShapeColor }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  const renderShapes = shapes.map((element, index) => (
    <Shape
      shapes={shapes}
      element={element}
      index={index}
      handleChangeExistingShapeColor={handleChangeExistingShapeColor}
    />
  ));

  return (
    <div ref={setNodeRef} style={{ ...style }} className='game-board'>
      {renderShapes}
    </div>
  );
};

export default GameBoard;
