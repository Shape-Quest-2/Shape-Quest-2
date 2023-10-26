import React from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';
import Trash from './Trash';

const ToolBar = ({ setSelectedShape, setSelectedColor, handleSubmitShape }) => {
  return (
    <div className='tool-bar'>
      <ColorTools setSelectedColor={setSelectedColor} />
      <Trash />
      <ShapeTools
        setSelectedShape={setSelectedShape}
        handleSubmitShape={handleSubmitShape}
      />
    </div>
  );
};

export default ToolBar;
