import React from "react";

import { TodoList } from "./componenets";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>To do App</h1>
      <TodoList />
    </div>
  );
}
