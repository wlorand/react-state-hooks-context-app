import React, { useContext } from 'react';

// import context
import { CounterContext } from '../context/CounterContext';

// 3p components
import { Button } from 'semantic-ui-react';

function CounterButtons() {
  // consume state via the useContext hook
  const [count, setCount] = useContext(CounterContext);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // TODO: use Fragment
  return (
    <div>
      <Button.Group>
        <Button color="green" onClick={increment}>
          Add
        </Button>
        <Button color="red" onClick={decrement}>
          Minus
        </Button>
      </Button.Group>
    </div>
  );
}

export default CounterButtons;
