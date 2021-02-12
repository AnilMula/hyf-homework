import React, { useState, useCallback } from 'react';
import './Style.css';
const ModalExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const [hours, setHours] = useState([]);

  const [isShow, setIsShow] = useState(false);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setIsOpen(false);
    //console.log(name, startTime, endTime);
    setHours((pre) => {
      return pre.concat({ name, startTime, endTime });
    });
  }, [name, startTime, endTime]);

  const onShowShifts = useCallback(() => {
    setIsShow(true);
  }, []);
  const onCloseShifts = useCallback(() => {
    setIsShow(false);
  }, []);

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTime = (e) => {
    setEndTime(e.target.value);
  };

  return (
    <div>
      <h1>Shift Overview</h1>
      <button onClick={onOpenModal}>Add Shift Details</button>
      <button onClick={onShowShifts}>See Hours</button>
      {isOpen && (
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
      )}
      {isShow && (
        <div className="my-modal">
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>start time</th>
                <th>end time</th>
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => {
                return (
                  <tr key={hour.name}>
                    <td>{hour.name}</td>
                    <td>{hour.startTime}</td>
                    <td>{hour.endTime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={onCloseShifts}>Close</button>
        </div>
      )}
    </div>
  );
};
export default ModalExample;
