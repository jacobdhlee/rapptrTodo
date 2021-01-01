import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './config/privateRoute';

import { Container } from './styles';

import { getAssessToken } from './config/helper';

import List from './pages/List';
import LogIn from './pages/Login';

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LogIn />
          </Route>
          <PrivateRoute exact path='/list' component={List} isAuthenticate={getAssessToken() !== null}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
