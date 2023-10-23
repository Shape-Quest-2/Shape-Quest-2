import React, { useState } from 'react';
import GameHeader from './GameHeader';
import ToolBar from './ToolBar';
import GameBoard from './GameBoard';

const GameContainer = () => {
    const [selectedShape, setSelectedShape] = useState(null);

    return (
        <div className="game-container">
            {/* <GameHeader /> */}
            {/* <ToolBar />
            <GameBoard /> */}
            <ToolBar setSelectedShape={setSelectedShape} />
            <GameBoard selectedShape={selectedShape} />
        </div>
    );
};

export default GameContainer;
