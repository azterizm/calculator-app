import React from 'react';
import { Screen } from './components/Screen';
import { Numbers } from './components/Numbers';
import { Operations } from './components/Operations';
import { History } from './components/History';
import { About } from './components/About';

import './App.css';

const App = () => {
  return (
    <>
      <About />
      <div id="calculator">
        <Screen action={2} />
        <Numbers />
        <Operations />
      </div>

      <History />
    </>
  );
};

export default App;
