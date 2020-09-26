import React, { useState } from 'react';

const Login = () => {

  const [showSecret, setShowSecret] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submitted!')
  }

  return (
    <div className="bg-color">
      <div className="bg-shapes" />
      <div className="container h-100">
        <div className="row h-100 form">
          <div className="col col-lg-5">
            <form className="px-3 m-0" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control input"
                  placeholder="Your E-mail"
                  autoComplete="false"
                  required />

              </div>

              <div className="form-group position-relative spacer">
                <input
                  type={showSecret ? 'text' : 'password'}
                  placeholder="Your password"
                  className="form-control input"
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

export default Login;