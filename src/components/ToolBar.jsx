import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = ({ setSelectedShape }) => {
    const [color, setColor] = useState('');

    return (
        <div className="tool-bar">
            <ColorTools setColor={setColor} />
            {/* <ShapeTools color={color} /> */}
            <ShapeTools color={color} setSelectedShape={setSelectedShape} />
        </div>
    );
};

export default ToolBar;