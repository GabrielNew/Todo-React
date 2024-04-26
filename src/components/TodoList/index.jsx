import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import "./styles.css";

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="todoList">
      {todos.map((todo) => (
        <li key={todo.id.toString()}>
          <span
            className={["todo", todo.checked ? "checked" : ""].join(" ")}
            tabIndex={0}
            onClick={() => onToggle(todo)}
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
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
