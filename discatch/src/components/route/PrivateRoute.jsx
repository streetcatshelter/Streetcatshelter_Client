// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';

// AUTH
import Auth from "shared/auth";

function PrivateRoute({component, path}) {
  return (
      <Route component={Auth(component, true)} path={path} />
  )
}

export default PrivateRoute;
