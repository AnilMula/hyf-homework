import React from 'react';

export const List = ({ num, match, index }) => {
  console.log(num, match, index);
  return (
    <div>
      {match === index ? <div>{`Value: ${num}`}</div> : <div>{`Value:?`}</div>}
    </div>
  );
};

/* const styles = StyleSheet.create({
  match: {
    flexDirection: 'row',
    backgroundColor: '#0ac222',
    justifyContent: 'center',
    padding: 5,
    margin: 4,
  },
  unMatch: { padding: 5, backgroundColor: 'grey', margin: 4 },
});
 */
