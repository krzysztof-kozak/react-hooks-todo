import React, { useState } from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useFilter } from "../hooks";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setfilter] = useFilter("all");
  const [completeAll, setCompleteAll] = useState(true);

  const addTodo = (todo) => {
    if (!todo.text.length) {
      return;
    }
    setTodos((prevState) => [todo, ...prevState]);
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleCompleteAll = () => {
    setTodos((prevState) =>
      prevState.map((todo) => ({ ...todo, completed: completeAll }))
    );
    setCompleteAll((prevState) => !prevState);
  };

  const handleRemove = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleRemoveCompleted = () => {
    setTodos((prevState) => prevState.filter((todo) => !todo.completed));
  };

  let filteredTodos = [];

  if (filter === "all") {
    filteredTodos = todos;
  } else if (filter === "active") {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === "completed") {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <p>
        Todos left: <b>{todos.filter((todo) => !todo.completed).length}</b>
      </p>
      <p>
        Currently showing: <b>{filter}</b>
      </p>
      <div style={{ marginBottom: "1em" }}>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={setfilter}
          name="all"
        >
          Show all
        </button>
        <button
          className={filter === "active" ? "active" : ""}
          onClick={setfilter}
          name="active"
        >
          Show active
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={setfilter}
          name="completed"
        >
          Show completed
        </button>
      </div>
      {todos.length ? (
        <button style={{ marginBottom: "1em" }} onClick={handleCompleteAll}>
          Toggle complete All
        </button>
      ) : null}
      {todos.some((todo) => todo.completed) ? (
        <button onClick={handleRemoveCompleted}>Remove all completed</button>
      ) : null}
      <ul>
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            handleComplete={() => handleComplete(todo.id)}
            handleRemove={() => handleRemove(todo.id)}
          />
        ))}
      </ul>
      <pre> {JSON.stringify(todos, null, 2)}</pre>
    </>
  );
};

export default TodoList;
