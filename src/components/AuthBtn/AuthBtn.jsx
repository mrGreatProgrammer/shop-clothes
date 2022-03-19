import React from 'react'

function AuthBtn(props) {
  return (
    <button className={"auth-btn " + props.className} >{props.txt}</button>
  )
}

export default AuthBtn