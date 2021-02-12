// this video covers controlled inputs
import React, { useState } from 'react';

export default function Week3Video1() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState(false);
  return (
    <div>
      <br></br>Name:
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          console.log(name);
        }}
      ></input>
      <br></br>Age:
      <input
        type="text"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      {console.log(age)}
      <br></br>Sex:
      <input
        type="checkbox"
        checked={sex}
        onChange={(e) => {
          console.log(e.target.value);
          setSex(!sex);
        }}
      ></input>
      {console.log(sex)}
    </div>
  );
}
