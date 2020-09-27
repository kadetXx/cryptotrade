import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import AuthenticatedRoute from './AuthenticatedRoute'
import UnauthenticatedRoute from './UnauthenticatedRoute'

import Home from './components/homepage/Homepage'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Dashboard from './components/dashboard/Dashboard'
import Deposit from './components/deposit/Deposit'
import Transactions from './components/transactions/Transactions'
import Profile from './components/profile/Profile'

function App() {

  return (
  

    <div className="App">
      <Router>
        <Switch>
        <Route exact path='/' component={Home} />

        <UnauthenticatedRoute path='/login/' component={Login} />
        <UnauthenticatedRoute path='/sign-up' component={SignUp} />
        
        <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
        <AuthenticatedRoute exact path='/dashboard/deposit' component={Deposit} />
        <AuthenticatedRoute exact path='/dashboard/transactions' component={Transactions} />
        <AuthenticatedRoute exact path='/dashboard/profile' component={Profile} />
    
        <AuthenticatedRoute component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
