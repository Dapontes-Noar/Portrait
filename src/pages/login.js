import React, { useState, useRef } from 'react';

import { connect } from 'react-redux'

import Swal from 'sweetalert2'

import { useHistory } from "react-router-dom";

const Login = ({ error, loginAsync }) => {

  const mailRef = useRef();
  const passwordRef = useRef();

  let history = useHistory();

  const [mailError, setMailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [formErrors, setFormErrors] = useState([]);
  const [showSecret, setShowSecret] = useState(false)


  const handleSubmit = async (event) => {
    event.preventDefault();

    const mail = mailRef.current;
    const password = passwordRef.current;

    const errors = handleValidation(mail, password)
    setFormErrors(errors)

    if (errors.length === 0) {
      setMailError(false)
      setPasswordError(false)

      const user = {
        email: mail.value,
        password: password.value
      }

      await loginAsync(user)
        .then(() => {

          if (error) {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: error,
              showConfirmButton: false,
              timer: 3000
            })

            window.localStorage.setItem('logged', false)

          } else {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: `Welcome ${user['email']}`,
              showConfirmButton: false,
              timer: 3000
            })

            history.replace("/")
            window.localStorage.setItem('logged', true)


          }
        })
    }
  }

  const handleValidation = (mail, password) => {

    const errors = [];

    if (mail.value.length === 0) {
      errors.push('E-mail cannot be empty');
      setMailError(true);
    }

    if (!/[A-Za-z0-9]{1,}\@[A-Za-z0-9]{1,}\.[A-Za-z]{1,}/.test(mail.value)) {
      errors.push('Invalid email format');
      setMailError(true);
    }

    if (password.value.length === 0) {
      errors.push('Password cannot be empty');
      setPasswordError(true);
    }

    return errors
  }

  return (
    <div className="bg-color">
      <div className="bg-shapes" />
      <div className="container h-100">
        <div className="row h-100 form">
          <div className="col col-lg-5">

            {
              formErrors.map((error, index) => {
                return <div key={index} className="alert alert-danger info">
                  {error}
                </div>
              })
            }

            <form className="px-3 m-0" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="email"
                  className={`form-control input ${mailError ? 'is-invalid' : 'is-valid'}`}
                  placeholder="Your E-mail"
                  autoComplete="false"
                  ref={mailRef}
                  required />
              </div>

              <div className="form-group position-relative spacer">
                <input
                  type={showSecret ? 'text' : 'password'}
                  placeholder="Your password"
                  className={`form-control input ${passwordError ? 'is-invalid' : 'is-valid'}`}
                  ref={passwordRef}
                  required />
                <div
                  className="font-weight-bold rounded-pill bg-white px-2 position-absolute password-btn"
                  onClick={() => setShowSecret(!showSecret)}>
                  {showSecret ? 'HIDE' : 'SHOW'}
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-light btn-lg btn-block rounded-pill">
                SIGN IN
              </button>

              <div className="form-group mt-3 text-white text-center mb-5">
                <a href="/">NEW ACCOUNT</a>
              </div>
            </form>

          </div>
        </div>
      </div>


    </div>
  )
};


const mapState = (state) => ({
  ...state.login
})

const mapDispatch = (dispatch) => ({
  loginAsync: (data) => dispatch.login.loginAsync(data),
})

export default connect(mapState, mapDispatch)(Login)