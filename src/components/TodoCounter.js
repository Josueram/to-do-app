import React from 'react';
import './TodoCounter.css';

function TodoCounter({ completed, total }) {

  return (
    <h2 className='todoCounter'>Haz completado {completed} de {total} TODO's</h2>
  );
}

export { TodoCounter };