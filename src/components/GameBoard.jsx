import React from 'react';

// const GameBoard = () => {
//     return (
//         <div className="game-board">
//             {/* Game elements/logic */}
//         </div>
//     );
// };

const GameBoard = ({ selectedShape }) => {
    return (
        <div className="game-board">
            {selectedShape === 'square' && <div id="square"></div>}
            {selectedShape === 'circle' && <div id="circle"></div>}
            {selectedShape === 'rectangle' && <div id="rectangle"></div>}
            {selectedShape === 'oval' && <div id="oval"></div>}
            {selectedShape === 'diamond' && <div id="diamond"></div>}
        </div>
    );
};



export default GameBoard;