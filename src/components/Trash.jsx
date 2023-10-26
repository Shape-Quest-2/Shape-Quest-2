import React from 'react';
import { useDroppable } from '@dnd-kit/core';

const Trash = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'trash',
  });
  const style = {
    color: isOver ? 'red' : undefined,
  };

  return (
    <div ref={setNodeRef} style={{ ...style }} className='trash'>
      Trash
    </div>
  );
};

export default Trash;
