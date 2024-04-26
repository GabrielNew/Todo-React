import { useState } from "react";
import PropTypes from "prop-types";

import "./styles.css";

const NewTodo = ({ onNewTask }) => {
  const ENTER_KEY = 13;
  const ESC_KEY = 27;

  const [value, setValue] = useState("");

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESC_KEY) {
      erase();
    }
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const submit = () => {
    if (onNewTask) {
      onNewTask(value);
      erase();
    }
  };

  const erase = () => {
    setValue("");
  };

  return (
    <input
      className="new-todo"
      placeholder="What do you need to do?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

NewTodo.propTypes = {
  onNewTask: PropTypes.func.isRequired,
};

export default NewTodo;
