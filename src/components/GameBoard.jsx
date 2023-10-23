import React, { useState } from 'react';
import '/src/sass/styles.css';
// const GameBoard = () => {
//     return (
//         <div className="game-board">
//             {/* Game elements/logic */}
//         </div>
//     );
// };

// const GameBoard = ({ selectedShape }) => {
//     return (
//         <div className="game-board">
//             {selectedShape === 'square' && <div id="square"></div>}
//             {selectedShape === 'circle' && <div id="circle"></div>}
//             {selectedShape === 'rectangle' && <div id="rectangle"></div>}
//             {selectedShape === 'oval' && <div id="oval"></div>}
//             {selectedShape === 'diamond' && <div id="diamond"></div>}
//         </div>
//     );
// };

const GameBoard = ({ selectedShape }) => {
    const [shapes, setShapes] = useState([]);

    // Whenever selectedShape changes, add it to shapes list
    React.useEffect(() => {
        if (selectedShape) {
            setShapes(prevShapes => [...prevShapes, selectedShape]);
        }
    }, [selectedShape]);

    return (
        <div className="game-board">
            {shapes.map((shape, index) => (
                <div id={`${shape}1`} key={index}>{shape}</div>
            ))}
        </div>
    );
};

export default GameBoard;