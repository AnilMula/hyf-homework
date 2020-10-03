import React from 'react';

const ToDo1 = (props) => {
  const { style } = props;
  const { activity, time } = props.task;
  console.log(style.color);
  return (
    <div style={style}>
      <p>
        *{activity}, {time}
      </p>
    </div>
  );
};

export default ToDo1;
