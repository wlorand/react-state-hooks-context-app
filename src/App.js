import React from 'react';

// View Components
import CounterView from './views/CounterView';

// 3p UI Components
import { Container } from 'semantic-ui-react';

/**
 * App wrapped with UI Container from Design System
 * Notice this App-level component does remain as a Shell for a View
 *  (again good mini architecture for your React apps)
 */
function App() {
  return (
    <Container>
      <h1>React Hooks Context Demo</h1>
      <CounterView />
    </Container>
  );
}

export default App;
