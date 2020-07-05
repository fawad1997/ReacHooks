import React from 'react';
import './App.css';
import EffectCounterOne from './components/useEffect/EffectCounterOne';
import EffectOnceTwo from './components/useEffect/EffectOnceTwo';
import EffectIntervalCounter from './components/useEffect/EffectIntervalCounter';

//   import HookCounterOne from './components/usestate/HookCounterOne';
// import HookCounterTwo from './components/usestate/HookCounterTwo';
// import HookObjectThree from './components/usestate/HookObjectThree';
// import HookCouterFour from './components/usestate/HookCouterFour';


function App() {
  return (
    <div className="App">
      <EffectIntervalCounter />
    </div>
  );
}

export default App;
