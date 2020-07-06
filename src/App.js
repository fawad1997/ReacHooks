import React from 'react';
import './App.css';
import Home from './components/contextExample/Home';
import AddUser from './components/contextExample/AddUser';
import EditUser from './components/contextExample/EditUser';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalProvider } from './components/contextExample/context/GlobalState';
// import DataFetching from './components/fetchdata/DataFetching';
// import EffectCounterOne from './components/useEffect/EffectCounterOne';
// import EffectOnceTwo from './components/useEffect/EffectOnceTwo';
// import EffectIntervalCounter from './components/useEffect/EffectIntervalCounter';

//   import HookCounterOne from './components/usestate/HookCounterOne';
// import HookCounterTwo from './components/usestate/HookCounterTwo';
// import HookObjectThree from './components/usestate/HookObjectThree';
// import HookCouterFour from './components/usestate/HookCouterFour';


function App() {
  return (
    <GlobalProvider>
      <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
