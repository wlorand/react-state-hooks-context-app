import React from 'react';

// View Components
import CounterView from './views/CounterView';

// 3p UI Components
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <CounterView />
    </Container>
  );
}

export default App;
