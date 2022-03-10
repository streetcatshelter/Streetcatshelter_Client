// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';

// AUTH
import Auth from "shared/auth";

function PrivateRoute({component, auth, path}) {
  return (
    <Route component={Auth(component, auth)} path={path} exact />
  )
}

export default PrivateRoute;
