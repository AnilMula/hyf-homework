import React, { useCallback, useState } from 'react';
import AddShift from './AddShift';
import ShowShift from './ShowShift';
import './Style.css';

export default function Forms() {
  const [isOpen, setIsOpen] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const [hours, setHours] = useState([]);

  const onOpenModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onShowShifts = useCallback(() => {
    setIsShow(true);
  }, []);

  const onAddShift = (result) => {
    setIsOpen(result);
  };

  const onSaveShift = (result) => {
    setHours((pre) => {
      return pre.concat(result);
    });
  };

  const onCloseShift = (result) => {
    setIsShow(result);
  };
  return (
    <div>
      <h1>Shift Overview</h1>
      <button onClick={onOpenModal}>Add Shift Details</button>
      <button onClick={onShowShifts}>See Hours</button>
      {isOpen && (
        <AddShift onAddShift={onAddShift} onSaveShift={onSaveShift}></AddShift>
      )}
      {isShow && (
        <ShowShift hours={hours} onCloseShift={onCloseShift}></ShowShift>
      )}
    </div>
  );
}
