import React, { useState, useCallback } from 'react';
import './Style.css';

export default function Todolist({ todolist, onDeleteToDo }) {
  const [isEdit, setIsEdit] = useState(true);
  const [editableToDo, setEditableToDo] = useState();
  const [editedToDo, setEditedToDo] = useState('');
  const [checkedIndex, setCheckedIndex] = useState();

  const linethrough = {
    textDecoration: 'line-through',
    color: 'red',
  };

  const handleDeleteButton = (event, index) => {
    event.preventDefault();
    onDeleteToDo(
      todolist.filter((item, i) => {
        return i !== index;
      })
    );
    if (index === checkedIndex) {
      setCheckedIndex((pre) => null);
    }
    if (index < checkedIndex) {
      setCheckedIndex((pre) => pre - 1);
    }
  };
  const handleEditButton = useCallback((event, index, todo) => {
    setIsEdit((pre) => !pre);
    setEditableToDo(index);
    setEditedToDo(todo.todo);
  }, []);

  const handleUpdateButton = useCallback(
    (e, index) => {
      setEditedToDo(e.target.value);
      todolist[index].todo = e.target.value;
    },
    [todolist]
  );
  const handleCheckbox = (event, index) => {
    /*const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name; */
    if (event.target.checked === true) {
      setCheckedIndex((pre) => index);
    } else {
      setCheckedIndex((pre) => null);
    }

    /* setIsChecked((pre) => {
      return pre.concat({ [name]: value });
    }); */
  };
  return (
    <div>
      <p>ToDo list</p>
      {todolist.map((todo, index) => (
        <li key={index}>
          <span className="rectangle-box">
            {isEdit ? (
              <span>
                {checkedIndex === index ? (
                  <span style={linethrough}>
                    {todo.todo} | {todo.deadline}
                  </span>
                ) : (
                  <span>
                    {todo.todo} | {todo.deadline}
                  </span>
                )}
              </span>
            ) : editableToDo === index ? (
              <input
                type="text"
                value={editedToDo}
                onChange={(e) => handleUpdateButton(e, index)}
              ></input>
            ) : (
              <span>
                {checkedIndex === index ? (
                  <span style={linethrough}>
                    {todo.todo} | {todo.deadline}
                  </span>
                ) : (
                  <span>
                    {todo.todo} | {todo.deadline}
                  </span>
                )}
              </span>
            )}

            <input
              name={index}
              type="checkbox"
              //   checked={isChecked.name}
              checked={checkedIndex === index ? true : false}
              onChange={(e) => handleCheckbox(e, index)}
            ></input>
            <button onClick={(e) => handleDeleteButton(e, index)}>
              Delete
            </button>
            <button onClick={(e) => handleEditButton(e, index, todo)}>
              {isEdit ? 'Edit' : editableToDo === index ? 'Update' : 'Edit'}
            </button>
          </span>
        </li>
      ))}
    </div>
  );
}
