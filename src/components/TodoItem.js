import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  
  const onComplete = () => {
    alert('Terminaste la tarea ' + props.text);
  };
  
  const onDelete = () => {
    alert('Borraste la tarea ' + props.text);
  };

  return (
    <li className="todoItem">
      <span 
        className={`icon icon-check ${props.completed && 'icon-check--active'}`}
        onClick={onComplete}
      >
        √ 
      </span>
      <p className={`todoItem-p ${props.completed && 'todoItem-p--complete'}`}>
        {props.text}
      </p>
      <span 
        className="icon icon-delete"
        onClick={onDelete}
      >
        x
      </span>
    </li>
  );
}

export { TodoItem };
