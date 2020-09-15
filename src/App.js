import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';

import Dashboard from './components/dashboard/Dashboard'
import Transactions from './components/transactions/Transactions'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/dashboard/transactions' component={Transactions} />
      </Router>
    </div>
  );
}

export default App;
