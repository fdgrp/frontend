import React from 'react'
import "./Button.scss"

export default function Button(props: any) {
  return (
    <button 
    className={["buttons__button", props.class].join(" ")} 
    disabled={props.disabled} 
    onClick={props.function}>
    {props.name}
    </button>
  )
}

