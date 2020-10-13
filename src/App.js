import React from 'react';

// View Components
import CounterView from './views/CounterView';
import ContactView from './views/ContactView';

// 3p UI Components
import { Container } from 'semantic-ui-react';

// styles
import './app.css';

/**
 * App wrapped with UI Container from Design System
 * Notice this App-level component does remain as a Shell for a View
 *  (again good mini architecture for your React apps)
 */
function App() {
  return (
    <Container>
      <h1 className="app-title">React Context Hooks Demos</h1>
      <ContactView />
      <CounterView />
    </Container>
  );
}

export default App;
