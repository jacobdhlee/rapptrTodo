import React from 'react';
import { BrowserRouter as Route, Redirect } from 'react-router-dom';

import { getAssessToken } from './helper';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={() => {
        return getAssessToken() ? (
          <Component />
        ) : (
          <Redirect to={{pathname: '/'}}/>
        )
      }}
    />
  )
}

export default PrivateRoute;