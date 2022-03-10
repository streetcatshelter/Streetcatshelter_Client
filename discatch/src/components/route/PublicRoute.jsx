// LIBRARY
import React from 'react';
import { Route } from 'react-router-dom';

// AUTH
import Auth from "shared/auth";

function PublicRoute({component, path}) {
  return (
    <Route component={Auth(component, false)} path={path} />
  )
}

export default PublicRoute;
