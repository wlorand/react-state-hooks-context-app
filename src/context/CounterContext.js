import React, { useState, createContext } from 'react';

// 1- create Context Object
export const CounterContext = createContext();

// 2- create a Provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  // create state within here
  const [count, setCount] = useState(0);

  // context returns a Provider
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
