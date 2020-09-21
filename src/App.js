import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import ProtectedRoute from './ProtectedRoute'

import Home from './components/homepage/Homepage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Transactions from './components/transactions/Transactions'

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/sign-up' component={SignUp} />
        <ProtectedRoute exact path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/dashboard/transactions' component={Transactions} />
        <ProtectedRoute component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
