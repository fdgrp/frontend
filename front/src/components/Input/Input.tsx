import React from 'react'

import "./Input.scss"

const Input = (props: {value: string, setValue: Function, placeholder: string}) => {
  return (
    <input 
    placeholder={props.placeholder} 
    className="input" 
    value={props.value} 
    onChange={(e: any) => props.setValue(e.target.value)}
     />
  )
}

export default Input