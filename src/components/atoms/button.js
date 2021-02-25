import React from 'react'

const Button = ({ type="button", text, styles="", click }) => {
  return <button type={type} className={"button " + styles} onClick={click}>{text}</button>
}

export default Button;
