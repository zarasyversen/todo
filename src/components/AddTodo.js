import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import { FaPlus } from "react-icons/fa";
import styles from "./AddTodo.module.css";

const AddTodo = (props) => {
  const [isAddingTodo, setAddingTodo] = useState(false);
  const addTodoItem = props.addTodoProps;

  const handleAdding = () => {
    const current = isAddingTodo ? false : true;
    setAddingTodo(current);
  };

  const buttonText = isAddingTodo ? 'Cancel' : 'Add New';

  return (
    <div className={styles.addTodo}>
        <button type="button" className={`button icon-button ${styles.addTodoBtn} ${isAddingTodo ? `${styles.addTodoBtnCancel}` : ''}`} onClick={handleAdding}>
            {buttonText}
            <FaPlus/>
        </button>
        {isAddingTodo && 
            <AddTodoForm addTodoProps={addTodoItem} addingTodo={handleAdding}/>
        }
    </div>
  )

};

export default AddTodo;
