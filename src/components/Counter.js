import React from "react";
import styles from "./Counter.module.css"

const Counter = (props) => {
  const todos = props.todos;
  const totalCount = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed === true).length;

  return (
    <>
      <p className={styles.taskCounter}>
        Completed Tasks {completedTasks} of {totalCount}
      </p>
    </>
  );
};

export default Counter;
