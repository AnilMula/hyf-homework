import React from 'react';

//bootstrap styling
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AddToDo(props) {
  const { onAddToDo } = props;

  const handleButtonClick = () => {
    const newToDo = document.getElementById('newToDo');
    if (newToDo) {
      onAddToDo(newToDo.value);
    }
  };

  return (
    <div>
      <input type="text" id="newToDo"></input>
      <Button onClick={handleButtonClick}>Add ToDo</Button>
    </div>
  );
}
