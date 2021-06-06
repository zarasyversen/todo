import React, { useState } from "react";
import InputTodo from "./InputTodo";
import { FaPlus } from "react-icons/fa";

const AddTodo = (props) => {
  const [isAddingTodo, setAddingTodo] = useState(false);
  const addTodoItem = props.addTodoProps;

  const handleAdding = () => {
    const current = isAddingTodo ? false : true;
    setAddingTodo(current);
  };

  const buttonText = isAddingTodo ? 'Cancel' : 'Add New';

  return (
    <div className="addTodo">
        <button type="button" className={`addTodoBtn ${isAddingTodo ? 'addTodoBtn--cancel' : ''}`} onClick={handleAdding}>
            {buttonText}
            <FaPlus/>
        </button>
        {isAddingTodo && 
            <InputTodo addTodoProps={addTodoItem} addingTodo={handleAdding}/>
        }
    </div>
  )

};

export default AddTodo;
