import React from 'react';


// function Shapes() {
//     return (
//         <section id='shapes'>
//             <button class='shapebuttons' id='square'></button>
//             <button class='shapebuttons' id='circle'></button>
//             <button class='shapebuttons' id='rectangle'></button>
//             <button class='shapebuttons' id='oval'></button>
//             <button class='shapebuttons' id='diamond'></button>
//         </section>
//     )
// }

function ShapeTools({ setSelectedShape }) {


    return (
        <section id='shapes'>
            <button className='shapebuttons' id='square' onClick={() => setSelectedShape('square')}></button>
            <button className='shapebuttons' id='circle' onClick={() => setSelectedShape('circle')}></button>
            <button className='shapebuttons' id='rectangle' onClick={() => setSelectedShape('rectangle')}></button>
            {/* <button className='shapebuttons' id='triangle' onClick={() => setSelectedShape('triangle')}></button> */}
            <button className='shapebuttons' id='oval' onClick={() => setSelectedShape('oval')}></button>
            <button className='shapebuttons' id='diamond' onClick={() => setSelectedShape('diamond')}></button>
        </section>
    )
}


// export default Shapes;
export default ShapeTools;