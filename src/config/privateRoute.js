import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticate, ...rest}) => {
  return (
    <Route 
      {...rest}
      render={(props) => {
        return isAuthenticate ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/', 
            state:{from: props.location}
            }}
          />
        )
      }}
    />
  )
}

export default PrivateRoute;