child component re-renders in when

1. its state changes
2. its props change
3. when parent re-renders

useCallback is used on functions to memorize a function and avoid calling every time it renders
unless dependencies changes.
It is especially useful when this function is passed as prop to its child. it avoids unnecessary re-renders
so, it is very important to use useCallback on functions that are passed as props to child.
and it is stupid idea to use useCallback on functions that are not passed as props.
