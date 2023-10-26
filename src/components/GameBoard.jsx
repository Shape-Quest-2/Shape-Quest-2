import React, { useState, useEffect } from 'react';

const GameBoard = ({ shapes, handleChangeExistingShapeColor }) => {
  const renderShapes = shapes.map((element, index) => (
    <div
      onClick={e => {
        handleChangeExistingShapeColor(e.target.dataset.id);
      }}
      style={{ backgroundColor: element.color }}
      id={`${element.shape}1`}
      data-id={index}
      key={index}>
      {element.shape}
    </div>
  ));

  return <div className='game-board'>{renderShapes}</div>;
};

export default GameBoard;
