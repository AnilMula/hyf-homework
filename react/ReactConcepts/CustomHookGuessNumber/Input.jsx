import React from 'react';

export const Input = ({ onChange, onGuess, onRefresh }) => {
  return (
    <div>
      <div>
        <input
          onChange={(text) => onChange(text.target.value)}
          placeholder={'guess a number'}
        />

        <button onClick={onRefresh}>{'New game'}</button>
      </div>
      <div>
        <button onClick={onGuess}>{' Guess'}</button>
      </div>
    </div>
  );
};
/* const styles = StyleSheet.create({
  guess: {
    alignItems: 'center',
    backgroundColor: '#2970f2',

    padding: 5,
    width: 70,
    margin: 10,
    borderRadius: 20,
  },
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
  refresh: {
    alignItems: 'center',
    padding: 10,
  },
  textInputWrapper: { flexDirection: 'row', justifyContent: 'center' },
});
 */
