import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import CustomDeposit from "./CustomDeposit";

import Home from "./components/homepage/Homepage";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Deposit from "./components/deposit/Deposit";
import Transactions from "./components/transactions/Transactions";
import Profile from "./components/profile/Profile";

function App() {
  const [showWallet, setShowWallet] = useState(false);
  const [toSend, setToSend] = useState(0);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <UnauthenticatedRoute path='/login/' component={Login} />
          <UnauthenticatedRoute path='/sign-up' component={SignUp} />

          <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
          <CustomDeposit
            exact
            path='/dashboard/deposit'
            component={Deposit}
            showWallet={showWallet}
            setShowWallet={setShowWallet}
            toSend={toSend}
            setToSend={setToSend}
          />
          <AuthenticatedRoute
            exact
            path='/dashboard/transactions'
            component={Transactions}
          />
          <AuthenticatedRoute
            exact
            path='/dashboard/profile'
            component={Profile}
          />

          <AuthenticatedRoute component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
