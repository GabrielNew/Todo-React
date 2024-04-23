import { useState } from "react";
import { MdDelete } from "react-icons/md";

const App = () => {
  const ENTER_KEY = 13;
  const ESC_KEY = 27;

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const erase = () => {
    setValue("");
  };

  const submit = () => {
    setTodos([
      ...todos,
      { id: new Date().getTime(), title: value, checked: false },
    ]);
    erase();
  };

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESC_KEY) {
      erase();
    }
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
        <input
          className="new-todo"
          placeholder="What do you need to do?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <ul className="todoList">
          {todos.map((todo) => (
            <li key={todo.id.toString()}>
              <span
                className={["todo", todo.checked ? "checked" : ""].join(" ")}
                tabIndex={0}
                onClick={() => toggleTask(todo)}
                role="button"
              >
                {todo.title}
              </span>
              <button
                type="button"
                onClick={() => onRemove(todo)}
                className="remove"
              >
                <MdDelete size={28} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default App;
