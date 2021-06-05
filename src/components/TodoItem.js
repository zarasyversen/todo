import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
import { FaTrashAlt } from "react-icons/fa";

const TodoItem = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    return () => {
      console.log("cleaning up....");
    };
  }, []);

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
    color: "#595959",
    opacity: 0.4,
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
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          id={id}
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrashAlt />
        </button>
        <label htmlFor={id} style={completed ? completedStyle : null}>{title}</label>
        <p>{updated ? 'Updated:' : 'Created:'}{time} on {day}</p>
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
