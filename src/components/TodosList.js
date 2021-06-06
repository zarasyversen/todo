import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { FaSearch, FaPlus } from "react-icons/fa";
import styles from "./TodosList.module.css";

const TodosList = (props) => {
  const [todos, setTodos] = useState(props.todos);
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setTodos(props.todos);
  }, [props.todos])

  useEffect(() => {
    if (searchTerm) {
      const filteredTodos = todos.filter((item) => {
        return (
          item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
      });

      if (filteredTodos.length > 0) {
        setTodos(filteredTodos);
        setNoResults(false);
      } else {
        setNoResults(true);
        setTodos([]);
      }
    } else {
      setTodos(props.todos);
      setNoResults(false);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    const toggle = isSearching ? false : true;
    setIsSearching(toggle);
    setSearchTerm('');
  };

  const buttonText = isSearching ? 'Cancel Search' : 'Find';
  const buttonIcon = isSearching ? <FaPlus /> : <FaSearch />;

  return (
    <div>
      <div className={styles.topContainer}>
      <h2>Tasks</h2>
      <button type="button" className={`button icon-button ${styles.searchBtn} ${isSearching ? styles.cancelSearch : ''}`} onClick={handleSearch}>
        {buttonText}
        {buttonIcon}
      </button>
      {isSearching && (
        <div className={styles.todoSearch}>
          <FaSearch />
          <input
            className={`input-text ${styles.todoSearchInput}`}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search for task..."
          />
          {noResults && <p>Sorry, no results. Maybe add a new item?</p>}
        </div>
      )}
      </div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            setUpdate={props.setUpdate}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
