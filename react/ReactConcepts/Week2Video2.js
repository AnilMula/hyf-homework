// to explain lifecycle methods
//class component

import React, { useEffect } from 'react';
import Counter from './Counter';

/* class MyComponent extends React.Component {
  componentDidMount() {
    //to fetch data
  }
  componentDidUpdate() {
    //when state change or props change
  }
  componentWillUnmount() {
    // when the component removed from document
  }
  render() {
    return <div>My Class Component</div>;
  }  
}
 */
const MyFuncComponent = () => {
  useEffect(() => {
    console.log('mount');
  }, []);

  return (
    <div>
      My Func Comp<Counter countFrom={0}>Counter</Counter>
    </div>
  );
};

export default MyFuncComponent;
