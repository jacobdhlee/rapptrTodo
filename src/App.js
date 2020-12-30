import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from './config/privateRoute';

import { Container } from './styles';

import List from './pages/List';
import LogIn from './pages/Login';

const App = () => {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path='/'>
            <LogIn />
            {/* <List /> */}
          </Route>
          <PrivateRoute exact path='/list' component={List}/>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
