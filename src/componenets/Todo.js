import React from "react";

const Todo = ({ id, text, completed, handleComplete, handleRemove }) => {
  return (
    <div className="todoContainer">
      <li className={completed ? "completed" : ""} key={id}>
        {text}
      </li>
      <button key={id} onClick={handleRemove}>
        remove
      </button>
      <button key={id} onClick={handleComplete}>
        completed
      </button>
    </div>
  );
};

export default Todo;
