import React from 'react';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ render: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      //const currentUser = authenticationService.currentUserValue;
      // const currentUser = null;
      // if (!currentUser) {
      // 	// not logged in so redirect to login page with the return url
      // 	return <Redirect to={{ pathname: '/' }} />;
      // }

      // // check if route is restricted by role
      // if (roles && roles.indexOf(currentUser.role) === -1) {
      // 	// role not authorised so redirect to home page
      // 	return <Redirect to={{ pathname: '/' }} />;
      // }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
