import React from "react"

const Counter = props => {

    const todos = props.todos;
    const totalCount = todos.length;
    const completedTasks = todos.filter(todo => todo.completed === true).length;

    return (
    <>
        <p>Tasks {completedTasks} of {totalCount}</p>
    </>
    )
}

export default Counter