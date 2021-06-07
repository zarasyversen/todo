import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NoMatch";
import { v4 as uuidv4 } from "uuid";
import Header from "./presentational/Header";
import AddTodo from "./functional/AddTodo";
import TodosList from "./functional/TodosList";
import EmptyTodosList from "./presentational/EmptyTodosList";
import Navbar from "./presentational/Navbar";
import Counter from "./presentational/Counter";

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const getCurrentDay = () => {
    const date = new Date();
    const currentDate =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const currentDay = date.toLocaleString("en-GB", { weekday: "long" });
    return `${currentDay} (${currentDate})`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const currentHours = now.getHours();
    let currentMinutes = now.getMinutes();

    if (currentMinutes < 10) {
      currentMinutes = `0${currentMinutes}`;
    }

    return `${currentHours}:${currentMinutes}`;
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
      updated: false,
      day: getCurrentDay(),
      time: getCurrentTime(),
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
          todo.updated = true;
          todo.day = getCurrentDay();
          todo.time = getCurrentTime();
        }
        return todo;
      })
    );
  };

  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp);
    return savedTodos || [];
  }

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <div className="inner-top">
                <Header />
                <Counter todos={todos} />
                {todos.length === 0 && <EmptyTodosList />}
              </div>
              <AddTodo addTodoProps={addTodoItem} todos={todos} />
              {todos.length > 0 && (
                <TodosList
                  todos={todos}
                  handleChangeProps={handleChange}
                  deleteTodoProps={deleteTodo}
                  setUpdate={setUpdate}
                />
              )}
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
