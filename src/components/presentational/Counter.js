import React from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
  const todos = props.todos;
  const totalCount = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed === true).length;
  const noTasks = totalCount === 0;

  return (
    <>
      {!noTasks && (
        <p className={styles.taskCounter}>
          Hey, you have completed {completedTasks} of {totalCount} tasks!
        </p>
      )}
    </>
  );
};

export default Counter;
