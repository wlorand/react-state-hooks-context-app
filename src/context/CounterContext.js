import React, { useState, createContext } from 'react';

// 1- create Context Object - always the first step when
export const CounterContext = createContext();

// 2- create a Provider for components to consume and subscribe to changes
export const CounterContextProvider = (props) => {
  // create state within your Context here via useState
  const [count, setCount] = useState(0);

  // context returns a Provider with the key value= prop that contains state value and method to update
  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
