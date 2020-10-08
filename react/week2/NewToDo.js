import React, { useState } from 'react';
import AddToDo from './AddToDo';

//bootstrap styling
import { Table, Button, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NewToDo() {
  const [todos, setToDo] = useState([
    'brush teeth',
    'go for walk',
    'take breakfast',
    'get ready to office',
    'project meeting',
    'client meeting',
  ]);
  const [mappedToDos, setMap] = useState();

  const linethrough = {
    textDecoration: 'line-through',
    color: 'red',
  };
  const centerAlign = {
    marginRight: '20%',
    width: '50%',
  };

  const onAddToDo = (newToDo) => {
    if (newToDo) setToDo((prevTodos) => [...prevTodos, newToDo]);
  };

  function handleButtonClick(event, todo) {
    event.preventDefault();
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    if (index === mappedToDos) {
      setMap((pre) => null);
    }
    if (index < mappedToDos) {
      setMap((pre) => pre - 1);
    }
  }

  function handleCheckBox(event, todoIndex) {
    if (event.target.checked === true) {
      setMap((pre) => todoIndex);
    } else {
      setMap((pre) => null);
    }
  }
  return (
    <div style={centerAlign}>
      <AddToDo onAddToDo={onAddToDo}></AddToDo>
      <Badge variant="info">TODO list</Badge>

      <Table>
        <tbody>
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <tr key={index}>
                <td style={{ alignContent: 'left' }}>
                  {mappedToDos === index ? (
                    <span style={linethrough}>{todo}</span>
                  ) : (
                    <span>{todo}</span>
                  )}
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={mappedToDos === index ? true : false}
                    onChange={(e) => handleCheckBox(e, index)}
                  ></input>
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={(e) => handleButtonClick(e, todo)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No items</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
