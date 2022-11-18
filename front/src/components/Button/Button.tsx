import React from 'react'
import "./Button.scss"

export default function Button(props: any) {
  return (
    <button 
    className={["buttons__button", props.class].join(" ")} 
    style={{backgroundColor: props.backgroundColor, color: props.color}}
    disabled={props.disabled} 
    id={props.id} 
    onClick={props.function}>
      {props.name}
    </button>
  )
}

