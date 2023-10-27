import React from 'react';
import { useDraggable } from '@dnd-kit/core';

const Shape = ({ element, handleChangeExistingShapeColor, index }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `${element.id}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      onDoubleClick={e => {
        handleChangeExistingShapeColor(e.target.id);
      }}
      style={{
        backgroundColor: element.color,
        position: 'absolute',
        left: `${element.position.x}px`,
        top: `${element.position.y}px`,
        ...style,
      }}
      className={`${element.shape}1`}
      data-id={index}
      id={element.id}
      key={index}>
      {element.shape}
    </div>
  );
};

export default Shape;
