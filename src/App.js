import React from 'react';

// PAGES
import Login from './pages/login'

// REACT ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import { connect } from 'react-redux'


function App({ auth }) {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

const mapState = (state) => ({
  auth: state.login.auth,
})

export default connect(mapState)(App)
