import React from 'react';
import '../App.css';
import CounterInput from './CounterInput.js';
import CounterOutput from './CounterOutput.js';

function App() {
  return (
    <div className='App'>
      <CounterOutput />
      <br />
      <CounterInput />
    </div>
  );
}

export default App;