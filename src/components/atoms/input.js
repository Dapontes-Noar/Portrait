import React from 'react'

const inputText = ({ type, placeholder, styles="", reference=null }) => {
  return <input type={type} placeholder={placeholder} className={"input " + styles} ref={reference} />
}

export default inputText;