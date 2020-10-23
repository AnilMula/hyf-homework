import React, { useState } from 'react';
import './Style.css';

export default function NewToDo({ onNewToDo }) {
  const [todo, setTodo] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleToDoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleButtonAddToDo = () => {
    onNewToDo({ todo, deadline });
  };
  return (
    <div>
      <div>
        <label>To Description</label>
        <input type="text" value={todo} onChange={handleToDoChange}></input>
      </div>
      <div>
        <label>Deadline</label>
        <input
          type="date"
          value={deadline}
          onChange={handleDeadlineChange}
        ></input>
      </div>
      <button onClick={handleButtonAddToDo}>Add ToDo</button>
    </div>
  );
}
