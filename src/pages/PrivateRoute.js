import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = () => {
  const {isAuthenticated, user} = useAuth0()
  const isUser = isAuthenticated && user
  return <h2>Private Route</h2>
};
export default PrivateRoute;
