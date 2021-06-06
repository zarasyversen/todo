import React, { useState } from "react";

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
    <form onSubmit={handleSubmit} className="addTodo-form">
      <label htmlFor="new-todo" className="addTodo-form__label">Add a new task</label>
      <input
        type="text"
        name="title"
        id="new-todo"
        placeholder="What do you need to do?"
        className="input-text addTodo-form__input"
        value={inputText.title}
        onChange={onChange}
      />
      <button className="button addTodo-form__button">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
