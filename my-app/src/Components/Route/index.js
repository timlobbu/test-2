import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from './DashboardPage';
import ListUsersPage from './ListUsersPage';

const Routing = () => {
  return (
    <div>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/list-users" component={ListUsersPage} />
    </div>
  );
}

export default Routing;
