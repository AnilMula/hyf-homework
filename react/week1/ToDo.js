import React from 'react';
import ToDo1 from './ToDo1';
import ToDo2 from './ToDo2';
import ToDo3 from './ToDo3';

const ToDo = () => {
  //few styles for todo
  const boxStyle = {
    color: 'green',
    border: '2px solid black',
    width: '25%',
    height: '5%',
  };
  const underline = {
    textDecoration: 'underline',
  };
  const todo1Color = {
    color: 'black',
    backgroundColor: 'LightBlue',
  };
  const todo2Color = {
    color: 'red',
    backgroundColor: 'LightBlue',
  };

  const todo3Color = {
    color: 'purple',
    backgroundColor: 'LightBlue',
  };
  return (
    <div style={boxStyle}>
      <h1 style={underline}>Todo List</h1>
      <ToDo1
        task={{ activity: 'get out of bed', time: '06:00' }}
        style={todo1Color}
      ></ToDo1>
      <ToDo2
        task={{ activity: 'Brush teeth', time: '06:15' }}
        style={todo2Color}
      ></ToDo2>
      <ToDo3
        task={{ activity: 'Eat breakfast', time: '06:55' }}
        style={todo3Color}
      ></ToDo3>
    </div>
  );
};

export default ToDo;
