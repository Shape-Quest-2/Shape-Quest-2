import React, { useState, useEffect } from 'react';
import '/src/sass/styles.css';

const GameBoard = ({ shapes, handleSubmitShape }) => {
  // Whenever selectedShape changes, add it to shapes list
  //   useEffect(() => {
  //     if (selectedShape) {
  //       setShapes(prevShapes => [...prevShapes, { shape: selectedShape }]);
  //     }
  //   }, [selectedShape]);

  //   useEffect(() => {
  //     if (selectedColor) {
  //       setColor(prevColors => [...prevColors, { color: selectedColor }]);
  //     }
  //   }, [selectedColor]);
  const [renderShapes, setRenderShapes] = useState([]);
  useEffect(() => {
    const renderShapes = shapes.map((element, index) => (
      <div
        style={{ backgroundColor: element.color }}
        id={`${element.shape}1`}
        key={index}>
        {element.shape}
      </div>
    ));
    setRenderShapes(renderShapes);
  }, [shapes]);

  return (
    <div className='game-board'>
      {renderShapes}
      <div>
        <button
          className='shapebuttons'
          id='circle'
          onClick={() => handleSubmitShape}>
          submit
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
