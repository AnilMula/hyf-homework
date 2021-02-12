import React, { useState, useCallback } from 'react';

export default function AddShift(props) {
  const { onAddShift, onSaveShift } = props;

  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };

  const onCloseModal = useCallback(() => {
    onAddShift(false);
    //console.log(name, startTime, endTime);

    onSaveShift({ name, startTime, endTime });
  }, [onSaveShift, name, startTime, endTime, onAddShift]);
  return (
    <div className="my-modal">
      <form>
        <label>Name</label>
        <input type="text" value={name} onChange={handleNameInput}></input>
        <br></br>
        <label>Start Time</label>
        <select onChange={handleStartTime} value={startTime}>
          <option>9:00</option>
          <option>9:05</option>
          <option>9:10</option>
          <option>9:15</option>
          <option>9:20</option>
        </select>
        <br></br>
        <label>End Time</label>
        <select onChange={handleEndTime} value={endTime}>
          <option>5:00</option>
          <option>5:05</option>
          <option>5:10</option>
          <option>5:15</option>
          <option>5:20</option>
        </select>
      </form>
      <button onClick={onCloseModal}>Save</button>
    </div>
  );
}
