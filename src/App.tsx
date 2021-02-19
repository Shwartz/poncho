import React from 'react';
import { Toolbar } from './components/Toolbar';

interface AppProps {
}

function App({}: AppProps) {
  return (
    <div>
      <Toolbar/>
      <h1>Hello from Tailwind</h1>
    </div>
  );
}

export default App;
