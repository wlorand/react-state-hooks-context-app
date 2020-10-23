import React, { useContext } from 'react';

// 3p components - UI Design System
import { Statistic } from 'semantic-ui-react';

// import context component
import { CounterContext } from '../context/CounterContext';

/**
 * Display the dynamic Count -- that's all!
 */
function CounterDisplay() {
  // consume state via the useContext hook - this is sharing state with sibling and child components
  const [count] = useContext(CounterContext);

  return (
    <Statistic>
      <Statistic.Value>{count}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}

export default CounterDisplay;
