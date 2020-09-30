import React from 'react';

const ToDo2 = (props) => {
  return (
    <div style={props.style}>
      <p>
        *{props.task.activity}, {props.task.time}
      </p>
    </div>
  );
};

export default ToDo2;
