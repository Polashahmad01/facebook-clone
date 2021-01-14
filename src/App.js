import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignIn from './features/SignIn/SignIn';
import SignUp from './features/SignUp/SignUp';
import './App.css';

const App = () => {

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <h1>You Are Logged In</h1>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
