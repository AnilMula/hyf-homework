/**
 *
 * Welcome to the Student frontend developer challenge!
 *
 * Your task is to complete a simple Todo app in React. I've left in some partial code
 * for you to get started on.
 *
 * Once finished, users should be able to do the following:
 *
 * 1. "Add a todo". Todo is added, when the user types in a text for the todo in the form
 * and presses the "Add" button. Users should not be able to add empty todos. Text field
 * should be cleared once a todo is added. Te added todo should show up at the top of the Todo list.
 *
 * 2. "Show todos". The user should be able to see all added todos.
 *
 * 3. "Complete a todo". When user clicks a checkbox next to the todo, the "complete" state
 * of that Todo should toggle to the opposite value and that state should be reflected in the checkbox
 * i.e. if "complete" is true, checkbox is "checked", else it is "unchecked".
 *
 * 4. "Remove a todo". Once "Remove" button is clicked, the given todo should be removed
 * from the state and also disappear from the todo list.
 *
 * 5. The app should be styled, preferably using https://emotion.sh/, however, any styling
 * approach is acceptable.
 *
 * Note: As much as possible, please try to keep the given boiler plate code so that you can
 * showcase your ability to work with given parameters.
 *
 */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

function Todos() {
  const [todos, setTodos] = React.useState([
    {
      id: uuidv4(),
      text: "Complete assignment",
      completed: false
    }
  ]);
  const [showTodo, setShowTodo] = React.useState(false);
  function onCreate(value) {
    if (value)
      setTodos((pre) => [
        { id: uuidv4(), text: value, completed: false },
        ...pre
      ]);
  }
  function onToggleComplete(id, value) {
    todos.forEach((todo) => todo.id === id && (todo.completed = value));
  }
  function onRemove(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <main className="menu">
      {/** Show your "Create todo" form here */}
      <CreateTodo onCreate={onCreate} />
      <button
        className="show-button"
        onClick={(e) => {
          e.preventDefault();
          setShowTodo(!showTodo);
        }}
      >
        Show Todo
      </button>
      <div>
        <ul>
          {showTodo &&
            todos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onToggleComplete={onToggleComplete}
                onRemove={onRemove}
              ></Todo>
            ))}
        </ul>
      </div>
    </main>
  );
}

function Todo({ id, text, completed, onRemove, onToggleComplete }) {
  const [check, setCheck] = React.useState(completed);
  return (
    <li className="list">
      {text}
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => {
          setCheck(!check);
          onToggleComplete(id, check);
        }}
      ></input>
      <button
        className="remove-button"
        onClick={(e) => {
          e.preventDefault();
          onRemove(id);
        }}
      >
        Remove Todo
      </button>
    </li>
  );
}

function CreateTodo({ onCreate }) {
  const [value, setValue] = React.useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(e.target.todo.value);
        setValue("");
      }}
    >
      <input
        type="text"
        name="todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add Todo
      </button>
    </form>
  );
}

export default function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}
