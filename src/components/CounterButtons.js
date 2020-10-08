import React, { useContext } from 'react';

// import context
import { CounterContext } from '../context/CounterContext';

// 3p components
import { Button } from 'semantic-ui-react';

/**
 * Render the Count Controls
 */
function CounterButtons() {
  // consume state via the useContext hook
  const [count, setCount] = useContext(CounterContext);

  const increment = () => setCount(count + 1);
  const decrement = () => (count > 0 ? setCount(count - 1) : setCount(count));

  return (
    <div>
      <Button.Group>
        <Button color="red" onClick={decrement}>
          Minus
        </Button>
        <Button color="green" onClick={increment}>
          Add
        </Button>
      </Button.Group>
    </div>
  );
}

export default CounterButtons;
