import React, { useState } from "react";
import styles from "./AddTodo.module.css";

const AddTodoForm = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });


  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      props.addingTodo();
      setInputText({
        title: "",
      });
    } else {
      alert("Please write item");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTodoForm}>
      <label htmlFor="new-todo" className={styles.addTodoForm__label}>Add a new task</label>
      <input
        type="text"
        name="title"
        id="new-todo"
        placeholder="What do you need to do?"
        className={`input-text ${styles.addTodoForm__label}`}
        value={inputText.title}
        onChange={onChange}
      />
      <button className={`button ${styles.addTodoForm__button}`}>
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
