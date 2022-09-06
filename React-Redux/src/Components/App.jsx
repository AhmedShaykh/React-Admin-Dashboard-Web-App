import React from 'react';
import '../App.css';
import CounterOutput from './CounterOutput.js';
import CounterInput from './CounterInput.js';

function App() {
  return (
    <div className='App'>
      <CounterOutput />
      <CounterInput />
    </div>
  );
}

export default App;