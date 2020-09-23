import React from 'react';
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import AuthenticatedRoute from './AuthenticatedRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute'

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

        <UnauthenticatedRoute path='/login/' component={Login} />
        <UnauthenticatedRoute path='/sign-up' component={SignUp} />
        
        <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
        <AuthenticatedRoute path='/dashboard/transactions' component={Transactions} />
        <AuthenticatedRoute component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
