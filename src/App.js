import React from 'react';
import './App.css';
import HookCounterOne from './components/usestate/HookCounterOne';
import HookCounterTwo from './components/usestate/HookCounterTwo';

function App() {
  return (
    <div className="App">
     <HookCounterOne />
     <HookCounterTwo />
    </div>
  );
}

export default App;
