import React, { useContext } from 'react';

// 3p components
import { Statistic } from 'semantic-ui-react';

// context component
import { CounterContext } from '../context/CounterContext';

function CounterDisplay() {
  // consume state via the useContext hook
  const [count] = useContext(CounterContext);

  return (
    <Statistic>
      <Statistic.Value>{count}</Statistic.Value>
      <Statistic.Label>Counter</Statistic.Label>
    </Statistic>
  );
}

export default CounterDisplay;
