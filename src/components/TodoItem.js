import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditing = () => {
    setIsEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    backgroundColor: "#d7ffd7",
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
        <input
          type="checkbox"
          id={id}
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <div className={styles.details}>
        <label htmlFor={id}>{title}</label>
        <small>{updated ? 'Updated:' : 'Created:'}{time} on {day}</small>
        </div>
        <div className={styles.actions}>
          <button aria-label="Edit this item" onClick={() => handleEditing()}>
            <FaEdit />
          </button>
          <button aria-label="Delete this item" onClick={() => props.deleteTodoProps(id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <input
        type="text"
        className={styles.textInput}
        value={title}
        style={editMode}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

export default TodoItem;
