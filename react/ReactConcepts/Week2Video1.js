// more todos are added with button click
import React, { useState } from 'react';

const TodoRow = (props) => {
  const { todo } = props;
  return <li>{todo}</li>;
};

const Todo = (props) => {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoRow key={todo} todo={todo}></TodoRow>;
      })}
    </ul>
  );
};
const todoList = ['todo1', 'todo2'];
const Week2Video1 = () => {
  const [todos, setTodos] = useState(todoList);
  const onButtonClick = () => {
    const arrayLen = todos.length;
    const myNextTodoName = `todo${arrayLen + 1}`;
    const myNextTodos = todos.concat(myNextTodoName);
    setTodos(myNextTodos);
  };
  return (
    <div>
      <Todo todos={todos} headerText="Todo List"></Todo>
      <button onClick={onButtonClick}>Add new Todo</button>
    </div>
  );
};

export default Week2Video1;
