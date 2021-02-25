import React from 'react'

const inputText = ({ type, placeholder, styles="" }) => {
  return <input type={type} placeholder={placeholder} className={"input " + styles} />
}

export default inputText;