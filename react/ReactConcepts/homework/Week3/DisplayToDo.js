import React, { useCallback } from 'react';
import './Style.css';
import EachToDo from './EachToDo';

export default function DisplayToDo({ todolist, modifiedTodo }) {
  const onDeleteToDo = useCallback(
    (result) => {
      modifiedTodo(todolist.filter((item) => item.todo !== result.todo));
    },
    [todolist, modifiedTodo]
  );

  return (
    <div>
      {todolist.map((todo, index) => (
        <EachToDo
          todo={todo}
          onDeleteToDo={onDeleteToDo}
          key={index}
        ></EachToDo>
      ))}
    </div>
  );
}
