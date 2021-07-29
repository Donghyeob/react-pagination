import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

const Login = () => {
  return (
    <Router>
      <Switch>
        <Route paht='/' exact render={() => <Home />} />
      </Switch>
    </Router>
  )
}

export default Login;