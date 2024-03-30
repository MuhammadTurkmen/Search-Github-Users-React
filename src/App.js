import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route>
        <Dashboard></Dashboard>
      </Route>
      <Login />
    </Router>
  );
}

export default App;
