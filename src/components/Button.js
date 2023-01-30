import React from 'react'

const Button = ({text, onclick, style}) => {
  return (
    <button className={'btn ' + style} onClick={onclick}>{text}</button>
  )
}

export default Button