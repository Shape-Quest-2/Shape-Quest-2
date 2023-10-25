import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape, setSelectedColor, handleSubmitShape }) => {
  return (
    <div className='tool-bar'>
      <ColorTools setSelectedColor={setSelectedColor} />
      <ShapeTools
        setSelectedShape={setSelectedShape}
        handleSubmitShape={handleSubmitShape}
      />
    </div>
  );
};

export default ToolBar;
