import React from 'react';

import ToDo1 from './ToDo1';

const ToDo = () => {
  const boxStyle = {
    color: 'green',
    border: '2px solid black',
    width: '25%',
    height: '5%',
  };
  const underline = {
    textDecoration: 'underline',
  };
  const todoStyles = [
    {
      color: 'black',
      backgroundColor: 'LightBlue',
    },
    {
      color: 'red',
      backgroundColor: 'LightBlue',
    },
    {
      color: 'purple',
      backgroundColor: 'LightBlue',
    },
  ];
  const tasks = [
    { activity: 'get out of bed', time: '06:00' },
    { activity: 'Brush teeth', time: '06:15' },
    { activity: 'Eat breakfast', time: '06:55' },
  ];
  return (
    <div style={boxStyle}>
      <h1 style={underline}>Todo List</h1>
      {/*       <ToDo1
        task={{ activity: 'get out of bed', time: '06:00' }}
        style={todo1Color}
      ></ToDo1>
      <ToDo1
        task={{ activity: 'Brush teeth', time: '06:15' }}
        style={todo2Color}
      ></ToDo1>
      <ToDo1
        task={{ activity: 'Eat breakfast', time: '06:55' }}
        style={todo3Color}
      ></ToDo1> */}

      {tasks
        .map((task, index) => [task, todoStyles[index]])
        .map((styledTask, index) => (
          <div key={index}>
            <ToDo1 task={styledTask[0]} style={styledTask[1]}></ToDo1>
          </div>
        ))}
    </div>
  );
};

export default ToDo;
