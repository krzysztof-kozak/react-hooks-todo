import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTodo(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: todo,
      id: Math.random().toFixed(5),
      completed: false
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        placeholder="todo..."
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
