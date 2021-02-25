import React from 'react';
import Button from '../components/atoms/button';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';


const Home = ({logoutAsync}) => {
  const history = useHistory();


  const handleSubmit = async () => {
    await logoutAsync().then(() => {
      window.localStorage.removeItem('TOKEN')
      history.replace('/login');
    })
  }

  return (
    <div className="home-container bg-color">
      Bienvenido!
      <Button text="LOGOUT" styles="btn-lg" click={() => handleSubmit()} />
    </div>
  )
}

const mapState = (state) => ({
  ...state.login
});

const mapDispatch = (dispatch) => ({
  logoutAsync: () => dispatch.login.logoutAsync(),
})

export default connect(mapState, mapDispatch)(Home)
