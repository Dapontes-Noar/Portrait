import React, { useState } from 'react';
import Input from '../atoms/input';
import Button from '../atoms/button';

const HiddenInput = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="hidden-input-container">
      <Input type={hidden? "text": "password" } placeholder="Your password" />
      <Button 
        text={hidden? "HIDE": "SHOW" } 
        click={() => setHidden(!hidden)} 
        styles="input-btn"
      />
    </div>
  );
};

export default HiddenInput;
