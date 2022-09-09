import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton() {

  const onClickButton = () => {
    alert('Aqui se deberia de abrir el modal');
  }

  return (
    <button 
      className="createTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };