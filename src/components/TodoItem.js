import React, { useState, useEffect, useRef } from "react";
import styles from "./TodoItem.module.css";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const editInput = useRef(null);

  const handleEditing = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    if (isEditing) {
      editInput.current.focus();
    }
  }, [isEditing]);

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    opacity: 0.7,
    textDecoration: "line-through",
  };

  const { completed, id, title, updated, time, day } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (isEditing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <li className={styles.item} style={completed ? completedStyle : null}>
      <div className={styles.innerItem} style={viewMode}>
        <label htmlFor={id} className={styles.checkboxLabel}>
          <span className="sr-only">Task completed</span>
          {completed && 
            <FaCheck />
          }
        </label>
        <input
          type="checkbox"
          id={id}
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <div className={styles.details}>
          <p>{title}</p>
          <small>
            {updated ? "Updated " : "Created "}
            {time} on {day}
          </small>
        </div>
        <div className={styles.actions}>
          <button
            className="button"
            aria-label="Edit this item"
            onClick={() => handleEditing(id)}
          >
            <FaEdit />
          </button>
          <button
            className="button"
            aria-label="Delete this item"
            onClick={() => props.deleteTodoProps(id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div style={editMode} className="editTodo">
        <label htmlFor={`edit-${id}`}>
          Edit your task, press enter when done
        </label>
        <input
          type="text"
          id={`edit-${id}`}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
          ref={editInput}
          onKeyDown={handleUpdateDone}
        />
      </div>
    </li>
  );
};

export default TodoItem;
