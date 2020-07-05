import React from 'react';
import './App.css';
import HookCounterOne from './components/usestate/HookCounterOne';
import HookCounterTwo from './components/usestate/HookCounterTwo';
import HookObjectThree from './components/usestate/HookObjectThree';
import HookCouterFour from './components/usestate/HookCouterFour';

function App() {
  return (
    <div className="App">
      <HookCounterOne />
      <HookCounterTwo />
      <HookObjectThree />
      <HookCouterFour />
    </div>
  );
}

export default App;
