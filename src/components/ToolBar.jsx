import React, { useState } from 'react';
import ColorTools from './ColorTools';
import ShapeTools from './ShapeTools';

const ToolBar = () => {
    const [color, setColor] = useState('');

    return (
        <div className="tool-bar">
            <ColorTools setColor={setColor} />
            <ShapeTools color={color} />
        </div>
    );
};

export default ToolBar;