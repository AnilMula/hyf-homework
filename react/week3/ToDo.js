import React, { useState } from 'react';
import Timer from './Timer';
import NewToDo from './NewToDo';
import Todolist from './Todolist';

export default function ToDo() {
  const [todolist, setTodolist] = useState([]);

  const onNewToDO = (result) => {
    setTodolist((pre) => {
      return pre.concat(result);
    });
  };

  const onDeleteToDo = (result) => {
    setTodolist(result);
  };

  return (
    <div>
      <Timer></Timer>
      <NewToDo onNewToDo={onNewToDO}></NewToDo>
      <Todolist todolist={todolist} onDeleteToDo={onDeleteToDo}></Todolist>
    </div>
  );
}
