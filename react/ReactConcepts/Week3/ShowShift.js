import React, { useCallback } from 'react';

export default function ShowShift({ hours, onCloseShift }) {
  const onCloseShifts = useCallback(() => {
    onCloseShift(false);
  }, [onCloseShift]);
  return (
    <div className="my-modal-show">
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
  );
}
