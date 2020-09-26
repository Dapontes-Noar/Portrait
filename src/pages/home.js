import React from 'react';

import { connect } from 'react-redux';

import { useHistory } from "react-router-dom";


const Home = ({ logoutAsync }) => {

  const history = useHistory();

  const handleClick = async () => {
    await logoutAsync()
      .then(() => {
        history.replace("/login")
        window.localStorage.setItem('logged', false)
      })
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Welcome</h5>
        <h6 className="card-subtitle mb-2 text-muted"></h6>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipiscing elit, primis quam vel viverra ornare nisi ultricies, cursus maecenas conubia accumsan aenean dictum.
        </p>

        <button
          onClick={handleClick}
          className="btn btn-dark btn-lg btn-block rounded-pill">
          LOGOUT
        </button>
      </div>
    </div>
  );
};


const mapState = (state) => ({
  ...state.login
})

const mapDispatch = (dispatch) => ({
  logoutAsync: () => dispatch.login.logoutAsync(),
})

export default connect(mapState, mapDispatch)(Home)