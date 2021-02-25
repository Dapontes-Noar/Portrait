import React from 'react'
import LoginLayout from '../templates/login.layout'
import LoginForm from '../components/organisms/login.form'
import Spacer from '../components/organisms/spacer'

const Login =() => {
  return (
    <LoginLayout>
      <div className="login-page-container">
        <Spacer />
        <LoginForm />
      </div>
    </LoginLayout>
  )
}


export default Login;