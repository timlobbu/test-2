import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './NavBar';
import DashboardPage from './DashboardPage';
import ListUsersPage from './ListUsersPage';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mt-4">
          <Route exact path="/" component={DashboardPage} />
          <Route path="/list-users" component={ListUsersPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
