import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape, setSelectedColor }) => {
  return (
    <div className='tool-bar'>
      <button
        className='shapebuttons'
        id='circle'
        onClick={() => handleSubmitShape}>
        submit
      </button>
      <ColorTools setSelectedColor={setSelectedColor} />
      <ShapeTools setSelectedShape={setSelectedShape} />
    </div>
  );
};

export default ToolBar;
