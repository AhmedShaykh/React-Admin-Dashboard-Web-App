import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Memo from './Hooks/Memo';
import Ref from './Hooks/Ref';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Memo />
      <Ref />
    </>
  );
}

export default App;