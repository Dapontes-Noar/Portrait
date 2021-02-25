import React from 'react';
import HiddenInput from '../molecules/hidden.input';
import Input from '../atoms/input';
import Button from '../atoms/button';
import Text from '../atoms/text';

const LoginForm = () => {

  return (
    <div className="login-form">
      <div className="login-form-template">
        <Input placeholder=" Your email"/>
        <HiddenInput />
      </div>

      <div className="login-form-template">
        <Button text="SIGN IN" styles="btn-lg"/>
        <Text text="NEW ACCOUNT" />
      </div>

    </div>
  );
};

export default LoginForm;
