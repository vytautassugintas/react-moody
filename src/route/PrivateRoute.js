import React from 'react'

import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => {
    const {user} = rest;
    if (user !== null) {
      return <Component {...props}/>
    } else {
      return (
        <Redirect to={{
          pathname: '/',
          state: {from: props.location}
        }}/>
      )
    }
  }}/>
);

export default PrivateRoute;