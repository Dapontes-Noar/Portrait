import React from 'react'

const LoginLayout = (props) => {
  return (
    <div className="login-template-container bg-color">
      <div className="bg-shapes">
        {props.children}
      </div>
    </div>
  )
}

export default LoginLayout;
