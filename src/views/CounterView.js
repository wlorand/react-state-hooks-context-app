import React from 'react';

// Looks like a view here is a container component
// (like a dashboard?) that holds other UI components
// Also in View is a wrap of the CounterContextProvider,
// so each child component can call useContext() and get access to the state

// import context provider
import { CounterContextProvider } from '../context/CounterContext';

// child components
import CounterDisplay from '../components/CounterDisplay';
import CounterButtons from '../components/CounterButtons';

// 3p UI components
import { Segment } from 'semantic-ui-react';

// wrap the View component with the Context Provider
function CounterView() {
  return (
    <CounterContextProvider>
      <h3>Counter</h3>
      <Segment textAlign="center">
        <CounterDisplay />
        <CounterButtons />
      </Segment>
    </CounterContextProvider>
  );
}

export default CounterView;
