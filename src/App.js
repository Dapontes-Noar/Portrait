import React from 'react';

// PAGES
import { Login, Home } from './pages'

// REACT ROUTER
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


import { connect } from 'react-redux'


function App({ auth }) {
  return (
    <Router>
      <Switch>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          {!auth ? <Redirect to="/login" /> : <Home />}
        </Route>



      </Switch>
    </Router>
  );
}

const mapState = (state) => ({
  auth: state.login.auth,
})

export default connect(mapState)(App)
