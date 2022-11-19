import { type } from 'os'
import React from 'react'

import "./Input.scss"

const Input = (props: any) => {
  return (
    <input 
    placeholder={props.placeholder} 
    className="input" 
    value={props.value} 
    type={props.type}
    onChange={(e: any) => props.setValue(e.target.value)}
     />
  )
}

export default Input