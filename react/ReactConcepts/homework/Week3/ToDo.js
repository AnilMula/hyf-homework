import React, { useState } from 'react';
import Timer from './Timer';
import NewToDo from './NewToDo';
import DisplayToDo from './DisplayToDo';

export default function ToDo() {
  const [todolist, setTodolist] = useState([]);

  const onNewToDO = (result) => {
    setTodolist((pre) => {
      return pre.concat(result);
    });
  };
  const modifiedTodo = (result) => {
    setTodolist(result);
  };

  return (
    <div>
      <Timer></Timer>
      <NewToDo onNewToDo={onNewToDO}></NewToDo>
      {/* <Todolist todolist={todolist} onDeleteToDo={onDeleteToDo}></Todolist> */}
      <DisplayToDo
        todolist={todolist}
        modifiedTodo={modifiedTodo}
      ></DisplayToDo>
    </div>
  );
}
