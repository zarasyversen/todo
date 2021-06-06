import React from "react";
import styles from "./TodosList.module.css";

const EmptyTodosList = () => {
  return (
    <div>
        <div className={styles.topContainerEmpty}>
            <h2>Wow, nothing to do yet?</h2>
            <p>Get started by adding a new task to your list!</p>
        </div>
    </div>
  );
};

export default EmptyTodosList;
