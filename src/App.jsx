import { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const onNewTask = (value) => {
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
  };

  const toggleTask = (todo) => {
    setTodos(
      todos.map((obj) =>
        obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
      )
    );
  };

  const onRemove = (todo) => {
    setTodos(todos.filter((obj) => obj.id !== todo.id));
  };

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo</h1>
      </header>
      <section className="main">
        <NewTodo onNewTask={onNewTask} />
        <TodoList todos={todos} onToggle={toggleTask} onRemove={onRemove} />
      </section>
    </section>
  );
};

export default App;
