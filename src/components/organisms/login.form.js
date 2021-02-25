import React, { useRef } from 'react';
import HiddenInput from '../molecules/hidden.input';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Text from '../atoms/text';


import { useHistory } from "react-router-dom";

import { connect } from 'react-redux';
import Swal from 'sweetalert2';


const LoginForm = ({ loginAsync }) => {

  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const history = useHistory();

  const handleSubmit = async () => {

    const username = refEmail.current.value;
    const password = refPassword.current.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email can't empty or have a wrong format",
        showConfirmButton: false,
        timer: 1000
      });
    } else if (password.length === 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password can't be empty",
        showConfirmButton: false,
        timer: 1000
      });
    } else {
      const user = {
        email: username,
        password: password
      }
  
      await loginAsync(user)
        .then((result) => {
          window.localStorage.setItem('TOKEN', result);
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Bienvenido ${user.email}`,
            showConfirmButton: false,
            timer: 1000
          });
          history.replace('/');
        }).catch((error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: error.message,
            showConfirmButton: false,
            timer: 2000
          });
        })
    }
  }

  return (
    <div className="login-form">
      <div className="login-form-template">
        <Input placeholder=" Your email" reference={refEmail} />
        <HiddenInput reference={refPassword} />
      </div>

      <div className="login-form-template">
        <Button text="SIGN IN" styles="btn-lg" click={() => handleSubmit()} />
        <Text text="NEW ACCOUNT" />
      </div>
    </div>
  );
};

const mapState = (state) => ({
  ...state.login
});

const mapDispatch = (dispatch) => ({
  loginAsync: (data) => dispatch.login.loginAsync(data),
})

export default connect(mapState, mapDispatch)(LoginForm)
