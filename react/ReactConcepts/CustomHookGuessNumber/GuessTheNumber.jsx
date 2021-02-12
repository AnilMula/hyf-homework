import React, { useEffect, useState, useCallback } from 'react';
import Hooks from './Hooks';

import { List } from './List';
import { Input } from './Input';

export const GuessTheNumber = ({ length, max }) => {
  const [randList, setRandList] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [match, setMatch] = useState(null);
  const { unlock, onUnlock, setUnlock } = Hooks();

  const refreshGame = useCallback(() => {
    randomArray(length, max);
  }, [length, max]);

  useEffect(() => {
    refreshGame();
  }, [refreshGame]);

  const randomArray = (length, max) => {
    const duplicate = [];

    while (max > 0) {
      const x = Math.floor(Math.random() * length + 1);
      if (duplicate.includes(x)) continue;
      else {
        duplicate.push(x);
        max--;
      }
    }
    setRandList(duplicate);
    /* setRandList(
      [...new Array(max)].map(() => Math.round(Math.random() * length))
    ); */
  };

  const onChangeText = (text) => {
    console.log(`input value ${text}`);
    setInputValue(() => parseInt(text));
    setMatch(() => -1);
  };

  const onPressGuess = () => {
    setMatch(randList.findIndex((num) => num === inputValue));
  };

  const onPressRefresh = () => {
    setMatch(() => -1);
    setUnlock(false);
    refreshGame();
  };
  console.log(randList);

  return (
    <div>
      <div>
        <div>
          <div>{'Guess The Number Game'}</div>
          <div>{`guess any number from 1 to ${length}`}</div>
        </div>
        <Input
          onChange={onChangeText}
          onGuess={onPressGuess}
          onRefresh={onPressRefresh}
        />
        {unlock
          ? randList.map((num, index) => (
              <List num={num} match={index} index={index} key={index} />
            ))
          : randList.map((num, index) => (
              <List num={num} match={match} index={index} key={index} />
            ))}

        <button onClick={onUnlock}>{'Unlock'}</button>
      </div>
    </div>
  );
};
/* 
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#8ab4de',
    marginTop: 30,
    borderRadius: 10,
  },
  title: { padding: 20, fontSize: 20 },
  subTitle: { padding: 20, fontSize: 15 },
  unlock: {
    alignItems: 'center',
    padding: 10,
  },
});
 */
