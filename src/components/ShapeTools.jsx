import React from 'react';

function ShapeTools({ handleSubmitShape }) {
  return (
    <section id='shapes'>
      <button
        className='shapebuttons'
        id='square'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        Square
      </button>
      <button
        className='shapebuttons'
        id='circle'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        Circle
      </button>
      <button
        className='shapebuttons'
        id='rectangle'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        Rectangle
      </button>
      <button
        className='shapebuttons'
        id='triangle'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        triangle
      </button>
      <button
        className='shapebuttons'
        id='oval'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        Oval
      </button>
      <button
        className='shapebuttons'
        id='diamond'
        onClick={e => {
          handleSubmitShape(e.target.innerHTML.toLowerCase());
        }}>
        Diamond
      </button>
    </section>
  );
}

// export default Shapes;
export default ShapeTools;
