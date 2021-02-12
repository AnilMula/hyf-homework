import React, { useState, useCallback } from 'react';

export default function EachToDo({ onDeleteToDo, todo }) {
  const [isChecked, setIsChecked] = useState(false);

  const linethrough = {
    textDecoration: 'line-through',
    color: 'red',
  };
  const handleCheckbox = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    //const name = target.name;
    console.log(target.name);
    /* setIsChecked((pre) => {
      return pre.concat({ [name]: value });
    }); */
    setIsChecked(value);
  };
  const handleDeleteButton = useCallback(
    (e, todo) => {
      onDeleteToDo(todo);
    },
    [onDeleteToDo]
  );
  return (
    <li>
      <span className="rectangle-box">
        {isChecked ? (
          <span style={linethrough}>
            {todo.todo} | {todo.deadline}
          </span>
        ) : (
          <span>
            {todo.todo} | {todo.deadline}
          </span>
        )}
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckbox}
        ></input>
        <button
          onClick={(e) => {
            handleDeleteButton(e, todo);
          }}
        >
          Delete
        </button>
        <button>Edit</button>
      </span>
    </li>
  );
}
